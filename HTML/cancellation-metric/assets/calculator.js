// Word notation: lower case = generator; upper case = inverse.
function inverseLetter(letter) {
    return letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
}

function freelyReduce(word) {
    const stack = [];

    for (const letter of word) {
        if (stack.length && stack[stack.length - 1] === inverseLetter(letter)) {
            stack.pop();
        } else {
            stack.push(letter);
        }
    }

    return stack.join("");
}

// Minimum deletion count on every half-open interval [start, end).
// A first letter is either deleted or paired with an inverse later on.
function cancellation(word) {
    const length = word.length;
    const costs = Array.from({ length: length + 1 }, () => Array(length + 1).fill(0));
    const partners = Array.from({ length }, () => Array(length + 1).fill(-1));

    for (let size = 1; size <= length; size++) {
        for (let start = 0; start + size <= length; start++) {
            const end = start + size;
            costs[start][end] = 1 + costs[start + 1][end];

            for (let partner = start + 1; partner < end; partner++) {
                if (word[partner] !== inverseLetter(word[start])) continue;

                const candidate = costs[start + 1][partner] + costs[partner + 1][end];
                if (candidate < costs[start][end]) {
                    costs[start][end] = candidate;
                    partners[start][end] = partner;
                }
            }
        }
    }

    const deleted = [];

    function trace(start, end) {
        if (start >= end) return;
        const partner = partners[start][end];

        if (partner < 0) {
            deleted.push(start);
            trace(start + 1, end);
        } else {
            trace(start + 1, partner);
            trace(partner + 1, end);
        }
    }

    trace(0, length);
    return { norm: costs[0][length], deleted };
}

function calculate() {
    const word = document.getElementById("word").value.replace(/\s/g, "");
    const output = document.getElementById("calc-result");
    output.replaceChildren();

    if (!/^[a-zA-Z]*$/.test(word) || word.length > 120) {
        output.textContent = "Enter at most 120 letters a–z or A–Z (no powers or punctuation).";
        return;
    }

    const result = cancellation(word);
    const deleted = new Set(result.deleted);
    const heading = document.createElement("div");
    heading.textContent = `Cancellation length: ${result.norm} · Reduced word: ${freelyReduce(word) || "1"}`;
    output.append(heading);

    const letters = document.createElement("div");
    letters.className = "letters";

    for (let index = 0; index < word.length; index++) {
        const span = document.createElement("span");
        span.textContent = word[index];
        if (deleted.has(index)) span.className = "deleted";
        letters.append(span);
    }

    if (!word) letters.textContent = "1";
    output.append(letters);

    const certificate = document.createElement("div");
    const positions = result.deleted.map(index => index + 1).join(", ") || "none";
    certificate.textContent = `Delete positions: ${positions}. The remaining word freely reduces to 1.`;
    output.append(certificate);
}

document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("word").addEventListener("keydown", event => {
    if (event.key === "Enter") calculate();
});
calculate();
