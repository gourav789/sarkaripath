import os
from PIL import Image
import numpy as np
import json

# Let's inspect the bounding boxes of Green, Yellow, Red boxes across all pages
color_boxes_by_page = {}

for pno in range(1, 57):
    img_path = f"pdf_pages/page_{pno}.png"
    if not os.path.exists(img_path):
        continue
    img = Image.open(img_path).convert("RGB")
    arr = np.array(img)
    H, W, _ = arr.shape
    
    # Exclude the top header (y < 200) where the legend is located
    arr_body = arr[200:, :, :]
    
    # Green: G > 100, R < 80, B < 80
    green_mask = (arr_body[:,:,1] > 90) & (arr_body[:,:,0] < 80) & (arr_body[:,:,2] < 80)
    # Yellow: R > 200, G > 200, B < 80
    yellow_mask = (arr_body[:,:,0] > 180) & (arr_body[:,:,1] > 180) & (arr_body[:,:,2] < 80)
    # Red: R > 180, G < 80, B < 80
    red_mask = (arr_body[:,:,0] > 180) & (arr_body[:,:,1] < 80) & (arr_body[:,:,2] < 80)
    
    def get_components(mask):
        # find rows that have matching pixels
        row_counts = np.sum(mask, axis=1)
        active_rows = np.where(row_counts > 50)[0]
        if len(active_rows) == 0:
            return []
        boxes = []
        start = active_rows[0]
        prev = active_rows[0]
        for r in active_rows[1:]:
            if r > prev + 10:
                boxes.append((int(start + 200), int(prev + 200)))
                start = r
            prev = r
        boxes.append((int(start + 200), int(prev + 200)))
        return boxes

    green_boxes = get_components(green_mask)
    yellow_boxes = get_components(yellow_mask)
    red_boxes = get_components(red_mask)
    
    color_boxes_by_page[pno] = {
        "green": green_boxes,
        "yellow": yellow_boxes,
        "red": red_boxes
    }

with open("color_boxes.json", "w") as f:
    json.dump(color_boxes_by_page, f, indent=2)

print("Color boxes extracted!")
