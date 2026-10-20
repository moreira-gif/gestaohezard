document.addEventListener("DOMContentLoaded", () => {
  const dateEl = document.getElementById("today-date");
  const yearEl = document.getElementById("year");
  const now = new Date();
  if (dateEl) dateEl.textContent = new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "2-digit", month: "short", year: "numeric" }).format(now).toUpperCase();
  if (yearEl) yearEl.textContent = now.getFullYear();

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      toggle.textContent = isOpen ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }

  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll("#article-grid .article-card");
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("active", item === button));
    const filter = button.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle("hidden", filter !== "todos" && card.dataset.category !== filter);
    });
  }));
});