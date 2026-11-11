// Formulas stay as editable LaTeX in each HTML page.
window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true
    },
    startup: {
        pageReady() {
            return MathJax.startup.defaultPageReady().then(() => {
                const status = document.getElementById("math-status");
                if (status) status.hidden = true;
                window.dispatchEvent(new Event("math-ready"));
            });
        }
    }
};
