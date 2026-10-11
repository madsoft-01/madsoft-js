window.addEventListener('DOMContentLoaded', () => {
  // Список исключений (свои сайты, сервисы редиректов и сокращатели)
  const ignoredDomains = [
    'u.to',
    'madsoft.su',
    'madsoft.my1.ru',
    'bit.ly',
    'clck.ru',
    't.co',
    'tinyurl.com',
    'goo.su',
    'is.gd',
    'cutt.ly'
  ];

  document.querySelectorAll('.auto-source-domain').forEach(link => {
    try {
      let hostname = new URL(link.href).hostname.toLowerCase();

      // Убираем www.
      hostname = hostname.replace(/^www\./, '');

      // Проверяем, совпадает ли домен или оканчивается на домен из списка исключений
      const isIgnored = ignoredDomains.some(d => hostname === d || hostname.endsWith('.' + d));

      if (isIgnored) {
        link.textContent = 'Источник';
      } else {
        // Делаем первую букву заглавной (например, "Rsload.net")
        link.textContent = hostname.charAt(0).toUpperCase() + hostname.slice(1);
      }
    } catch (e) {
      // Если ссылка битая или относительная
      link.textContent = 'Источник';
    }
  });
});
