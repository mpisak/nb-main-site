// ── SCROLL NAV ──
const nav = document.getElementById('navbar');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
  // fire once on load
  nav.classList.toggle('scrolled', window.scrollY > 60);
}

// ── MOBILE NAV ──
function toggleNav() {
  const m = document.getElementById('mobileMenu'), b = document.getElementById('hamburger');
  if (!m || !b) return;
  m.classList.toggle('open'); b.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}
function closeNav() {
  const m = document.getElementById('mobileMenu'), b = document.getElementById('hamburger');
  if (!m || !b) return;
  m.classList.remove('open'); b.classList.remove('open');
  document.body.style.overflow = '';
}

// ── REVEAL ON SCROLL ──
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // immediately reveal above-fold elements
  setTimeout(() => {
    document.querySelectorAll('.page-hero .reveal, #hero .reveal').forEach(el => el.classList.add('visible'));
  }, 80);

  // ── ACTIVE NAV LINK ──
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
