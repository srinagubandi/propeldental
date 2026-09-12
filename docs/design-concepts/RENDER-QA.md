# Render QA Record — Design-Only Concepts

**Review date:** 2026-09-12
**Branch:** `design/concept-options-2026-09-12`
**Scope:** Static desktop and mobile concept images. These are not interactive pages and therefore cannot verify keyboard behavior, form behavior, runtime performance, analytics, redirects, SEO, or reduced-motion behavior. Those checks remain required in an implementation phase.

## Render-review table

| Concept | Viewport artifact | Observation | Result | Follow-up condition |
|---|---|---|---|---|
| A — Evidence Ledger | Desktop, 2560 × 1440 | The main Latin placeholder statement, orange `GET IN TOUCH` action, evidence ledger, case-study cards, and team silhouettes appear in a clear left-to-right decision order. No metric, real client name, patient image, or testimonial is shown. | Pass | Preserve this order at implementation; ensure heading semantics and accessible button states. |
| A — Evidence Ledger | Mobile, 1440 × 2560 | The action follows the opening statement before the four full-width ledger cards. The evidence modules are touch-sized and the case/team previews remain readable without a compressed grid. | Pass | Build a functional mobile menu and visible focus states; no motion required. |
| B — Practice Story | Desktop, 2560 × 1440 | The editorial hero, `GET IN TOUCH` action, case-story preview, and portrait-led team preview establish a different, human-first hierarchy from Concept A. The hero includes an `ILLUSTRATIVE CONTENT` marker and text is Latin placeholder content. | Pass with condition | Mark each future team/practice image as illustrative until rights-cleared assets are supplied; do not use generated people as actual staff. |
| B — Practice Story | Mobile, 1440 × 2560 | The image, proposition, action, case story, and team preview stack in a story-first sequence. The action remains visible before deeper content, and no desktop multi-column structure is shrunk into the phone screen. | Pass with condition | Keep copy outside variable-contrast image areas in the production build. |
| C — Growth Atlas | Desktop, 2560 × 1440 | The central proposition and four connected objective zones create a spatial framework. `GET IN TOUCH` is visible above the atlas. The case-study and team areas use illustrative modules, not live data visualizations. | Pass | Ensure the eventual visual system does not imply performance data or use directional lines as the only way to understand content. |
| C — Growth Atlas | Mobile, 1440 × 2560 | The atlas recomposes into four large vertical pathway panels with the contact action above them. The case-study and team previews remain separate, readable blocks. | Pass | Implement sequential reading order and text equivalents for every decorative connection line. |

## Cross-concept acceptance checks

| Check | Observation | Result |
|---|---|---|
| Brand boundary | Every render uses a Propel Dental wordmark treatment and orange action signal; the production implementation must use the supplied source logo rather than the mockup wordmark rendering. | Pass with implementation condition |
| Concept divergence | The three directions differ in hero structure, proof model, contact framing, mobile composition, visual metaphor, type rhythm, case-study browse model, and team expression. | Pass |
| Placeholder policy | Body content is Latin placeholder text. All new work avoids real client names, outcomes, quotations, and patient imagery. | Pass |
| Case-study expansion | Every direction visibly previews case-study content; the reusable detailed template is specified in `CONCEPTS-AND-TEMPLATES.md`. | Pass |
| Team expansion | Every direction visibly includes a team expression with portraits or silhouettes and Latin placeholder copy. | Pass |
| Static completeness | Each image contains a complete reading sequence and visible action without relying on animation, hover, video, or a live dashboard. | Pass |
| Accessibility / functional checks | Static images cannot demonstrate semantics, keyboard navigation, focus, touch behavior, form errors, media fallbacks, or reduced-motion behavior. | Pending implementation |
| Claims / proof checks | Concept images deliberately exclude outcome claims. Existing public claims require separate proof review before reuse. | Pass for concept phase |

## Required implementation recheck

The selected concept must be re-rendered at wide desktop, tablet, narrow mobile, and real touch sizes. The implementation review must record heading order, focus visibility, form labels and errors, contrast, image descriptions, static fallbacks, reduced-motion behavior, content retention, route changes, analytics payloads, and approved evidence labels before preview approval.

## References

[1]: https://www.propel.dental/ "Propel Dental — Performance-Based Growth for Dental Practices"
