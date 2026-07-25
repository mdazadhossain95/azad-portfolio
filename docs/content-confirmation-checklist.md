# Content Confirmation Checklist

Before finalizing the V4 Canonical Release, the following must be verified by the owner:

- [x] **Resume**: Fixed 2026-07-25 — no PDF was ever supplied in `public/`, so
      `/resume`, `content/profile.ts`, and `lib/default-content.ts` now all
      point at the real, working Google Drive resume link instead of a
      nonexistent local `/azad-hossain-resume.pdf`. If a PDF file is later
      supplied, it can replace this link.
- [ ] **Contact Email**: Ensure the mailto links use the exact preferred email address (`mdazadhossain95@gmail.com`).
- [ ] **App Store / Play Store Links**: All case studies pointing to stores must have independent, working links (e.g., verifying `com.italianfinancial` exists).
- [ ] **Metrics Wording**: Confirm all case studies properly state "downloads" vs "active users" vs "managed capital" accurately.
- [ ] **Dates**: Verify the timeline in the experience section exactly matches LinkedIn.
- [x] **Image Assets**: Checked 2026-07-25 — the Cloudinary cover image on
      CodegoPay Business (`res.cloudinary.com/hashfort/...`) returns HTTP 200,
      not 404. No broken image URLs found in `content/projects.ts` at this time.

## New findings — 2026-07-25 final QA pass

- [ ] **Codego employment end date has passed**: `content/experience.ts`
      lists the Codego Group role as `"Feb 2024 – Jun 2026"`. Today's date is
      2026-07-25 — after that end date — while `profile.status` says
      "Independent / Freelance". Confirm whether this role has actually
      ended (and the end date/current status should read as final), or
      whether it's still active and the date needs updating.
- [ ] **Unsupported metrics in the V1 hero**: `app/v1/page.tsx` displays
      "200+ Apps delivered" and "15+ Happy clients" in the hero stats row.
      Neither number exists in `content/profile.ts` (`profile.proof` only
      defines `experienceYears` and `upworkJss`). Confirm a real source for
      these two numbers or replace them with a verified figure.
