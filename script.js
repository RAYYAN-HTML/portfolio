function togglePassword() {
  const input = document.getElementById("password");
  const icon = document.querySelector(".toggle-password");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

function signUp(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    Swal.fire({
      title: "Hold up ✋",
      text: "You really thought you could vibe without filling the fields?",
      icon: "warning",
      confirmButtonText: "My bad 😅",
      background: "#fffaf0",
      confirmButtonColor: "#ff69b4",
    });
    return;
  }

  localStorage.setItem("dummyUserEmail", email);
  localStorage.setItem("dummyUserPassword", password);

  // Show funny success alert
  Swal.fire({
    title: "Account created 😎",
    text: "You're officially vibin'. No going back now!",
    icon: "success",
    confirmButtonText: "Let's goo 🚀",
    background: "#f0fff4",
    confirmButtonColor: "#00ff7f",
    backdrop: false,
  });

  startConfetti();

  setTimeout(() => {
    window.location.href = "login.html";
  }, 3000); // little extra delay to ......
}

function startConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.random() * 10 - 5,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c) => {
      ctx.beginPath();
      ctx.fillStyle = c.color;
      ctx.ellipse(c.x, c.y, c.r, c.r / 2, c.tilt, 0, Math.PI * 2);
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach((c) => {
      c.y += c.d * 0.1;
      c.tilt += 0.05;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  draw();
}
// login page
function togglePassword() {
  const input = document.getElementById("loginPassword");
  const icon = document.querySelector(".toggle-password");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}
//login
function logIn(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const storedEmail = localStorage.getItem("dummyUserEmail");
  const storedPassword = localStorage.getItem("dummyUserPassword");

  if (email === storedEmail && password === storedPassword) {
    document.getElementById("prankBanner").style.display = "block";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  } else {
    const failMessages = [
      "💀 Wrong again? This ain’t a guessing game, bestie.",
      "📵 Access denied. Not today, hacker man.",
      "😭 That ain’t it chief. Try harder.",
      "🧠 Brain offline? Check those creds again.",
      "💅 Password flopped. Give it another go.",
      "🤡 You sure you typed that right, bozo?",
    ];
    const msg = failMessages[Math.floor(Math.random() * failMessages.length)];

    Swal.fire({
      title: "Login Failed 😬",
      text: msg,
      icon: "error",
      confirmButtonText: "Oops, my bad 😅",
      background: "#fff0f5",
      confirmButtonColor: "#FF69B4",
    });
  }
}

function showConfetti() {
  const confetti = document.querySelector(".confetti");
  confetti.style.display = "block";
  setTimeout(() => (confetti.style.display = "none"), 5000);
}

function showPrankMessage() {
  const prankBanner = document.getElementById("prankBanner");
  prankBanner.style.display = "block";
  setTimeout(() => (prankBanner.style.display = "none"), 3000); // Hide after 3 seconds
}

// home page
// Dark mode toggle
const toggleBtn = document.getElementById("toggleMode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem(
      "dark-mode",
      document.documentElement.classList.contains("dark-mode")
    );

    // Add glow animation
    document.body.classList.add("dark-mode-glow");
    setTimeout(() => {
      document.body.classList.remove("dark-mode-glow");
    }, 1000);
  });
}

// Cat image click animation
const catDuckImg = document.getElementById("catDuckImage");
if (catDuckImg) {
  catDuckImg.addEventListener("click", () => {
    catDuckImg.style.transform = "rotate(360deg)";
    setTimeout(() => {
      catDuckImg.style.transform = "none";
    }, 1000);
  });
}

// Back to top button
const topBtn = document.getElementById("backToTop");
if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Hover sound on cards
const hoverSound = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_3c5c47cb71.mp3?filename=button-124476.mp3"
);
const skillCards = document.querySelectorAll(".skill-card");
if (skillCards.length > 0) {
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      hoverSound.currentTime = 0;
      hoverSound.play().catch((e) => {
        // suppress autoplay errors silently
      });
    });
  });
}

// just for fun ----. no use tho
document.querySelectorAll(".contact-link").forEach((link) => {
  link.addEventListener("click", () => {
    console.log(`User clicked: ${link.textContent.trim()}`);
  });
});

