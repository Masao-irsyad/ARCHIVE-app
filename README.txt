ARCHIVE v0.6 — STUDIO CONNECT BETA (UTHM PILOT)

Netlify-ready static app with optional live RSS Netlify Function.

NEW: Studio Connect tab, Student/Lecturer DEMO roles, class creation, invitation code join (preloaded UTHMBFR2601), crit scheduling, announcements, demo JSON export and reset.

IMPORTANT: This is a SINGLE-BROWSER LOCALSTORAGE DEMO. There is no actual login, verified lecturer role, remote database, real multi-user synchronization, email or push notification. Switching roles in the same browser lets you simulate lecturer and student. Class codes created on one device cannot be joined from another device. Do not use for actual student submissions or confidential information.

Preserved from v0.5: dashboard, projects/tasks, schedule/crit journal, profile, export/import, theme, retro sound, Discover, magazine visuals, saved references, knowledge, RSS function. Existing archive-web-v1 and archive-sonic-settings-v1 keys are unchanged. Studio data uses archive-studio-connect-demo-v1.

DEPLOY: Extract this ZIP. Upload all files to your GitHub repository with netlify/functions/architecture-feed.js retaining its directory path. Netlify should deploy automatically if connected to GitHub. Netlify.toml configures functions. Export an ARCHIVE backup before updating.

TO TEST: Open Studio Connect > Lecturer View > create a class, add a crit and announcement > Student View > join with the code > observe the same-browser changes. Or join the preloaded UTHMBFR2601 class.

REAL MULTI-USER RELEASE: requires authentication, role verification, backend database, authorization policies and realtime subscriptions.
