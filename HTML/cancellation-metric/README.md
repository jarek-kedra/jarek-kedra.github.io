# Cancellation geometry of free groups

Open `home.html` in your browser after extracting the whole directory. All pages,
styles, the logo, and the calculator use relative paths and work locally without
a web server. Keep the `assets` directory beside the HTML pages.

## Contents

- `home.html`: starting points and topic overview.
- `definitions.html`: definitions, examples, and the cancellation-length calculator.
- `basic-facts.html`: elementary metric and Lipschitz estimates.
- `stable-length.html`: positivity, spectral gap, and rationality.
- `maps-between-ranks.html`: rigidity, flexibility, recoding, and transducers.
- `quasi-automorphisms.html`: outer classes and subgroup constructions.
- `asymptotic-cones.html`: metric groups, rank independence, torsion, and directions.
- `embeddings.html`: cubes, word spaces, permutation metrics, and Hilbert-space discussion.
- `open-problems.html`: questions and limitations recorded in the survey.
- `references.html`: bibliography, working manuscripts, and editorial notes.
- `index.html`: a conventional entry point that redirects to `home.html`.
- `assets/style.css`: shared layout, colors, and typography.
- `assets/site.js`: proof controls, deep links, and current-heading highlighting.
- `assets/mathjax-config.js`: LaTeX rendering configuration.
- `assets/calculator.js`: cancellation-length computation and deletion certificates.
- `assets/cayley-graph.svg`: the original vector logo from the invariant-norms website.
- `check_links.py`: a local link and identifier checker; run `python3 check_links.py`.

## Editing

These HTML pages are the editable source; no compilation or build step is needed.
Edit content in the relevant topic page and refresh the browser. Edit the shared
CSS to change all pages together. Each page contains its own short navigation list
so navigation also works without JavaScript. If adding or renaming a page, update
the topic links in all pages. Update that page's subsection list when adding a heading.

Keep existing IDs stable: other pages link to headings, results, and equations.
Use `\( ... \)` for inline mathematics and `\[ ... \]` for displayed mathematics.
Write HTML-sensitive characters as `&lt;` and `&amp;` inside formulas as needed.
Function declarations use `\colon`. Numbered formulas have explicit `\tag{...}`
commands; update both the tag and the link text if changing a number.

The result and equation identifiers from the single-page survey are retained
for continuity, while the navigation is organised by topics. Proofs use native
`<details class="proof"><summary>Proof</summary>...</details>` elements. Leave out
`open` to keep them initially closed. Links into a proof open it automatically
when JavaScript is enabled. Only currently open proofs are intended to be printed;
open the proofs you want before using the print button.

## Dependencies and provenance

MathJax 4 loads from jsDelivr and requires an internet connection on a fresh load.
The HTML, navigation, proof toggles, and calculator do not require a server. No
analytics, account integration, or publication configuration is included.

The visual design and exact logo follow:
https://jarek-kedra.github.io/HTML/invariant-norms/home.html

The mathematical content comes from the working cancellation-metric survey.
This restructuring does not constitute a new mathematical verification. Retain
all source distinctions and verification labels. Private manuscript links in the
references require the owner's access. This directory has not been published.

The open-problems page collects questions already discussed in the survey;
it is not a newly completed literature review. The original one-file survey is
kept separately and is not automatically synchronised with edits to this folder.
