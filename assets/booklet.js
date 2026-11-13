/* Shared script for every booklet page.
   - Language: elements with lang="zh" / lang="en" are shown or hidden (see booklet.css).
     The choice is shared with the home page through localStorage.
   - Math: this script loads KaTeX itself, so pages only need booklet.css and booklet.js in <head>.
     Use \( ... \) inline and \[ ... \] for display. */
(function () {
  const root = document.documentElement;

  /* ---------- load KaTeX from the CDN ---------- */
  const KATEX = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/";
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = KATEX + "katex.min.css";
  document.head.appendChild(css);
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  // auto-render needs katex, so load them in order
  const mathReady = loadScript(KATEX + "katex.min.js")
    .then(() => loadScript(KATEX + "contrib/auto-render.min.js"));

  /* ---------- language ---------- */
  const KEY = "booklets-lang";
  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* file:// in some browsers */ } },
  };
  let lang = store.get() || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en");

  function setLang(l) {
    lang = l;
    root.dataset.lang = l;
    root.lang = l === "zh" ? "zh-CN" : "en";
    const btn = document.getElementById("langBtn");
    if (btn) btn.textContent = l === "zh" ? "EN" : "中文";
    const title = document.querySelector("title");
    if (title && title.dataset[l]) document.title = title.dataset[l];
    document.dispatchEvent(new CustomEvent("langchange"));
  }
  root.dataset.lang = lang;  // set before first paint to avoid a flash of both languages

  document.addEventListener("DOMContentLoaded", () => {
    setLang(lang);
    const btn = document.getElementById("langBtn");
    if (btn) btn.addEventListener("click", () => {
      const next = lang === "zh" ? "en" : "zh";
      store.set(next);
      setLang(next);
    });
    mathReady.then(() => {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
      });
    }).catch(() => { /* offline: math stays as plain TeX */ });
  });

})();
