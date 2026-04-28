const vpns = [
  {
    rank: 1, name: 'VPNTYPE', logo: 'VT', logoClass: 'logo-vt', pinned: true,
    badge: 'Выбор редакции',
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный период','Работает в РФ','Высокая скорость','Без логов'],
    free: '5 дней за 1 ₽. Дальше — от 299 ₽/мес.',
    whyTitle: 'Самый стабильный рабочий VPN в РФ',
    whyText: 'Прошёл наш тест на 5 устройствах одновременно — 21 день без единого ручного переключения сервера. Нативный WireGuard, собственная инфраструктура и поддержка обфускации делают его лучшим выбором для России в 2026 году.',
    pros: ['Стабильно работает у МТС, Билайн, Ростелеком','Скорость до 100 Мбит/с в часы пик','Тест 5 дней за 1 ₽ — хватает для проверки','Нативный WireGuard и kill switch'],
    cons: ['Нет полностью бесплатного тарифа','Сайт и поддержка только на русском'],
    speed: 100, maxSpeed: 100,
    price: 'от 299 ₽/мес',
    review: '"21 день держал соединение без падений. Подключение за 1,2 секунды — самый быстрый старт из всей десятки."',
    lifehack: 'Включите WireGuard и автоподключение по сети — VPN сам поднимется при выходе с работы или подключении к новому Wi-Fi.',
    link: 'https://vk.cc/cUpjZq', ctaClass: 'cta-primary', ctaText: 'Попробовать за 1 ₽'
  },
  {
    rank: 2, name: 'AdGuard VPN', logo: 'AG', logoClass: 'logo-ag', pinned: true,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный период','Работает в РФ'],
    free: '3 ГБ/мес бесплатно без регистрации.',
    whyTitle: 'VPN + блокировщик рекламы в одном',
    whyText: 'Сочетает VPN с фильтром рекламы и трекеров на уровне сети. Стабильно работает в РФ, понятный интерфейс на русском — оптимальный вариант для тех, кто не хочет разбираться в протоколах.',
    pros: ['Встроенный блокировщик рекламы и трекеров','Простой интерфейс без лишних настроек','3 ГБ/мес бесплатно','Есть в Google Play, App Store и RuStore'],
    cons: ['Бесплатных 3 ГБ хватает на неделю «лёгкого» интернета','Меньше серверов, чем у конкурентов','Нет независимого аудита на 2026'],
    speed: 92, maxSpeed: 100,
    price: 'от 329 ₽/мес',
    review: '"Удобный и понятный — для тех, кто не хочет разбираться. Реклама в браузере и приложениях пропала: приятный бонус."',
    lifehack: 'На бесплатном тарифе отключите автозагрузку медиа в мессенджерах — 3 ГБ хватит вдвое дольше.',
    link: 'https://vk.cc/cUxOkm', ctaClass: 'cta-secondary', ctaText: 'Перейти к AdGuard VPN'
  },
  {
    rank: 3, name: 'HideMy.Name', logo: 'HN', logoClass: 'logo-hn', pinned: true,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный период','Работает в РФ','Высокая скорость'],
    free: '1 день бесплатно с полным функционалом.',
    whyTitle: 'Проверенный временем VPN для РФ',
    whyText: 'На рынке более 10 лет. Самая широкая в нашей десятке география серверов — 70+ стран — и стабильно высокая скорость 94 Мбит/с делают его универсальным выбором для России.',
    pros: ['94 Мбит/с в нашем тесте','70+ стран на выбор сервера','Работает в РФ при базовых настройках','Личный кабинет с показом загрузки серверов'],
    cons: ['Нет постоянного бесплатного тарифа','Цена чуть выше среднего по рынку','Аудит проводился только внутренний'],
    speed: 94, maxSpeed: 100,
    price: 'от 330 ₽/мес',
    review: '"Пользуюсь больше года. Стабильно, выбор серверов огромный, поддержка отвечает быстро."',
    lifehack: 'Если интернет нестабилен — выбирайте ближайший сервер: разница в пинге между Финляндией и Сингапуром может быть в 5 раз.',
    link: 'https://vk.cc/cUxOxl', ctaClass: 'cta-tertiary', ctaText: 'Перейти к HideMy.Name'
  },
  {
    rank: 4, name: 'Proton VPN', logo: 'PV', logoClass: 'logo-pv', pinned: false,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный','Работает в РФ','Без логов'],
    free: 'Безлимитный бесплатный тариф (3 локации).',
    whyTitle: 'Лучший бесплатный с безлимитом',
    whyText: 'Единственный сервис из ТОП-10 с безлимитным бесплатным трафиком. Швейцарская юрисдикция, опубликованный аудит Cure53 и Stealth-протокол, который стабильно проходит DPI в России.',
    pros: ['Безлимитный free-тариф без обмана','Швейцария — вне 14 Eyes','Аудит Cure53 опубликован полностью','Stealth-протокол для обхода DPI'],
    cons: ['На free-тарифе только 3 страны','Бесплатные серверы перегружены вечером','Платный тариф один из дорогих в обзоре'],
    speed: 75, maxSpeed: 100,
    price: 'от 6 €/мес (~620 ₽)',
    review: '"Безлимитный бесплатный — большой плюс. Скорость не рекордная, но для соцсетей и сайтов хватает."',
    lifehack: 'На free-тарифе подключайтесь утром и ночью — серверы менее загружены, скорость выше в 2–3 раза.'
  },
  {
    rank: 5, name: 'AmneziaVPN', logo: 'AM', logoClass: 'logo-am', pinned: false,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный','Работает в РФ','Без логов'],
    free: 'Open-source: бесплатно, нужен свой сервер.',
    whyTitle: 'Российская open-source разработка',
    whyText: 'Создан российскими разработчиками специально для обхода блокировок в РФ. Поддерживает уникальные протоколы AmneziaWG, XRay/Reality и Cloak — они маскируют VPN-трафик так, что DPI его не видит. Полностью открытый код проверяется сообществом.',
    pros: ['Заточен под обход DPI в России','AmneziaWG, XRay, Cloak в одном клиенте','Полностью open-source на GitHub','Русскоязычная документация и сообщество'],
    cons: ['Нужно поднять свой VPS (от 200 ₽/мес)','Чуть сложнее настройка для новичка','Нет поддержки 24/7 — только сообщество'],
    speed: 70, maxSpeed: 100,
    price: 'Бесплатно (нужен VPS)',
    review: '"Поднял свой сервер на VPS — 4 месяца без сбоев, никаких ограничений. Идеально для тех, кто умеет читать инструкции."',
    lifehack: 'Запускайте AmneziaWG поверх XRay — двойная маскировка, которую обходят немногие провайдеры даже с DPI нового поколения.'
  },
  {
    rank: 6, name: 'Cloudflare WARP', logo: 'CW', logoClass: 'logo-cw', pinned: false,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный','Работает в РФ','Высокая скорость'],
    free: 'Полностью бесплатно, без регистрации.',
    whyTitle: 'Самый быстрый бесплатный',
    whyText: 'VPN-сервис от Cloudflare на основе протокола WireGuard — 1.1.1.1. Работает по принципу «один клик», в России подключение стабильное и очень быстрое: до 88 Мбит/с в нашем тесте. Регистрация не нужна.',
    pros: ['Бесплатно без ограничений по трафику','Скорость до 88 Мбит/с','Один клик — и подключено','Есть на всех платформах + расширение'],
    cons: ['Нельзя выбрать конкретную страну выхода','Cloudflare ведёт свою аналитику запросов','Не подходит для приватности уровня no-logs'],
    speed: 88, maxSpeed: 100,
    price: 'Бесплатно',
    review: '"1.1.1.1 на iPhone — настроила за минуту. Скорость даже выше, чем без VPN. Отличный вариант на каждый день."',
    lifehack: 'WARP+ за 4,99 $/мес даёт приоритетные маршруты Cloudflare — в РФ скорость возрастает ещё на 20–30%.'
  },
  {
    rank: 7, name: 'Windscribe', logo: 'WS', logoClass: 'logo-ws', pinned: false,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный период','Без логов'],
    free: '10 ГБ/мес бесплатно (с подтверждением email).',
    whyTitle: 'Самый щедрый free-тариф с лимитом',
    whyText: 'Самый большой бесплатный лимит трафика в нашей десятке — 10 ГБ/мес после подтверждения email. Канадская юрисдикция, политика no-logs и поддержка WireGuard. Хорошая страховка к платному VPN.',
    pros: ['10 ГБ/мес бесплатно (без email — 2 ГБ)','Подтверждённая no-logs политика','Поддержка WireGuard и kill switch','Свой блокировщик трекеров R.O.B.E.R.T.'],
    cons: ['В РФ часть серверов нестабильна','Поддержка только на английском','Скорость на free-тарифе плавает'],
    speed: 85, maxSpeed: 100,
    price: 'от $5.75/мес (~530 ₽)',
    review: '"10 ГБ хватает на месяц повседневной работы. Если не качать видео — экономно и быстро."',
    lifehack: 'Подтвердите email после регистрации — лимит автоматически увеличится с 2 ГБ до 10 ГБ/мес.'
  },
  {
    rank: 8, name: 'Outline VPN', logo: 'OL', logoClass: 'logo-ol', pinned: false,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный','Работает в РФ','Без логов'],
    free: 'Open-source, нужен свой VPS-сервер.',
    whyTitle: 'Open-source от команды Google Jigsaw',
    whyText: 'Open-source решение от Jigsaw (подразделение Google), построенное на протоколе Shadowsocks. Маскирует трафик под обычный TLS — DPI не видит VPN. Полный контроль: трафик идёт только через ваш сервер.',
    pros: ['Полностью бесплатный (без VPS-расходов)','Без логов по умолчанию','Open-source, аудит независимыми экспертами','Высокая кастомизация'],
    cons: ['Нужен собственный VPS — техническая настройка','Без VPS не работает','Нет встроенного выбора стран'],
    speed: 80, maxSpeed: 100,
    price: 'Бесплатно (нужен VPS)',
    review: '"Поднял Outline за час. Теперь у меня свой VPN — никто не знает, куда я хожу в интернете."',
    lifehack: 'На Oracle Cloud есть постоянный бесплатный VPS Always Free Tier — Outline работает на нём годами без расходов.'
  },
  {
    rank: 9, name: 'Psiphon', logo: 'PS', logoClass: 'logo-ps', pinned: false,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный','Работает в РФ'],
    free: 'Полностью бесплатно, без регистрации.',
    whyTitle: 'Бесплатный VPN без регистрации',
    whyText: 'Один из немногих VPN, которые полностью бесплатны и не требуют регистрации. Создан специально для обхода интернет-цензуры. Работает в России и при глубокой DPI-фильтрации, но скорость серьёзно ограничена.',
    pros: ['Полностью бесплатный — без подписок','Не требует регистрации и email','Работает в условиях жёсткой блокировки','Есть на всех платформах + portable .exe'],
    cons: ['Скорость ~30 Мбит/с — для видео мало','Нестабильное соединение в часы пик','Нет kill switch и сплит-туннелинга'],
    speed: 30, maxSpeed: 100,
    price: 'Бесплатно',
    review: '"Медленно, но работает там, где другие сдаются. Идеальный backup, когда основной VPN внезапно лёг."',
    lifehack: 'В настройках попробуйте режим L2TP — в части регионов России он держится стабильнее, чем стандартный SSH+.'
  },
  {
    rank: 10, name: 'Browsec', logo: 'BR', logoClass: 'logo-br', pinned: false,
    badge: null,
    tags: ['Для Android','Для iPhone','Для Windows','Бесплатный период'],
    free: 'Базовый тариф с ограниченной скоростью.',
    whyTitle: 'Простое решение для разблокировки сайтов',
    whyText: 'Известное VPN-расширение и приложение с понятным интерфейсом и привычной для российских пользователей подачей. Подходит как «быстрая аптечка» для сайтов и сервисов в браузере, но для мессенджеров и игр лучше выбирать другой сервис из топа.',
    pros: ['Простая установка одной кнопкой','Расширения для Chrome, Firefox, Edge','Бесплатный базовый тариф без лимита трафика','Русскоязычный интерфейс и поддержка'],
    cons: ['На free-тарифе скорость снижена','В 2026 году иногда требует смены сервера','Нет независимого аудита приватности'],
    speed: 55, maxSpeed: 100,
    price: 'от 379 ₽/мес',
    review: '"Поставил расширение в Chrome — открыл нужные сайты за минуту. Для несложных задач самое то."',
    lifehack: 'Browsec на free-тарифе быстрее в режиме «Лучший доступный сервер» — приложение само выбирает наименее загруженный узел.'
  }
];

function getRankBadge(rank) {
  if (rank === 1) return '<span class="card-rank-badge rank-gold">🥇 ТОП-1 · Выбор редакции</span>';
  if (rank === 2) return '<span class="card-rank-badge rank-silver">🥈 ТОП-2</span>';
  if (rank === 3) return '<span class="card-rank-badge rank-bronze">🥉 ТОП-3</span>';
  return `<span class="card-rank-badge rank-default">#${rank}</span>`;
}

function renderCard(vpn) {
  const speedPct = Math.round((vpn.speed / 100) * 100);
  const cardTags = vpn.tags.map(t => `<span class="card-tag">${t}</span>`).join('');
  const pros = vpn.pros.map(p => `<li>${p}</li>`).join('');
  const cons = vpn.cons.map(c => `<li>${c}</li>`).join('');

  return `
  <div class="vpn-card rank-${vpn.rank}" data-tags='${JSON.stringify(vpn.tags)}' data-pinned="${vpn.pinned}">
    <div class="card-header">
      <div class="card-logo ${vpn.logoClass}">${vpn.logo}</div>
      <div class="card-title-area">
        ${getRankBadge(vpn.rank)}
        <h3 class="card-name">${vpn.name}</h3>
        <div class="card-tags-row">${cardTags}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="free-badge"><div class="free-badge-icon">🎁</div><div><span>Бесплатно / тест:</span> ${vpn.free}</div></div>
      <div class="why-block">
        <h4>${vpn.whyTitle}</h4>
        <p>${vpn.whyText}</p>
      </div>
      <div class="pros-cons">
        <div class="pros-cons-col pros-col">
          <h5>Плюсы</h5>
          <ul>${pros}</ul>
        </div>
        <div class="pros-cons-col cons-col">
          <h5>Минусы</h5>
          <ul>${cons}</ul>
        </div>
      </div>
      <div class="speed-price">
        <div class="metric">
          <div class="metric-label">Скорость</div>
          <div class="metric-value">${vpn.speed}</div>
          <div class="metric-unit">Мбит/с</div>
          <div class="speed-bar-wrap"><div class="speed-bar"><div class="speed-bar-fill" style="width:${speedPct}%"></div></div></div>
        </div>
        <div class="metric">
          <div class="metric-label">Цена</div>
          <div class="metric-value" style="font-size:14px;padding-top:4px">${vpn.price}</div>
        </div>
      </div>
      <div class="review-block">${vpn.review}</div>
      <div class="lifehack">
        <div class="lifehack-icon">💡</div>
        <div><div class="lifehack-label">Лайфхак</div><p>${vpn.lifehack}</p></div>
      </div>
    </div>
    ${vpn.pinned ? `<div class="card-cta"><a href="${vpn.link}" class="cta-btn ${vpn.ctaClass}" target="_blank" rel="nofollow">${vpn.ctaText} →</a></div>` : ''}
  </div>`;
}

function renderGrid(activeTag) {
  const grid = document.getElementById('ratingGrid');
  const pinned = vpns.filter(v => v.pinned);
  const rest = vpns.filter(v => !v.pinned);

  const matchTag = (vpn) => {
    if (activeTag === 'all') return true;
    return vpn.tags.includes(activeTag);
  };

  const pinnedFiltered = pinned.filter(matchTag);
  const restFiltered = rest.filter(matchTag);

  let html = '';

  if (pinnedFiltered.length > 0) {
    html += `<div class="pinned-label">Выбор редакции — ТОП-3</div>`;
    html += `<div class="cards-grid" id="pinnedGrid">`;
    pinnedFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (restFiltered.length > 0) {
    html += `<div class="rest-label">Позиции 4–10 рейтинга</div>`;
    html += `<div class="cards-grid" id="restGrid">`;
    restFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (pinnedFiltered.length === 0 && restFiltered.length === 0) {
    html = `<div style="padding:32px;text-align:center;color:var(--text-muted);background:var(--card);border-radius:var(--radius)">По этому фильтру сервисов не найдено</div>`;
  }

  grid.innerHTML = html;
}

renderGrid('all');

document.getElementById('filterTags').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(btn.dataset.tag);
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Mobile nav
const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    });
  });
}

// Active nav link on scroll
const navSections = ['rating','table','methodology','faq','reviews']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
navSections.forEach(el => sectionObserver.observe(el));
