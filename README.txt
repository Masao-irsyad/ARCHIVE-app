ARCHIVE v0.4 DISCOVER EDITION

Deploy the extracted FOLDER as a Netlify site through a connected Git repository or Netlify CLI so that the serverless RSS function is deployed.
IMPORTANT: Netlify Drop / ZIP manual deployment may not deploy the included functions. The app will still work, but Live News and Competition Watch will show an unavailable message.

For full live news support: commit the extracted contents to GitHub, then import that repository into Netlify with publish directory . and functions directory netlify/functions (configured in netlify.toml). No build command required.

Original MVP localStorage key archive-web-v1 preserved. Export a backup before replacing an existing deployment. Discover bookmarks use archive-discover-v04 and are included in exported backup.

Feed uses Google News RSS, which can be unavailable, delayed, or rate-limited. Competition items are headlines, not verified active calls.
