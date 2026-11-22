(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motionLink = document.createElement('link');
  motionLink.rel = 'stylesheet';
  motionLink.href = 'assets/motion.css';
  document.head.appendChild(motionLink);

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-lang]').forEach(other => other.classList.toggle('active', other === button));
      document.documentElement.lang = button.dataset.lang === 'zh' ? 'zh-CN' : button.dataset.lang;
    });
  });

  const menu = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menu && mobileNav) {
    menu.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }

  if (!reduced) {
    const loader = document.createElement('div');
    loader.className = 'msic-loader';
    loader.setAttribute('aria-label', 'Chargement du site MSIC');
    loader.innerHTML = '<div class="msic-loader-grid"></div><div class="msic-loader-ring"></div><div class="msic-loader-core"><img class="msic-loader-logo" src="https://uxmagic.blob.core.windows.net/public/project-documents/6b03133f0cc24b14d6639e42/ban2aicompte_gmail.com/1795363685468-11e606b9-Screenshot_From_2026-11-22_16-40-19-removebg-preview.png" alt=""><div class="msic-loader-label">MSIC INDUSTRIAL SYSTEMS</div></div><div class="msic-loader-micro">INITIALIZING INDUSTRIAL SYSTEMS</div><div class="msic-loader-track"></div>';
    document.body.prepend(loader);
    let loaderClosed = false;
    const closeLoader = () => {
      if (loaderClosed) return;
      loaderClosed = true;
      loader.classList.add('is-hidden');
      window.setTimeout(() => loader.remove(), 600);
    };
    if (document.readyState === 'complete') closeLoader();
    else {
      window.addEventListener('load', closeLoader, { once: true });
      window.setTimeout(closeLoader, 1400);
    }

    const cursor = document.createElement('div');
    cursor.className = 'technical-cursor';
    cursor.innerHTML = '<span class="technical-cursor-dot"></span>';
    document.body.appendChild(cursor);

    if (window.matchMedia('(pointer: fine)').matches) {
      let targetX = innerWidth / 2, targetY = innerHeight / 2, currentX = targetX, currentY = targetY;
      const move = event => { targetX = event.clientX; targetY = event.clientY; cursor.classList.add('is-visible'); };
      document.addEventListener('mousemove', move, { passive: true });
      const renderCursor = () => {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
        cursor.style.transform = `translate(${currentX}px,${currentY}px) translate(-50%,-50%)`;
        requestAnimationFrame(renderCursor);
      };
      requestAnimationFrame(renderCursor);
      document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
      document.querySelectorAll('a, button, input, select, textarea').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add(element.matches('button,.btn') ? 'is-button' : 'is-link'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('is-link', 'is-button'));
      });
      document.querySelectorAll('.card,.equipment-card,.solution,.service-item,.industry-card').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('is-card'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('is-card'));
      });
      document.querySelectorAll('img').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('is-image'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('is-image'));
      });
    }
  }

  document.querySelectorAll('.section,.page-hero,.footer').forEach(element => element.classList.add('blueprint-grid'));
  document.querySelectorAll('.equipment-card').forEach(element => element.classList.add('scanning-effect'));
  document.querySelectorAll('.grid3,.grid2,.grid4,.service-grid,.equipment-grid,.industry-grid,.solution-grid,.resource-grid,.footer-grid,.timeline').forEach(element => element.classList.add('stagger-container'));
  document.querySelectorAll('.section h2,.page-hero h1,.grid2>div:first-child,.project-placeholder .copy').forEach(element => element.classList.add('reveal-up'));
  document.querySelectorAll('.hero>img,.page-hero>img').forEach(element => element.classList.add('parallax-element'));
  document.querySelectorAll('.card,.equipment-card,.service-item,.solution,.resource,.industry-card').forEach((element, index) => {
    element.classList.add('reveal-up');
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 40}ms`;
  });
  document.querySelectorAll('.grid2>div:last-child,.lead').forEach(element => element.classList.add('reveal-right'));
  document.querySelectorAll('.project-placeholder .image').forEach(element => element.classList.add('reveal-clip'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  document.querySelectorAll('.reveal,.reveal-up,.reveal-left,.reveal-right,.reveal-scale,.reveal-clip,.stagger-container,.footer,.timeline').forEach(element => observer.observe(element));

  const header = document.querySelector('.header');
  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
    if (!reduced && window.matchMedia('(min-width: 901px)').matches) {
      const shift = Math.min(window.scrollY * 0.055, 34);
      document.querySelectorAll('.hero>img,.page-hero>img').forEach(image => image.style.transform = `scale(1.025) translateY(${shift}px)`);
      document.querySelectorAll('.blueprint-grid').forEach((section, index) => {
        if (section.getBoundingClientRect().top < innerHeight && section.getBoundingClientRect().bottom > 0) {
          section.style.backgroundPosition = `${index % 2 ? shift : -shift}px ${shift * 0.25}px`;
        }
      });
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!reduced) {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
      if (link.hostname && link.hostname !== location.hostname) return;
      link.addEventListener('click', event => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        event.preventDefault();
        document.body.classList.add('page-exiting');
        window.setTimeout(() => { location.href = href; }, 180);
      });
    });
  }
})();