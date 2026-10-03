/* Keep the site interaction hook independent of the analytics provider. */
window.addEventListener('romans:interaction', (event) => {
  if (typeof window.gtag !== 'function') return;
  const { event: name, page, placement, format } = event.detail;
  window.gtag('event', name, { page, placement, format });
});
document.addEventListener('click', (event) => {
  const link = event.target instanceof Element ? event.target.closest('a[data-event]') : null;
  if (!link) return;
  window.dispatchEvent(new CustomEvent('romans:interaction', {
    detail: {
      event: link.dataset.event,
      page: window.location.pathname,
      placement: link.dataset.placement,
      format: link.dataset.format
    }
  }));
});
