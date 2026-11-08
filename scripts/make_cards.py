"""Generate self-contained SVG project cards for the profile README.

The cards are plain SVG files committed to the repository, so they never depend
on an external image service. Edit CARDS below and run:

    python scripts/make_cards.py
"""

from __future__ import annotations

import textwrap
from html import escape
from pathlib import Path

OUT_DIR = Path(__file__).resolve().parent.parent / "assets"
WIDTH, HEIGHT = 420, 172
FONT = "'Segoe UI', -apple-system, Helvetica, Arial, sans-serif"
WRAP_AT = 50  # characters per description line (conservative for varied fonts)

CARDS = [
    {
        "file": "card-recommender.svg",
        "title": "Movie Recommendation System",
        "text": (
            "Hybrid recommender trained on MovieLens, served through FastAPI "
            "with a Streamlit front end. Built to run on low-end devices."
        ),
        "tags": ["Python", "FastAPI", "Streamlit"],
    },
    {
        "file": "card-dissertation.svg",
        "title": "MSc Dissertation: ML Pipeline",
        "text": (
            "Compared four models and raised accuracy from 0.70 to 0.877 "
            "(macro-F1 0.826), then stress-tested and validated the result."
        ),
        "tags": ["Python", "scikit-learn", "XGBoost"],
    },
    {
        "file": "card-num2words.svg",
        "title": "num2words-BD-INR",
        "text": (
            "PyPI package that writes amounts in words using lakh and crore "
            "for INR and BDT. Built for invoices and financial documents."
        ),
        "tags": ["Python", "PyPI"],
    },
    {
        "file": "card-background-remover.svg",
        "title": "Image Background Remover",
        "text": "Background removal with alpha matting, deployed as a Streamlit Cloud app.",
        "tags": ["Python", "Streamlit", "Pillow"],
    },
]


def render(card: dict) -> str:
    """Return the SVG markup for one card."""
    lines = textwrap.wrap(card["text"], WRAP_AT)[:3]
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" '
        f'viewBox="0 0 {WIDTH} {HEIGHT}" role="img" aria-label="{escape(card["title"])}">',
        '<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">'
        '<stop offset="0" stop-color="#0f2027"/><stop offset="0.5" stop-color="#203a43"/>'
        '<stop offset="1" stop-color="#2c5364"/></linearGradient></defs>',
        f'<rect width="{WIDTH}" height="{HEIGHT}" rx="12" fill="url(#bg)"/>',
        f'<text x="22" y="40" font-family="{FONT}" font-size="18" font-weight="700" '
        f'fill="#ffffff">{escape(card["title"])}</text>',
    ]
    for i, line in enumerate(lines):
        parts.append(
            f'<text x="22" y="{68 + i * 20}" font-family="{FONT}" font-size="13" '
            f'fill="#cfe3ea">{escape(line)}</text>'
        )
    x = 22
    for tag in card["tags"]:
        w = round(len(tag) * 7 + 22)
        parts.append(
            f'<rect x="{x}" y="{HEIGHT - 44}" width="{w}" height="26" rx="13" '
            f'fill="#ffffff" fill-opacity="0.14"/>'
        )
        parts.append(
            f'<text x="{x + w / 2}" y="{HEIGHT - 26}" text-anchor="middle" '
            f'font-family="{FONT}" font-size="12" fill="#ffffff">{escape(tag)}</text>'
        )
        x += w + 8
    parts.append("</svg>")
    return "\n".join(parts)


def main() -> None:
    """Write every card to the assets directory."""
    OUT_DIR.mkdir(exist_ok=True)
    for card in CARDS:
        (OUT_DIR / card["file"]).write_text(render(card), encoding="utf-8")
        print("wrote", card["file"])


if __name__ == "__main__":
    main()
