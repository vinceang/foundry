#!/usr/bin/env python3
"""Gamma-lift + optimize the Dar el Warda plates. Reports mean luma."""
import os
from PIL import Image, ImageStat

SRC = "assets-src"
OUT = "public/images"
os.makedirs(OUT, exist_ok=True)

# gamma 0.8 midtone lift LUT (per asset-pipeline.md)
GAMMA = 0.8
lut = [round(255 * ((i / 255) ** GAMMA)) for i in range(256)] * 3

def luma(img):
    return ImageStat.Stat(img.convert("L")).mean[0]

# (src, out_basename, target_width, extra_widths, gamma_on)
jobs = [
    ("court-0730.png", "court-0730", 1000, [], True),
    ("court-1000.png", "court-1000", 1000, [], True),
    ("court-1300.png", "court-1300", 1000, [], True),
    ("court-1630.png", "court-1630", 1000, [], True),
    ("court-1915.png", "court-1915", 1000, [], True),
    ("hero.png",        "hero",        1024, [640], True),
    ("room-nakhla.png", "room-nakhla", 1000, [], True),
    ("room-ward.png",   "room-ward",   1000, [], True),
    ("tea.png",         "tea",         1000, [], True),
    ("terrace.png",     "terrace",     1000, [], True),
    ("hammam.png",      "hammam",      1000, [], True),
    ("mat-zellige.png", "mat-zellige", 1000, [], True),
    ("derb.png",        "derb",        1000, [], True),
]

def save_jpeg(img, path, q=78):
    img.convert("RGB").save(path, "JPEG", quality=q, optimize=True, progressive=True)
    return os.path.getsize(path) / 1024

for src, base, w, extras, gamma_on in jobs:
    sp = os.path.join(SRC, src)
    if not os.path.exists(sp):
        print(f"MISSING {sp}")
        continue
    im = Image.open(sp).convert("RGB")
    before = luma(im)
    if gamma_on:
        im = im.point(lut)
    after = luma(im)
    # main width
    if im.width != w:
        h = round(im.height * w / im.width)
        main = im.resize((w, h), Image.LANCZOS)
    else:
        main = im
    q = 78
    kb = save_jpeg(main, os.path.join(OUT, f"{base}.jpg"), q)
    while kb > 500 and q > 55:
        q -= 6
        kb = save_jpeg(main, os.path.join(OUT, f"{base}.jpg"), q)
    for ew in extras:
        h = round(im.height * ew / im.width)
        small = im.resize((ew, h), Image.LANCZOS)
        save_jpeg(small, os.path.join(OUT, f"{base}-{ew}.jpg"), 74)
    print(f"{base:14s} luma {before:5.1f} -> {after:5.1f}   {kb:6.1f}KB q{q}")
