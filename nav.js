// Cloud of Witnesses — Sidebar toggle (mobile)
(function () {
  var toggle   = document.getElementById('sidebar-toggle');
  var sidebar  = document.getElementById('sidebar');
  var overlay  = document.getElementById('sidebar-overlay');

  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', function () {
    var open = sidebar.classList.toggle('open');
    overlay.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  overlay.addEventListener('click', function () {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
})();
