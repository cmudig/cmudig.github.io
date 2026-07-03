# Adding a publication

## Create the html file

Create a new `KEY.html` file in the `_publications` directory. The key for the filename should be `YEAR-TITLE` where title is a short key for your paper. Complete the file with the following basic format.

```html
---
layout: publication
year: ...
title: "..."
authors:
  - ...

doi: ...
short_doi: ...
osf: ...
type:
  - ...
venue: ...
venue_location: ...
venue_tags:
  - ...
venue_url:
tags:
  - ...
awards:
  - ...
summary: "..."

blog: https://...
link: https://...
pdf: ...
recording: ...
slides: ...
---
Abstract
```

Only the properties in the first block are required. The rest is optional but encouraged (where it makes sense).

## Add a teaser and thumbnail image

Add a teaser and thumbnail image to `assets/publications/` in **AVIF** format. AVIF compresses much better than PNG/JPEG, so keep both files small.

- **Teaser:** at least 1920 pixels wide, wider than tall. Name it `KEY.avif`.
- **Thumbnail:** any aspect ratio, recognizable when small. At least 600 pixels on the long edge. Name it `KEY_thumb.avif`.

### Converting an image to AVIF

The easiest way: drop the image into [squoosh.app](https://squoosh.app), choose **AVIF** on the right, set **Effort** to 6 and **Quality** around 60-70, and download. Squoosh also lets you resize before exporting — use it to downsize the thumbnail (the display is only ~320 px wide so anything beyond ~800 px is wasted bytes).

Command-line equivalent (requires `brew install libavif`):

```sh
# teaser, near-lossless
avifenc -q 65 -s 6 KEY.png KEY.avif

# thumbnail, resize first then encode
magick KEY.png -resize 800x800\> KEY_thumb.png
avifenc -q 60 -s 6 KEY_thumb.png KEY_thumb.avif
```

Aim for under ~150 KB for the teaser and under ~40 KB for the thumbnail. If you're well above that, lower the quality or downsize further.
