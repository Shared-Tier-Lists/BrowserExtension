console.log("Donkey Kong content script running!");

document.body.style.backgroundColor = "lightyellow";

document.querySelectorAll('p').forEach((p) => {
    (p as HTMLParagraphElement).textContent = "Edited by Donkey Kong!";
});
