window.addEventListener('DOMContentLoaded', function() {
  var ignored = ['u.to', 'madsoft.su', 'madsoft.my1.ru', 'bit.ly', 'clck.ru', 't.co', 'tinyurl.com', 'goo.su', 'is.gd', 'cutt.ly'];
  var links = document.querySelectorAll('.auto-source-domain');
  for (var i = 0; i < links.length; i++) {
    try {
      var h = new URL(links[i].href).hostname.toLowerCase().replace(/^www\./, '');
      var skip = false;
      for (var j = 0; j < ignored.length; j++) {
        if (h === ignored[j] || h.endsWith('.' + ignored[j])) { skip = true; break; }
      }
      links[i].textContent = skip ? 'Источник' : h.charAt(0).toUpperCase() + h.slice(1);
    } catch(e) {
      links[i].textContent = 'Источник';
    }
  }
});
