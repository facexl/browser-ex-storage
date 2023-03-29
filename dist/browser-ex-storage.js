const a = (t) => {
  try {
    return JSON.parse(t);
  } catch {
  }
  return t;
}, c = (t) => ({
  "chrome-ex": {
    get(e) {
      return new Promise((r) => {
        chrome.storage.sync.get(e, (o) => {
          r(o);
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
        const o = Array.isArray(e) ? e : [e];
        r(o.reduce((n, s) => (n[s] = a(localStorage.getItem(s)), n), {}));
      });
    },
    set(e) {
      return new Promise((r) => {
        Object.keys(e).forEach((o) => {
          localStorage.setItem(o, typeof e[o] == "string" ? e[o] : JSON.stringify(e[o]));
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
})[t];
export {
  c as default
};
