ARCHIVE v0.5 — VISUAL DISCOVER EDITION

Deploy via GitHub -> Netlify (same repository ARCHIVE-app).
Upload/replace index.html, sw.js, README.txt, and netlify/functions/architecture-feed.js.
Keep netlify.toml, manifest.webmanifest, and icon.svg as before.

The app preserves archive-web-v1 project data, archive-sonic-settings-v1 sound preferences, and archive-discover-v04 bookmarks.

Article thumbnails are shown only if present in the fetched RSS item. Google News RSS usually does NOT provide images, so original architecture-themed SVG illustrations are shown instead. No random images are attributed to real articles.

To update the EXISTING site, commit changed files to the same GitHub repository; Netlify auto-deploys. Do not create another Netlify site.
Test: visit /, open Discover, and inspect the live function at /.netlify/functions/architecture-feed.
