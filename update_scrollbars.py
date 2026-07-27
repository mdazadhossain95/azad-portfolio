import re

with open('app/globals.css', 'r') as f:
    content = f.read()

# Replace the stealth section with visible but subtle scrollbars for V1, V2, V4
# AND restore V3's custom scrollbar
stealth_pattern = r'/\* =========================================\n   Global Stealth Scrollbar Styling\n   ========================================= \*/.*?::-webkit-scrollbar-thumb:hover.*?}'
stealth_match = re.search(stealth_pattern, content, re.DOTALL)

if stealth_match:
    replacement = """/* =========================================
   Global Scrollbar Styling (V1, V2, V4) - Subtle
   ========================================= */
html, .v1-scroll-container, .v2-scroll-container {
  scrollbar-color: var(--line) var(--bg);
  scrollbar-width: thin;
}

::-webkit-scrollbar, .v1-scroll-container::-webkit-scrollbar, .v2-scroll-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track, .v1-scroll-container::-webkit-scrollbar-track, .v2-scroll-container::-webkit-scrollbar-track {
  background: var(--bg);
  border: none;
}

::-webkit-scrollbar-thumb, .v1-scroll-container::-webkit-scrollbar-thumb, .v2-scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--line);
  border: none;
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover, .v1-scroll-container::-webkit-scrollbar-thumb:hover, .v2-scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: var(--text-muted);
}

/* =========================================
   V3 Custom Notebook Scrollbar
   ========================================= */
.v3-scroll-container::-webkit-scrollbar {
  width: 14px;
}

.v3-scroll-container::-webkit-scrollbar-track {
  background: var(--bg);
  background-image: radial-gradient(rgba(44, 42, 40, 0.12) 1px, transparent 1px);
  background-size: 18px 18px;
  border-left: 1px dashed var(--line);
}

.v3-scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--accent);
  border-radius: 10px;
  border-left: 3px solid var(--bg);
  border-right: 3px solid var(--bg);
}

.v3-scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: var(--v3-ink);
}

.v3-scroll-container {
  scrollbar-color: var(--accent) var(--bg);
  scrollbar-width: thin;
}"""
    content = content.replace(stealth_match.group(0), replacement)
    
    with open('app/globals.css', 'w') as f:
        f.write(content)
    print("Scrollbars updated successfully.")
else:
    print("Could not find the stealth scrollbar pattern.")
