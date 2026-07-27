// Seleciona os elementos
const linkContato = document.querySelector('a[data-page="contatos"]');

// Animação de fundo — chuva de código
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    const CHARS = '01アイウエオカキクケコサシスセソタチツテトBUNKER25LOGIC</>{}[]#$%&';
    const FONT_SIZE = 14;
    const MINT   = 'rgba(42, 157, 143,';
    const GOLD   = 'rgba(212, 175, 55,';

    let cols, drops;

    function init() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        cols  = Math.floor(canvas.width / FONT_SIZE);
        drops = Array.from({ length: cols }, () => ({
            y:     Math.random() * -canvas.height,
            speed: Math.random() * 1.2 + 0.4,
            color: Math.random() > 0.7 ? GOLD : MINT,
            bright: Math.random() > 0.85,
        }));
    }
    init();
    window.addEventListener('resize', init);

    function draw() {
        // Fade suave no fundo
        ctx.fillStyle = 'rgba(244, 247, 246, 0.18)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${FONT_SIZE}px monospace`;

        drops.forEach((drop, i) => {
            const char = CHARS[Math.floor(Math.random() * CHARS.length)];
            const alpha = drop.bright ? 0.55 : 0.22;

            // Caractere brilhante no topo da trilha
            ctx.fillStyle = drop.bright ? `rgba(255,255,255,0.9)` : `${drop.color} ${alpha})`;
            ctx.fillText(char, i * FONT_SIZE, drop.y);

            drop.y += drop.speed * FONT_SIZE;

            if (drop.y > canvas.height && Math.random() > 0.975) {
                drop.y     = 0;
                drop.speed = Math.random() * 1.2 + 0.4;
                drop.color = Math.random() > 0.7 ? GOLD : MINT;
                drop.bright = Math.random() > 0.85;
            }
        });

        requestAnimationFrame(draw);
    }
    draw();
});
const linkAplicacoes = document.querySelector('a[data-page="aplicacoes"]');
const secaoContato = document.querySelector(".contatos");
const secaoAplicacoes = document.querySelector(".aplicacoes");
const logoHome = document.querySelector("header h2");
const linksHome = document.querySelectorAll(
  'header ul li a:not([data-page="contatos"]):not([data-page="aplicacoes"])',
);

// Elementos que compõem a página inicial (Home)
// Selecionamos tudo que deve sumir quando o contato ou aplicacoes aparecer
const elementosHome = document.querySelectorAll(
  ".hero, .down-text, .meio, .projects, .clear",
);

function esconderTudo() {
  elementosHome.forEach((el) => (el.style.display = "none"));
  secaoContato.style.display = "none";
  secaoAplicacoes.style.display = "none";
}

// Elementos do menu mobile
const menuToggle = document.getElementById("menu-toggle");

function fecharMenuMobile() {
  if (menuToggle && menuToggle.checked) {
    menuToggle.checked = false;
  }
}

function abrirContato(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  esconderTudo();
  secaoContato.style.display = "block";
  fecharMenuMobile();
}

function abrirAplicacoes(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  esconderTudo();
  secaoAplicacoes.style.display = "block";
  fecharMenuMobile();
}

function abrirHome() {
  esconderTudo();
  elementosHome.forEach((el) => (el.style.display = ""));
  fecharMenuMobile();
}

// Adiciona os eventos de clique
linkContato.addEventListener("click", abrirContato);
linkAplicacoes.addEventListener("click", abrirAplicacoes);
logoHome.addEventListener("click", abrirHome);
linksHome.forEach((link) => link.addEventListener("click", abrirHome));

// Lógica para animações ao rolar (IntersectionObserver)
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll, .skill-card, .project-card-pro, .app-card-store");
    animateElements.forEach(el => {
        el.classList.add("animate-on-scroll");
        observer.observe(el);
    });
});
