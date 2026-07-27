from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path("artifacts/v2-routing")
OUT.mkdir(parents=True, exist_ok=True)

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    results = {}

    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    errors = []
    failures = []
    page.on("console", lambda message: errors.append(message.text) if message.type == "error" else None)
    page.on("requestfailed", lambda request: failures.append(f"{request.url}: {request.failure}"))

    page.goto("http://localhost:3010/v2/projects", wait_until="networkidle")
    if page.get_by_role("button", name="Skip cosmic entry").is_visible():
        page.get_by_role("button", name="Skip cosmic entry").click()
        page.wait_for_timeout(700)

    first_project = page.locator('a[href^="/v2/projects/"]').first
    results["archive_project_href"] = first_project.get_attribute("href")
    first_project.click()
    page.wait_for_url("**/v2/projects/*")
    page.wait_for_load_state("networkidle")
    results["detail_url"] = page.url
    results["detail_title"] = page.locator("h1").inner_text()
    results["detail_back_href"] = page.get_by_role("link", name="Project archive").get_attribute("href")
    results["detail_overflow"] = page.evaluate(
        "document.documentElement.scrollWidth > document.documentElement.clientWidth"
    )
    page.screenshot(path=str(OUT / "v2-project-detail-desktop.png"), full_page=True)

    page.get_by_role("link", name="Return to Jupiter").click()
    page.wait_for_url("**/v2#projects")
    page.wait_for_timeout(1200)
    results["returned_projects_hash"] = page.url.endswith("/v2#projects")
    projects_top = page.locator("#projects").evaluate("element => element.getBoundingClientRect().top")
    results["projects_section_top"] = projects_top
    results["projects_section_near_top"] = abs(projects_top) < 220

    page.goto("http://localhost:3010/v2/articles", wait_until="networkidle")
    results["article_back_href"] = page.get_by_role("link", name="Back to transmissions").get_attribute("href")
    results["medium_target"] = page.locator('a[href*="medium.com"]').first.get_attribute("target")

    page.goto("http://localhost:3010/v2#transmissions", wait_until="networkidle")
    page.wait_for_timeout(1800)
    transmissions_top = page.locator("#transmissions").evaluate(
        "element => element.getBoundingClientRect().top"
    )
    results["direct_hash_articles_top"] = transmissions_top
    results["direct_hash_articles_near_top"] = abs(transmissions_top) < 220

    results["console_errors"] = errors
    results["failed_requests"] = failures
    context.close()

    mobile = browser.new_context(viewport={"width": 390, "height": 844})
    mobile_page = mobile.new_page()
    mobile_page.goto(
        "http://localhost:3010/v2/projects/codegopay-individual",
        wait_until="networkidle",
    )
    if mobile_page.get_by_role("button", name="Skip cosmic entry").is_visible():
        mobile_page.get_by_role("button", name="Skip cosmic entry").click()
        mobile_page.wait_for_timeout(700)
    results["mobile_overflow"] = mobile_page.evaluate(
        "document.documentElement.scrollWidth > document.documentElement.clientWidth"
    )
    results["mobile_archive_link_visible"] = mobile_page.get_by_role(
        "link", name="Project archive"
    ).is_visible()
    mobile_page.screenshot(path=str(OUT / "v2-project-detail-mobile.png"), full_page=False)
    mobile.close()

    browser.close()
    print(results)
