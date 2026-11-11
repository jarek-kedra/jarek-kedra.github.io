// Ordinary relative links work when the directory is opened using file://.
// The page never fetches HTML fragments, so no local server is required.
function revealTarget() {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;
    let parent = target;
    while (parent) {
        if (parent.tagName === "DETAILS") parent.open = true;
        parent = parent.parentElement;
    }
    target.scrollIntoView({ block: "start" });
}

window.addEventListener("hashchange", revealTarget);
window.addEventListener("load", revealTarget);
window.addEventListener("math-ready", revealTarget);
document.addEventListener("click", event => {
    if (event.target.closest('a[href^="#"]')) requestAnimationFrame(revealTarget);
});

document.querySelectorAll("details").forEach(entry => {
    entry.addEventListener("toggle", () => {
        if (entry.open && window.MathJax?.typesetPromise) {
            MathJax.typesetPromise([entry]).catch(console.error);
        }
    });
});
document.getElementById("close-proofs")?.addEventListener("click", () => {
    document.querySelectorAll("details.proof").forEach(proof => { proof.open = false; });
});
document.getElementById("print")?.addEventListener("click", () => window.print());

const headings = [...document.querySelectorAll("main h2[id], main details.entry[id], main details.fact[id], main #notation")];
const sectionLinks = [...document.querySelectorAll(".page-sections a")];
let pending = false;
function updateLocation() {
    pending = false;
    let current = null;
    for (const heading of headings) {
        if (heading.getBoundingClientRect().top > 140) break;
        current = heading.id;
    }
    for (const link of sectionLinks) {
        if (link.hash === `#${current}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
    }
}
function scheduleLocation() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(updateLocation);
}
window.addEventListener("scroll", scheduleLocation, { passive: true });
window.addEventListener("resize", scheduleLocation);
window.addEventListener("math-ready", scheduleLocation);
revealTarget();
updateLocation();
