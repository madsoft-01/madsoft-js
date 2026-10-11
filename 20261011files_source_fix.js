(function() {
  function initSourceLinks() {
    var bad = ['u.to', 'madsoft.su', 'madsoft.my1.ru', 'bit.ly', 'clck.ru', 't.co', 'tinyurl.com', 'goo.su', 'is.gd', 'cutt.ly'];
    var links = document.querySelectorAll('.auto-source-domain');
    
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      try {
        var host = new URL(link.href).hostname.toLowerCase().replace(/^www\./, '');
        var matched = false;
        
        for (var j = 0; j < bad.length; j++) {
          var b = bad[j];
          if (host === b || host.slice(-b.length - 1) === '.' + b) {
            matched = true;
            break;
          }
        }
        
        if (matched || !host) {
          link.textContent = 'Источник';
        } else {
          var formattedDomain = host.charAt(0).toUpperCase() + host.slice(1);
          link.textContent = 'Источник: ' + formattedDomain;
        }
      } catch (err) {
        link.textContent = 'Источник';
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSourceLinks);
  } else {
    initSourceLinks();
  }
})();
