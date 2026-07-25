# Firebase Admin Claims (historical)

## Status: removed

The Firebase Admin CMS and backend described below were removed in commit
`80da1f1` ("feat: remove admin CMS, Firebase, and project image lightbox").
There is no `/admin` route, no Firebase config, and no `firestore.rules` /
`storage.rules` in this branch as of the four-version portfolio work
(2026-07-25). All content is static, sourced directly from `content/`
(see `docs/content-architecture.md` and `README.md`).

This document is kept for historical/audit reference only — do not treat
the section below as describing the current system.

## Original security posture (pre-removal)

The repository previously retained Firebase Admin functionality.

- **Rules**: `firestore.rules` and `storage.rules` dictated access.
- **Authorization**: relied on Firebase Custom Claims (e.g., `admin: true`)
  or document-level auth for writing.
- **Rule of engagement at the time**: do not delete or bypass the Firebase
  Admin systems without explicit migration approval. The dashboard was
  disconnected from the static public V4 presentation but preserved as a
  requirement — until the removal above was explicitly approved and executed.
