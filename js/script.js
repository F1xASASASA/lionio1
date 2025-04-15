(() => {
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');
    const menuItems = document.querySelectorAll('[data-menu-item]');
    const body = document.body;
  
    const toggleMenu = () => {
      const isMenuOpen = burger.getAttribute('aria-expanded') === 'true';
  
      burger.setAttribute('aria-expanded', !isMenuOpen);
      burger.setAttribute('aria-label', isMenuOpen ? 'Открыть меню' : 'Закрыть меню');
      burger.classList.toggle('burger--active');
      menu.classList.toggle('is-active');
      body.classList.toggle('stop-scroll');
    };
  
    burger?.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent potential page jump
      toggleMenu();
    });
  
    // Close menu when a menu item is clicked (optional, good for single-page sites)
    menuItems?.forEach(el => {
      el.addEventListener('click', () => {
        if (menu.classList.contains('is-active')) {
          toggleMenu();
        }
      });
    });
  
    // Close menu if clicked outside the menu area (optional)
    menu?.addEventListener('click', (e) => {
      if (e.target === menu) { // Check if the click is directly on the overlay
          toggleMenu();
      }
    });
  
    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape" && menu.classList.contains('is-active')) {
        toggleMenu();
      }
    });
  
  })();