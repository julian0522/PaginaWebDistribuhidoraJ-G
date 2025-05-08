
function initFlowbite() {
  if (window.initAccordions) window.initAccordions();
  if (window.initDropdowns) window.initDropdowns();
  if (window.initModals) window.initModals();
  if (window.initTabs) window.initTabs();
  if (window.initTooltips) window.initTooltips();
  if (window.initCollapses) window.initCollapses();
}

initFlowbite();

document.addEventListener('astro:after-swap', () => {
  initFlowbite();
});

// import { initAccordions, initDropdowns, initModals, initTabs, initTooltips, initCollapses } from 'flowbite';

// // Inicializa Flowbite
// function initFlowbite() {
//   initAccordions();
//   initDropdowns();
//   initModals();
//   initTabs();
//   initTooltips();
//   initCollapses();
// }

// // Inicialización al cargar la página
// initFlowbite();

// // Escucha eventos de Astro cuando cambia de página con transiciones
// document.addEventListener('astro:after-swap', () => {
//   initFlowbite();
// });
