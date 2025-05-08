import { initAccordions, initDropdowns, initModals, initTabs, initTooltips } from 'flowbite';

// Inicializa Flowbite
function initFlowbite() {
  initAccordions();
  initDropdowns();
  initModals();
  initTabs();
  initTooltips();
  initCollapses();
}

// Inicialización al cargar la página
initFlowbite();

// Escucha eventos de Astro cuando cambia de página con transiciones
document.addEventListener('astro:after-swap', () => {
  initFlowbite();
});
