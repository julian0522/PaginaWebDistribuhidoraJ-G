
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btnMenu') as HTMLButtonElement | null;
    const menu = document.getElementById('menuMobile') as HTMLDivElement | null;
  
    if (btnMenu && menu) {
      btnMenu.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menu.classList.toggle('block');
      });
    }
  });