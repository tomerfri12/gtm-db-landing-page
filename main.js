(function () {
  var tabs = document.querySelectorAll(".cmd-tab");
  var panels = {
    rest: document.getElementById("panel-rest"),
    prompt: document.getElementById("panel-prompt"),
  };
  var copyBtn = document.getElementById("cmd-copy");
  var activeKey = "prompt";

  function textFor(key) {
    var el = panels[key];
    if (!el) return "";
    var code = el.querySelector(".cmd-line");
    return code ? code.textContent.trim() : "";
  }

  function setActive(key) {
    activeKey = key;
    tabs.forEach(function (tab) {
      var k = tab.getAttribute("data-panel");
      var on = k === key;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.setAttribute("tabindex", on ? "0" : "-1");
    });
    Object.keys(panels).forEach(function (k) {
      var p = panels[k];
      if (!p) return;
      if (k === key) {
        p.removeAttribute("hidden");
      } else {
        p.setAttribute("hidden", "");
      }
    });
    if (copyBtn) {
      copyBtn.hidden = key === "rest";
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var key = tab.getAttribute("data-panel");
      if (key) setActive(key);
    });
  });

  setActive(activeKey);

  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var t = textFor(activeKey);
      if (!t) return;
      function done() {
        copyBtn.classList.add("is-done");
        copyBtn.setAttribute("aria-label", "Copied");
        setTimeout(function () {
          copyBtn.classList.remove("is-done");
          copyBtn.setAttribute("aria-label", "Copy to clipboard");
        }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(done).catch(function () {});
      }
    });
  }
})();
