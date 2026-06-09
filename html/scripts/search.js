(() => {
  // html/scripts/search.ts
  var searchButton = document.getElementById("site-search-button");
  var overlay = null;
  var input = null;
  var results = null;
  var rendererLoaded = false;
  var rendererLoading = null;
  function ensureOverlay() {
    if (overlay && input && results) {
      return { overlay, input, results };
    }
    overlay = document.createElement("div");
    overlay.id = "site-search-overlay";
    overlay.hidden = true;
    overlay.innerHTML = `
        <div class="site-search-dialog" role="dialog" aria-modal="true" aria-label="Site search">
            <form class="site-search-form" action="/search">
                <input id="site-search-input" type="search" autocomplete="off" spellcheck="false" placeholder="Search StarCraft II Co-op" aria-label="Search StarCraft II Co-op">
            </form>
            <div id="site-search-results" class="site-search-results" aria-live="polite"></div>
        </div>
    `;
    document.body.append(overlay);
    input = overlay.querySelector("#site-search-input");
    results = overlay.querySelector("#site-search-results");
    overlay.addEventListener("mousedown", (event) => {
      if (event.button === 0 && event.target === overlay)
        closeSearch();
    });
    overlay.querySelector(".site-search-form").addEventListener("submit", (event) => {
      event.preventDefault();
    });
    return { overlay, input, results };
  }
  function loadRenderer() {
    if (rendererLoaded)
      return Promise.resolve();
    if (rendererLoading)
      return rendererLoading;
    const elements = ensureOverlay();
    elements.results.innerHTML = '<p class="site-search-message">Loading search...</p>';
    rendererLoading = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "/scripts/search-results.js?v=a22d18";
      script.async = true;
      script.onload = () => {
        if (!window.mountSearchResults) {
          reject(new Error("Search renderer did not initialize."));
          return;
        }
        window.mountSearchResults({
          input: elements.input,
          container: elements.results,
          close: closeSearch
        });
        rendererLoaded = true;
        resolve();
      };
      script.onerror = () => reject(new Error("Search renderer failed to load."));
      document.head.append(script);
    }).catch((error) => {
      console.error(error);
      rendererLoading = null;
      elements.results.innerHTML = '<p class="site-search-message">Search failed to load.</p>';
    });
    return rendererLoading;
  }
  function mountRendererIfAlreadyLoaded() {
    if (!rendererLoaded || !window.mountSearchResults)
      return;
    const elements = ensureOverlay();
    window.mountSearchResults({
      input: elements.input,
      container: elements.results,
      close: closeSearch
    });
  }
  function openSearch() {
    const elements = ensureOverlay();
    elements.overlay.hidden = false;
    searchButton?.setAttribute("aria-expanded", "true");
    window.setTimeout(() => {
      elements.input.focus();
      elements.input.select();
    });
    mountRendererIfAlreadyLoaded();
    loadRenderer();
  }
  function closeSearch() {
    if (!overlay)
      return;
    overlay.hidden = true;
    searchButton?.setAttribute("aria-expanded", "false");
  }
  function isSearchOpen() {
    return !!overlay && !overlay.hidden;
  }
  var shortcutModifier = isMac() ? "Cmd" : "Ctrl";
  searchButton?.setAttribute("aria-expanded", "false");
  searchButton?.setAttribute("aria-label", `Search (${shortcutModifier}+K)`);
  searchButton?.querySelector(".search-shortcut")?.insertAdjacentHTML("afterbegin", `<kbd>${shortcutModifier}</kbd>+<kbd>K</kbd>`);
  searchButton?.addEventListener("click", openSearch);
  document.addEventListener("keydown", (event) => {
    const noModifiers = !event.altKey && !event.shiftKey && !event.metaKey && !event.ctrlKey;
    const metaOrCtrl = !event.altKey && !event.shiftKey && event.metaKey !== event.ctrlKey;
    if (event.key.toLowerCase() === "k" && metaOrCtrl) {
      event.preventDefault();
      openSearch();
      return;
    }
    if (event.key === "Escape" && noModifiers && isSearchOpen()) {
      event.preventDefault();
      closeSearch();
    }
  });
  function isMac() {
    const platform = navigator.userAgentData?.platform || navigator.platform;
    return /mac|iphone|ipad|ipod/i.test(platform);
  }
})();

//# debugId=356F91EAFFEDBDB564756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2VhcmNoLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB0eXBlIHsgTW91bnRTZWFyY2hSZXN1bHRzRnVuY3Rpb24gfSBmcm9tICcuL3NlYXJjaC1yZXN1bHRzJztcblxudHlwZSBIYXNTZWFyY2ggPSB7IG1vdW50U2VhcmNoUmVzdWx0cz86IE1vdW50U2VhcmNoUmVzdWx0c0Z1bmN0aW9uIH07XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1zZWFyY2gtYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xubGV0IG92ZXJsYXk6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5sZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbmxldCByZXN1bHRzOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xubGV0IHJlbmRlcmVyTG9hZGVkID0gZmFsc2U7XG5sZXQgcmVuZGVyZXJMb2FkaW5nOiBQcm9taXNlPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG5cbmZ1bmN0aW9uIGVuc3VyZU92ZXJsYXkoKTogeyBvdmVybGF5OiBIVE1MRWxlbWVudCwgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIHJlc3VsdHM6IEhUTUxFbGVtZW50IH0ge1xuICAgIGlmIChvdmVybGF5ICYmIGlucHV0ICYmIHJlc3VsdHMpIHtcbiAgICAgICAgcmV0dXJuIHsgb3ZlcmxheSwgaW5wdXQsIHJlc3VsdHMgfTtcbiAgICB9XG5cbiAgICBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5pZCA9ICdzaXRlLXNlYXJjaC1vdmVybGF5JztcbiAgICBvdmVybGF5LmhpZGRlbiA9IHRydWU7XG4gICAgb3ZlcmxheS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXNlYXJjaC1kaWFsb2dcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsPVwiU2l0ZSBzZWFyY2hcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwic2l0ZS1zZWFyY2gtZm9ybVwiIGFjdGlvbj1cIi9zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzaXRlLXNlYXJjaC1pbnB1dFwiIHR5cGU9XCJzZWFyY2hcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBTdGFyQ3JhZnQgSUkgQ28tb3BcIiBhcmlhLWxhYmVsPVwiU2VhcmNoIFN0YXJDcmFmdCBJSSBDby1vcFwiPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdiBpZD1cInNpdGUtc2VhcmNoLXJlc3VsdHNcIiBjbGFzcz1cInNpdGUtc2VhcmNoLXJlc3VsdHNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChvdmVybGF5KTtcblxuICAgIGlucHV0ID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjc2l0ZS1zZWFyY2gtaW5wdXQnKSE7XG4gICAgcmVzdWx0cyA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyNzaXRlLXNlYXJjaC1yZXN1bHRzJykhO1xuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDAgJiYgZXZlbnQudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVNlYXJjaCgpO1xuICAgIH0pO1xuICAgIG92ZXJsYXkucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcuc2l0ZS1zZWFyY2gtZm9ybScpIS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBvdmVybGF5LCBpbnB1dCwgcmVzdWx0cyB9O1xufVxuXG5mdW5jdGlvbiBsb2FkUmVuZGVyZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHJlbmRlcmVyTG9hZGVkKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgaWYgKHJlbmRlcmVyTG9hZGluZykgcmV0dXJuIHJlbmRlcmVyTG9hZGluZztcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gZW5zdXJlT3ZlcmxheSgpO1xuICAgIGVsZW1lbnRzLnJlc3VsdHMuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwic2l0ZS1zZWFyY2gtbWVzc2FnZVwiPkxvYWRpbmcgc2VhcmNoLi4uPC9wPic7XG4gICAgcmVuZGVyZXJMb2FkaW5nID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9ICcvc2NyaXB0cy9zZWFyY2gtcmVzdWx0cy5qcyc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoISh3aW5kb3cgYXMgSGFzU2VhcmNoKS5tb3VudFNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTZWFyY2ggcmVuZGVyZXIgZGlkIG5vdCBpbml0aWFsaXplLicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAod2luZG93IGFzIEhhc1NlYXJjaCkubW91bnRTZWFyY2hSZXN1bHRzISh7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGVsZW1lbnRzLmlucHV0LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogZWxlbWVudHMucmVzdWx0cyxcbiAgICAgICAgICAgICAgICBjbG9zZTogY2xvc2VTZWFyY2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlbmRlcmVyTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKCdTZWFyY2ggcmVuZGVyZXIgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlbmRlcmVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgIGVsZW1lbnRzLnJlc3VsdHMuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwic2l0ZS1zZWFyY2gtbWVzc2FnZVwiPlNlYXJjaCBmYWlsZWQgdG8gbG9hZC48L3A+JztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVuZGVyZXJMb2FkaW5nO1xufVxuXG5mdW5jdGlvbiBtb3VudFJlbmRlcmVySWZBbHJlYWR5TG9hZGVkKCk6IHZvaWQge1xuICAgIGlmICghcmVuZGVyZXJMb2FkZWQgfHwgISh3aW5kb3cgYXMgSGFzU2VhcmNoKS5tb3VudFNlYXJjaFJlc3VsdHMpIHJldHVybjtcbiAgICBjb25zdCBlbGVtZW50cyA9IGVuc3VyZU92ZXJsYXkoKTtcbiAgICAod2luZG93IGFzIEhhc1NlYXJjaCkubW91bnRTZWFyY2hSZXN1bHRzISh7XG4gICAgICAgIGlucHV0OiBlbGVtZW50cy5pbnB1dCxcbiAgICAgICAgY29udGFpbmVyOiBlbGVtZW50cy5yZXN1bHRzLFxuICAgICAgICBjbG9zZTogY2xvc2VTZWFyY2gsXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5TZWFyY2goKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBlbnN1cmVPdmVybGF5KCk7XG4gICAgZWxlbWVudHMub3ZlcmxheS5oaWRkZW4gPSBmYWxzZTtcbiAgICBzZWFyY2hCdXR0b24/LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50cy5pbnB1dC5mb2N1cygpO1xuICAgICAgICBlbGVtZW50cy5pbnB1dC5zZWxlY3QoKTtcbiAgICB9KTtcbiAgICBtb3VudFJlbmRlcmVySWZBbHJlYWR5TG9hZGVkKCk7XG4gICAgdm9pZCBsb2FkUmVuZGVyZXIoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VTZWFyY2goKTogdm9pZCB7XG4gICAgaWYgKCFvdmVybGF5KSByZXR1cm47XG4gICAgb3ZlcmxheS5oaWRkZW4gPSB0cnVlO1xuICAgIHNlYXJjaEJ1dHRvbj8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzU2VhcmNoT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFvdmVybGF5ICYmICFvdmVybGF5LmhpZGRlbjtcbn1cblxuY29uc3Qgc2hvcnRjdXRNb2RpZmllciA9IGlzTWFjKCkgPyAnQ21kJyA6ICdDdHJsJztcbnNlYXJjaEJ1dHRvbj8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5zZWFyY2hCdXR0b24/LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGBTZWFyY2ggKCR7c2hvcnRjdXRNb2RpZmllcn0rSylgKTtcbnNlYXJjaEJ1dHRvbj8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5zZWFyY2gtc2hvcnRjdXQnKT8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxrYmQ+JHtzaG9ydGN1dE1vZGlmaWVyfTwva2JkPis8a2JkPks8L2tiZD5gKTtcbnNlYXJjaEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuU2VhcmNoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICBjb25zdCBub01vZGlmaWVycyA9ICFldmVudC5hbHRLZXkgJiYgIWV2ZW50LnNoaWZ0S2V5ICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5jdHJsS2V5O1xuICAgIGNvbnN0IG1ldGFPckN0cmwgPSAhZXZlbnQuYWx0S2V5ICYmICFldmVudC5zaGlmdEtleSAmJiBldmVudC5tZXRhS2V5ICE9PSBldmVudC5jdHJsS2V5O1xuXG4gICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnaycgJiYgbWV0YU9yQ3RybCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvcGVuU2VhcmNoKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgbm9Nb2RpZmllcnMgJiYgaXNTZWFyY2hPcGVuKCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2xvc2VTZWFyY2goKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gaXNNYWMoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGxhdGZvcm0gPSAobmF2aWdhdG9yIGFzIGFueSkudXNlckFnZW50RGF0YT8ucGxhdGZvcm0gfHwgbmF2aWdhdG9yLnBsYXRmb3JtO1xuICAgIHJldHVybiAvbWFjfGlwaG9uZXxpcGFkfGlwb2QvaS50ZXN0KHBsYXRmb3JtKTtcbn1cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7O0VBR0EsSUFBTSxlQUFlLFNBQVMsZUFBZSxvQkFBb0I7QUFBQSxFQUNqRSxJQUFJLFVBQThCO0FBQUEsRUFDbEMsSUFBSSxRQUFpQztBQUFBLEVBQ3JDLElBQUksVUFBOEI7QUFBQSxFQUNsQyxJQUFJLGlCQUFpQjtBQUFBLEVBQ3JCLElBQUksa0JBQXdDO0FBQUEsRUFFNUMsU0FBUyxhQUFhLEdBQTRFO0FBQUEsSUFDOUYsSUFBSSxX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
