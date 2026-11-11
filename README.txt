ARCHIVE v0.7 — STUDIO PORTAL (UTHM BETA / DEMO)

New entry flow: demo sign-in -> Student/Lecturer role -> My Studios dashboard. No large landing-page hero.
Demo sign-in accepts any name/email locally; it is NOT real Google login, does NOT verify email, and does NOT synchronize across devices.

Studio Connect supports class code UTHMBFR2601, lecturer class creation, crit scheduling, announcements and student join within ONE browser.
All v0.6 features remain: Projects, Tasks, Schedule, Crit Journal, Discover, Inspiration Board, sound and themes.

Deployment: extract ZIP, commit updated index.html, sw.js, README.txt, and other files to existing GitHub ARCHIVE-app repo. Preserve netlify/functions/architecture-feed.js path. Netlify redeploys on commit.

IMPORTANT: Back up app data before updating. Existing archive-web-v1, archive-discover-v04 and archive-studio-connect-demo-v1 localStorage data are retained. A new archive-portal-demo-session-v1 key stores the fake local sign-in session. No personal data is transmitted by this demo sign-in.

Live news is provided by the Netlify Function and may fail if external RSS is unavailable.
