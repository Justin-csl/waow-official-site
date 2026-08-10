from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


OUTPUT_DIR = Path("assets/extracted-notifications")
SCALE = 4

ITEMS = [
    {
        "source": Path("/Users/csl-macbook-2019/Desktop/Screenshot 2026-07-28 at 9.50.53\u202fAM.png"),
        "output": "reaction-bubble.png",
        "rect": (30, 17, 122, 101),
        "radius": 28,
        "tail": [(37, 91), (38, 110), (57, 96)],
        "content": [(52, 35, 103, 84)],
    },
    {
        "source": Path("/Users/csl-macbook-2019/Desktop/Screenshot 2026-07-28 at 9.50.49\u202fAM.png"),
        "output": "miss-you-message.png",
        "rect": (31, 20, 313, 109),
        "radius": 29,
        "content": [(48, 37, 104, 96), (112, 38, 277, 88)],
    },
    {
        "source": Path("/Users/csl-macbook-2019/Desktop/Screenshot 2026-07-28 at 9.50.45\u202fAM.png"),
        "output": "made-me-smile-message.png",
        "rect": (17, 31, 298, 123),
        "radius": 29,
        "content": [(33, 48, 86, 104), (96, 51, 243, 102)],
    },
    {
        "source": Path("/Users/csl-macbook-2019/Desktop/Screenshot 2026-07-28 at 9.50.42\u202fAM.png"),
        "output": "waow-notification.png",
        "rect": (13, 20, 440, 112),
        "radius": 29,
        "content": [(32, 36, 89, 93), (99, 38, 418, 88)],
    },
]


def scaled(values):
    return tuple(round(value * SCALE) for value in values)


def extract(item):
    source = Image.open(item["source"]).convert("RGBA")
    mask = Image.new("L", (source.width * SCALE, source.height * SCALE), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle(
        scaled(item["rect"]),
        radius=item["radius"] * SCALE,
        fill=255,
    )
    if item.get("tail"):
        draw.polygon([scaled(point) for point in item["tail"]], fill=255)

    mask = mask.filter(ImageFilter.GaussianBlur(0.6 * SCALE))
    mask = mask.resize(source.size, Image.Resampling.LANCZOS)
    clean = Image.new("RGBA", source.size, (252, 252, 253, 255))
    for box in item["content"]:
        clean.alpha_composite(source.crop(box), dest=(box[0], box[1]))
    clean.putalpha(mask)

    bbox = mask.getbbox()
    if not bbox:
        raise RuntimeError(f"Empty mask for {item['source']}")
    padding = 3
    crop = (
        max(0, bbox[0] - padding),
        max(0, bbox[1] - padding),
        min(source.width, bbox[2] + padding),
        min(source.height, bbox[3] + padding),
    )
    result = clean.crop(crop)
    result.save(OUTPUT_DIR / item["output"], "PNG", optimize=True)


OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
for item in ITEMS:
    extract(item)
