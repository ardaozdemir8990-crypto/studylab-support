
(function () {
  var email = window.STUDYLAB_SUPPORT_EMAIL || "YOUR_SUPPORT_EMAIL_HERE";
  var els = document.querySelectorAll("[data-support-email]");
  els.forEach(function (el) {
    el.textContent = email;
    if (el.tagName.toLowerCase() === "a" && email !== "YOUR_SUPPORT_EMAIL_HERE") {
      el.href = "mailto:" + email;
    }
  });
})();
