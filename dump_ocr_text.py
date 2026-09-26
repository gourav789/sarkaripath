import json
import re

with open("all_pages_ocr.json", encoding="utf-8-sig") as f:
    pages_ocr = json.load(f)

for p in pages_ocr:
    print(f"=== Page {p['Page']} ===")
    print(p['Text'])
    print("-" * 50)
