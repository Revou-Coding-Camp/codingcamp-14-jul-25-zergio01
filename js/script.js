// Update tahun copyright otomatis
document.getElementById("tahun").textContent = new Date().getFullYear();

// Efek smooth scroll untuk navigasi
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 20,
      behavior: "smooth",
    });
  });
});

// Animasi sederhana saat halaman dimuat
window.addEventListener("load", () => {
  document.querySelector("header").style.opacity = "1";
});

// Style untuk header saat di-scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});
