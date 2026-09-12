# Redirect, Event, and Handoff Plan — Design-Only Phase

## Redirect decision register

No route is changed in this phase. The prospective case-study expansion must not replace the current `/results` URL without an owner-approved canonical and redirect decision.

| Current route | Candidate future route | Required decision before implementation | Current status |
|---|---|---|---|
| `/results` | `/case-studies` | Retain `/results`, relocate content, or implement a tested permanent redirect after SEO review. | Open |
| `/about` | `/about#team` | Retain current route; add a team anchor only after content and accessibility review. | Proposed |
| None | `/case-studies/[slug]` | Confirm taxonomy, slug ownership, canonical rules, and sitemap inclusion. | Proposed |
| None | `/team/[slug]` | Confirm whether individual team profiles warrant public indexability. | Proposed |

## Minimal event schema

No event instrumentation is added in the design-only phase. If a concept is implemented, track only consented, non-sensitive interaction metadata. Do not transmit form text, patient information, email addresses, telephone numbers, or other identifiers in event properties.

| Event | When it fires | Allowed context | Prohibited context |
|---|---|---|---|
| `contact_primary_click` | User selects the primary `Get in touch` action. | Page template, concept version, CTA location. | Form values, identifiers, free text. |
| `case_study_open` | User opens an approved case story. | Case slug, page template, selected filter. | Sensitive or user-entered data. |
| `team_profile_open` | User opens an approved team profile. | Team slug, page template. | Sensitive or user-entered data. |
| `contact_form_start` | First interaction with a contact form. | Page template, CTA location. | Field values. |
| `contact_form_error` | Validation error is displayed. | Field category only. | Invalid value, entered text, identifiers. |
| `contact_form_complete` | A validated form submission returns success. | Page template, CTA location. | Form payload or confirmation details. |

## Design package handoff

| Item | Location / decision | Owner action before implementation |
|---|---|---|
| Baseline and retention plan | `BASELINE-AND-RETENTION.md` | Approve route and content retention decisions. |
| Reference token register | `REFERENCE-TOKEN-REGISTER.md` | Approve only the local adapted rules, not reference identities or assets. |
| Concept directions and templates | `CONCEPTS-AND-TEMPLATES.md` | Select one concept or request a controlled hybrid. |
| Render QA record | `RENDER-QA.md` | Convert pending static-image checks into implementation acceptance criteria. |
| Claims and proof log | `CLAIMS-AND-PROOF-LOG.md` | Supply and approve all named claims, imagery, bios, and source evidence. |
| Media fallback matrix | `MEDIA-FALLBACK-MATRIX.md` | Confirm static, touch, keyboard, and reduced-motion treatment. |
| Changelog and decision log | Repository root | Continue recording material design and release decisions. |

## References

[1]: https://www.propel.dental/results "Propel Dental — Results & Case Studies"
