// Exemple simple : scroll vers le haut quand on clique sur le titre
document.querySelector("header h1").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let stars = [];
  
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5
    });
  }
  
  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    for (let star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(animateStars);
  }
  
  animateStars();


  const btn = document.getElementById("theme-toggle");
  const root = document.documentElement;
  
  const darkTheme = {
    "--bg-color": "#0f0f11",
    "--text-color": "#e0e0e0",
    "--accent-color": "#7f5af0",
    "--section-bg": "#1a1a1d",
    "--card-bg": "#26262a"
  };
  
  const lightTheme = {
    "--bg-color": "#ffffff",
    "--text-color": "#222222",
    "--accent-color": "#7f5af0",
    "--section-bg": "#f0f0f0",
    "--card-bg": "#ffffff"
  };
  
  function applyTheme(theme) {
    for (let key in theme) {
      root.style.setProperty(key, theme[key]);
    }
  }
  
  function toggleTheme() {
    const current = localStorage.getItem("theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next === "dark" ? darkTheme : lightTheme);
    btn.textContent = next === "dark" ? "🌙 Mode Sombre" : "☀️ Mode Clair";
  }
  
  btn.addEventListener("click", toggleTheme);
  
  // Appliquer le thème au chargement
  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved === "dark" ? darkTheme : lightTheme);
  btn.textContent = saved === "dark" ? "🌙 Mode Sombre" : "☀️ Mode Clair";
  