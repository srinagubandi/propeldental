# Homepage Copy-Lock and Render QA

**Date:** 2026-09-12

## Scope and copy-lock basis

This record covers three static responsive homepage concept renders. The production application and live site remain unchanged. The static render source transcribes the current Home component and shared Layout component into a reproducible presentation format. It retains the current primary CTA as **Book a Strategy Call**, the current navigation/footer copy, the telephone number, the `© 2026` footer statement, all homepage headings, section introductions, pain-point cards, P90 material, pillars, stats, services, and final CTA wording. The shared current logo asset at `client/public/images/logo.svg` is used in the header and footer of every render.[1] [2]

## Render review

| Concept | View | Artifact | Observed result | Status |
|---|---|---|---|---|
| A — Evidence Ledger | Desktop | `homepage-concept-a-desktop-full.png` | The current logo, compact navigation, and full current-copy sequence are visible. The dark dossier system carries the hero into ledger-like cards, structured P90 stages, proof/stat blocks, services, final CTA, and footer. The current CTA text remains unchanged. | Pass |
| B — Practice Story | Desktop | `homepage-concept-b-desktop-full.png` | The same current-copy sequence is retained in a light editorial system with warm paper surfaces, navy identity panel, editorial typography, alternating card rhythm, and full footer. The current CTA text remains unchanged. | Pass |
| C — Growth Atlas | Desktop | `homepage-concept-c-desktop-full.png` | The current logo and full current-copy sequence appear in a dark blue-green systems visual language. The hero organizes the unchanged four hero tags as objective nodes, while the remaining sections, final CTA, and footer retain their original copy. | Pass |
| A — Evidence Ledger | Mobile | `homepage-concept-a-mobile-full.png` | The current CTA appears near the top. The ledger, cards, P90 stages, services, final CTA, and footer remain readable in a vertical sequence without a shrunken desktop grid. | Pass |
| B — Practice Story | Mobile | `homepage-concept-b-mobile-full.png` | The light editorial hierarchy keeps the unchanged headline and `Book a Strategy Call` action above the retained current-copy section sequence. Cards, P90 stages, services, final CTA, and footer recompose into a single column. | Pass |
| C — Growth Atlas | Mobile | `homepage-concept-c-mobile-full.png` | The current hero wording and CTA remain in place while the four hero tags become a compact, sequential objective module. The full current-copy path ends with the existing footer content. | Pass |

## Conclusion and implementation limits

All six homepage render artifacts preserve the requested current homepage and shared footer copy. The concepts vary only the visual system, composition, component treatment, and mobile reflow. They do not add case-study, team, or other new-copy modules to this homepage presentation; those expansion templates remain documented separately in the existing concept package.

Static image review cannot verify interaction, tab order, focus treatment, form validation, semantic heading structure, text selection, or responsive behavior between defined widths. These remain implementation-phase checks.

## References

[1]: https://www.propel.dental/ "Propel Dental — Performance-Based Growth for Dental Practices"
[2]: https://github.com/srinagubandi/propeldental "Propel Dental source repository"
