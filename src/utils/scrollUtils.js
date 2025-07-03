export const smoothScroll = (targetId) => {
  const target = document.getElementById(targetId);
  if (target) {
    const offsetTop = target.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

export const handleNavbarScroll = () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};

export const initScrollEffects = () => {
  window.addEventListener("scroll", handleNavbarScroll);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      smoothScroll(targetId);
    });
  });
};

export const cleanupScrollEffects = () => {
  window.removeEventListener("scroll", handleNavbarScroll);
};
