from playwright.sync_api import sync_playwright
import time
import os

def run_tests():
    out_dir = "v2_test_results"
    os.makedirs(out_dir, exist_ok=True)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # Test full page screenshots at breakpoints
        breakpoints = [
            (1440, 900, "desktop_lg"),
            (1280, 800, "desktop_md"),
            (1024, 768, "tablet_landscape"),
            (768, 1024, "tablet_portrait"),
            (430, 932, "mobile_lg"),
            (390, 844, "mobile_md"),
        ]
        
        context = browser.new_context()
        page = context.new_page()
        
        # Capture console errors
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda err: errors.append(str(err)))
        
        for w, h, name in breakpoints:
            page.set_viewport_size({"width": w, "height": h})
            page.goto("http://localhost:3000/v2")
            page.wait_for_load_state("networkidle")
            
            # Wait a moment for initial 3D load
            time.sleep(2)
            
            # Scroll down the page slowly to trigger scroll animations and lazy load
            for i in range(10):
                page.mouse.wheel(0, 1000)
                time.sleep(0.5)
            
            # Scroll back to top
            page.evaluate("window.scrollTo(0, 0)")
            time.sleep(1)
            
            page.screenshot(path=f"{out_dir}/full_{name}.png", full_page=True)
        
        # Capture section specific screenshots (desktop)
        page.set_viewport_size({"width": 1440, "height": 900})
        page.goto("http://localhost:3000/v2")
        page.wait_for_load_state("networkidle")
        
        sections = ["hero", "about", "experience", "projects", "articles", "capabilities", "contact"]
        for section in sections:
            # Try to scroll to section
            try:
                page.locator(f"#{section}").scroll_into_view_if_needed()
                time.sleep(1) # wait for camera to settle
                page.screenshot(path=f"{out_dir}/section_{section}.png")
            except Exception as e:
                print(f"Could not capture {section}: {e}")
        
        # Pages screenshots
        pages = [
            ("/v2/projects", "projects_archive"),
            ("/v2/articles", "articles_archive"),
        ]
        
        for url, name in pages:
            page.goto(f"http://localhost:3000{url}")
            page.wait_for_load_state("networkidle")
            time.sleep(1)
            page.screenshot(path=f"{out_dir}/page_{name}.png", full_page=True)
            
        browser.close()
        
        # Write error report
        with open(f"{out_dir}/errors.log", "w") as f:
            for err in errors:
                f.write(f"{err}\n")
                
        print("Done capturing screenshots and errors.")

if __name__ == "__main__":
    run_tests()
