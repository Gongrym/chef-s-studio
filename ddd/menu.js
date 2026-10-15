document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  });

  // 메뉴 항목을 누르면 닫기
  nav.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "메뉴 열기");
    });
  });

  // PC 화면으로 커지면 모바일 메뉴 닫기
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "메뉴 열기");
    }
  });
});
