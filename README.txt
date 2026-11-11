ARCHIVE v0.8 — Studio Experience Demo / UTHM Pilot

Includes all ARCHIVE v0.7.2 features plus Studio Hub, Studio Feed with comments/reactions/pins, Digital Pin-Up Wall with small image previews and feedback, Crit Booking slots, in-app Notification Centre, profile photo and Class Members.

Demo-only: login is NOT authentication. All data is stored in localStorage on the same browser. No cross-device sync, real uploads, email reminders or security/role enforcement. Images are limited to 650 KB (pin-ups) and 350 KB (avatars) to reduce localStorage exhaustion.

To deploy: extract ZIP; upload root files to your GitHub repository; preserve netlify/functions/architecture-feed.js; commit. Netlify automatically deploys when connected.

BACK UP data before deployment. Original archive-web-v1, Discover, Connect, portal and lecturer-profile storage keys are preserved. Studio Hub uses archive-studio-experience-v08.
