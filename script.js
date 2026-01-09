const supportedLangs = ["pt-br", "pt-pt", "pt-ao", "en"];
const browserLang = navigator.language.toLowerCase();
const defaultLang = supportedLangs.includes(browserLang)
  ? browserLang
  : browserLang.startsWith("pt") ? "pt-br" : "en";

let currentLang = defaultLang;

async function loadLanguage(lang) {
  const res = await fetch(`i18n/${lang}.json`);
  const data = await res.json();

  if (document.getElementById("title")) {
    document.getElementById("title").innerText = data.title;
    document.getElementById("subtitle").innerText = data.subtitle;
    document.getElementById("container").innerHTML = data.content;
  }

  if (document.getElementById("faq_title")) {
    document.getElementById("faq_title").innerText = data.faq_title;
    document.getElementById("faq_content").innerHTML = data.faq;
  }

  if (document.getElementById("termo_title")) {
    document.getElementById("termo_title").innerText = data.termo_title;
    document.getElementById("termo_content").innerHTML = data.termo;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("languageSelector");
  if (selector) {
    selector.value = currentLang;
    selector.addEventListener("change", e => {
      currentLang = e.target.value;
      loadLanguage(currentLang);
    });
  }
  loadLanguage(currentLang);
});
