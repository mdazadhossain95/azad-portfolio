from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://localhost:3010/v2?v2debug"
OUT = Path("artifacts/v2-entry")

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    results = {}

    desktop = browser.new_context(viewport={"width": 1440, "height": 900})
    page = desktop.new_page()
    console_errors = []
    failed_requests = []
    page.on("console", lambda message: console_errors.append(message.text) if message.type == "error" else None)
    page.on("requestfailed", lambda request: failed_requests.append(f"{request.url}: {request.failure}"))
    page.goto(BASE, wait_until="networkidle")
    page.wait_for_timeout(5500)
    page.screenshot(path=str(OUT / "observatory-desktop-early.png"))
    page.wait_for_timeout(9500)
    page.screenshot(path=str(OUT / "observatory-desktop-survey.png"))
    results["desktop_overflow"] = page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth")
    results["black_hole_nodes"] = page.locator("[class*='gateway'], [class*='spacecraft'], [class*='event-horizon']").count()
    results["observatory_visible"] = page.locator(".v2-entry-observatory").is_visible()
    results["status"] = page.locator(".v2-entry-status").inner_text()
    page.get_by_role("button", name="Skip cosmic entry").click()
    page.wait_for_timeout(900)
    results["entry_removed"] = page.locator(".v2-cosmic-entry").count() == 0
    results["canvas_visible_after_skip"] = page.locator("canvas").first.is_visible()
    page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(1000)
    results["canvas_visible_after_reverse"] = page.locator("canvas").first.is_visible()
    results["console_errors"] = console_errors
    results["failed_requests"] = failed_requests
    desktop.close()

    mobile = browser.new_context(viewport={"width": 390, "height": 844})
    mobile_page = mobile.new_page()
    mobile_page.goto(BASE, wait_until="networkidle")
    mobile_page.wait_for_timeout(6500)
    mobile_page.screenshot(path=str(OUT / "observatory-mobile.png"))
    results["mobile_overflow"] = mobile_page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth")
    results["mobile_observatory_visible"] = mobile_page.locator(".v2-entry-observatory").is_visible()
    results["mobile_heading_visible"] = mobile_page.get_by_role("heading", name="WELCOME TO MY UNIVERSE").is_visible()
    mobile.close()

    browser.close()
    print(results)
