let execCopy = (elem) => {
    elem.select();
    const isSuccess = document.execCommand('copy');
    if (isSuccess) {
        const success_msg = document.getElementById("success-msg");
        success_msg.style.display = "block";
        setTimeout(() => {
            success_msg.style.display = "none";
        }, 2500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const plaintext = document.getElementById("plaintext-input");
    const plaintext_br = document.getElementById("plaintext-br-input");
    const markdown = document.getElementById("markdown-input");

    chrome.tabs.query({ "currentWindow": true, "active": true }, tab => {
        plaintext.value = `${tab[0].title}: ${tab[0].url}`;
        plaintext_br.value = `${tab[0].title}\n${tab[0].url}`;
        markdown.value = `[${tab[0].title}](${tab[0].url})`;
    });

    document.getElementById("copy-plaintext-btn").addEventListener("click", () => {
        execCopy(plaintext);
    });

    document.getElementById("copy-plaintext-br-btn").addEventListener("click", () => {
        execCopy(plaintext_br);
    });

    document.getElementById("copy-markdown-btn").addEventListener("click", () => {
        execCopy(markdown);
    });
});