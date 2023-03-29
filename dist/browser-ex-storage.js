const a = (o) => {
  try {
    return JSON.parse(o);
  } catch {
  }
  return o;
}, c = (o) => ({
  "chrome-ex": {
    get(e) {
      return new Promise((r) => {
        chrome.storage.sync.get(e, (t) => {
          r(t);
        });
      });
    },
    set(e) {
      return new Promise((r) => {
        chrome.storage.sync.set(e, () => {
          r(void 0);
        });
      });
    },
    remove(e) {
      return new Promise((r) => {
        chrome.storage.sync.remove(e, () => {
          r(void 0);
        });
      });
    },
    clear() {
      return new Promise((e) => {
        chrome.storage.sync.clear(() => {
          e(void 0);
        });
      });
    }
  },
  browser: {
    get(e) {
      return new Promise((r) => {
        const t = Array.isArray(e) ? e : [e];
        r(t.reduce((n, s) => (n[s] = a(localStorage.getItem(s)), n), {}));
      });
    },
    set(e) {
      return new Promise((r) => {
        Object.keys(e).forEach((t) => {
          localStorage.setItem(t, typeof e[t] == "string" ? e[t] : JSON.stringify(e[t]));
        }), r(void 0);
      });
    },
    remove(e) {
      return new Promise((r) => {
        localStorage.removeItem(e), r(void 0);
      });
    },
    clear() {
      return new Promise((e) => {
        localStorage.clear(), e(void 0);
      });
    }
  }
})[o];
export {
  c as default
};
