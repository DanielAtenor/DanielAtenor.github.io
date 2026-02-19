/*
 * Portfolio scripts
 * Header navigation controls visible section
 */

document.addEventListener("DOMContentLoaded", () => {
    const buttons = Array.from(document.querySelectorAll(".header-section-btn"));
    if (!buttons.length) return;

    const sections = buttons
        .map((button) => document.getElementById(button.dataset.target))
        .filter(Boolean);

    const setActiveSection = (sectionId) => {
        sections.forEach((section) => {
            section.hidden = section.id !== sectionId;
        });

        buttons.forEach((button) => {
            const isActive = button.dataset.target === sectionId;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
    };

    const firstTarget = buttons[0].dataset.target;
    setActiveSection(firstTarget);

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.dataset.target;
            setActiveSection(targetId);
        });
    });

});
