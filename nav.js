(function () {
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('main-nav');
  var links = nav && nav.querySelector('.nav-links');
  if (!btn || !links) return;

  function close() {
    links.classList.remove('open');
    btn.classList.remove('open');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (links.classList.contains('open')) { close(); } else {
      links.classList.add('open');
      btn.classList.add('open');
    }
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !links.contains(e.target)) close();
  });
})();
