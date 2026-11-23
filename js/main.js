const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const header = collapsible.querySelector(".collapsible__header");
  const content = collapsible.querySelector(".collapsible__content");
  const toggle = collapsible.querySelector(".collapsible__toggle");

  const syncState = () => {
    const expanded = collapsible.classList.contains("collapsible--expanded");
    content.hidden = !expanded;
    toggle.setAttribute("aria-expanded", String(expanded));
  };

  syncState();

  header.addEventListener("click", () => {
    collapsible.classList.toggle("collapsible--expanded");
    syncState();
  });
});
