# Propel Dental Design Concepts — Baseline and Retention Plan

**Status:** Design-only planning artifact. No production information architecture, copy, claims, redirects, or deployments are changed by this document.

## Baseline summary

The public website presents Propel Dental as a performance-based growth partner for implant and full-arch practices. Its visible primary conversion is **Book a Strategy Call**, supported by a telephone alternative. The current visual system is a dark charcoal interface with a high-contrast orange accent, a technical implant-pattern hero, compact uppercase navigation, and large left-aligned display copy. The homepage flows from positioning to pain points, the P90 protocol, reasons to choose Propel, quantitative statements, services, and a closing contact request.[1]

The repository confirms a 15-route public surface. The existing Results page embeds case studies and testimonials in a single page. The About page has a team placeholder but no profiles. Existing numerical outcomes, named practices, testimonials, and patient-adjacent assertions are treated as **unreviewed baseline content**, not approved proof for the proposed concept renders. The new visual concepts use Latin placeholder copy and placeholder photography only until the owner supplies substantiated, approved material.[2]

| Item | Baseline observation | Design-only decision |
|---|---|---|
| Primary visitor | Dental practice owner or decision-maker; operations leaders are secondary. | Design for executive scanning first and operational detail second. |
| Primary action | Existing call booking is the visible primary action. | Reframe the label as **Get in touch** while preserving a low-friction contact route. |
| Brand boundary | Current Propel Dental logo and core positioning remain in scope. | Explore three visual systems without replacing the brand identity. |
| Content expansion | Results exists; About has a team placeholder. | Propose a case-study index, reusable detail template, team directory, and reusable profile template. |
| Assets and claims | Owner will supply approved portraits, bios, permissions, and verified outcome evidence later. | Use Latin copy, silhouette/editorial placeholder art, and `Illustrative content` labels in all new concepts. |
| Deployment boundary | GitHub and Railway access were supplied. | No Railway configuration, deployment, or live-site modification in this phase. |

## Public-route retention register

All entries are **proposed preservation paths**, pending a selected concept and owner approval. No route is retired in this concept phase.

| ID | Current route | Required public substance | Proposed destination after a selected concept | Decision | Notes |
|---|---|---|---|---|---|
| CR-001 | `/` | Positioning, P90 overview, service overview, contact CTA | `/` | Retain | Home recomposes content but maintains all substantive sections. |
| CR-002 | `/full-arch-marketing` | Full-arch service proposition | `/full-arch-marketing` | Retain | Connect to contextual case studies. |
| CR-003 | `/p90-protocol` | P90 process and onboarding explanation | `/p90-protocol` | Retain | Recast as a staged operating model. |
| CR-004 | `/results` | Results and case-study material | `/case-studies` or `/results` | Relocate candidate | Final canonical route requires owner/SEO approval. |
| CR-005 | `/about` | Company story, values, team context | `/about` | Retain | Add team directory below existing company content. |
| CR-006 | `/contact` | Contact path | `/contact` | Retain | Reinforce `Get in touch` as the primary conversion. |
| CR-007 | `/calculator` | Production estimator | `/calculator` | Retain | Keep as a secondary evaluation path. |
| CR-008 | `/services/dental-seo` | Dental SEO service | `/services/dental-seo` | Retain | Add related proof entry point. |
| CR-009 | `/services/social-media` | Social media service | `/services/social-media` | Retain | Add related proof entry point. |
| CR-010 | `/services/paid-search` | Paid search service | `/services/paid-search` | Retain | Add related proof entry point. |
| CR-011 | `/services/video-production` | Video production service | `/services/video-production` | Retain | Add related proof entry point. |
| CR-012 | `/services/aeo` | AEO resource/service | `/services/aeo` | Retain | Preserve current destination. |
| CR-013 | `/services/geo` | GEO resource/service | `/services/geo` | Retain | Preserve current destination. |
| CR-014 | `/privacy-policy` | Privacy policy | `/privacy-policy` | Retain | No visual concept changes legal copy. |
| CR-015 | `/terms-of-service` | Terms of service | `/terms-of-service` | Retain | No visual concept changes legal copy. |

## Proposed content expansion

| Proposed route or component | Purpose | Required owner-provided inputs | Concept-phase treatment |
|---|---|---|---|
| `/case-studies` | Filterable index of approved practice stories. | Practice permission, scope, selected evidence, metric methodology, review date, approved imagery. | Latin placeholder tiles and a proof-label pattern. |
| `/case-studies/[slug]` | Reusable detailed account of a practice engagement. | Approved challenge, approach, verified metrics, methodology, testimonial rights, visual rights, reviewer. | Template specification only. |
| `/about#team` | Overview of the team as people and disciplines. | Approved headshots, preferred names, titles, bios, social/contact permissions. | Latin placeholder profile cards. |
| `/team/[slug]` | Optional detailed biography page for high-profile team members. | Expanded bio, expertise, media permission, optional thought-leadership links. | Template specification only. |

## Content and proof constraints

> **Evidence:** Current public content is a retention baseline. It is not approval to repeat a metric, testimonial, practice identity, or performance outcome in new work.

> **Inference:** A portfolio-led case-study system and a visible team directory can help prospective practice owners evaluate fit before initiating contact. This is a design hypothesis, not a claimed conversion lift.

The live domain does not expose a discoverable `sitemap.xml` at the review date. The route register above is therefore drawn from the public navigation and the repository router and must be reconciled against production redirects, campaigns, and any unlisted routes before implementation or release.[1] [2]

## References

[1]: https://www.propel.dental/ "Propel Dental — Performance-Based Growth for Dental Practices"
[2]: https://github.com/srinagubandi/propeldental "Propel Dental source repository"
