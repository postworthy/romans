/* Optional integration hook. No tracking provider, storage, or network calls. */
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
