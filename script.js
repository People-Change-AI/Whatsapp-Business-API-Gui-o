const supportedLanguages = ["pt-br", "pt-pt", "pt-ao", "en"];

function detectBrowserLanguage() {
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("pt-pt")) return "pt-pt";
  if (lang.startsWith("pt-ao")) return "pt-ao";
  if (lang.startsWith("pt")) return "pt-br";
  if (lang.startsWith("en")) return "en";
  return "pt-br";
}

async function loadLanguage(lang) {
  const res = await fetch(`i18n/${lang}.json`);
  const data = await res.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (data[key]) el.innerText = data[key];
  });

  document.getElementById("languageSelector").value = lang;
  localStorage.setItem("lang", lang);
}

function changeLanguage(lang) {
  loadLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang");
  loadLanguage(saved || detectBrowserLanguage());
});
