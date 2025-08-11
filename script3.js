const hoverText = document.getElementById('hover-text');
const originalText = hoverText.textContent;

hoverText.addEventListener('mouseover', () => {
    hoverText.textContent = "You're hovering! 😊";
});

hoverText.addEventListener('mouseout', () => {
    hoverText.textContent = originalText;
});