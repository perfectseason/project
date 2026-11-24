const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const content = collapsible.querySelector(".collapsible__content");
  const toggle = collapsible.querySelector(".nav__toggler, .collapsible__toggle");
  const header = collapsible.querySelector(".collapsible__header");
  const desktopNav = collapsible.matches(".nav")
    ? window.matchMedia("(min-width: 756px)")
    : null;

  if (!content || (!toggle && !header)) return;

  const syncState = () => {
    const expanded = Boolean(desktopNav?.matches) ||
      collapsible.classList.contains("collapsible--expanded");
    content.hidden = !expanded;
    if (toggle) toggle.setAttribute("aria-expanded", String(expanded));
  };

  syncState();

  const toggleCollapsible = () => {
    if (desktopNav?.matches) return;
    collapsible.classList.toggle("collapsible--expanded");
    syncState();
  };

  if (toggle) toggle.addEventListener("click", toggleCollapsible);
  else header.addEventListener("click", toggleCollapsible);

  desktopNav?.addEventListener("change", syncState);
});
