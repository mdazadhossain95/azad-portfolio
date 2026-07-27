from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # Desktop
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    page.goto('http://localhost:3000/v3')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/Users/azad/.gemini/antigravity-cli/brain/b9173b9c-4fb4-44e2-8e81-a401d392e9b7/desktop.png', full_page=True)
    
    # Mobile
    page_mobile = browser.new_page(viewport={'width': 375, 'height': 667})
    page_mobile.goto('http://localhost:3000/v3')
    page_mobile.wait_for_load_state('networkidle')
    page_mobile.screenshot(path='/Users/azad/.gemini/antigravity-cli/brain/b9173b9c-4fb4-44e2-8e81-a401d392e9b7/mobile.png', full_page=True)
    
    browser.close()
