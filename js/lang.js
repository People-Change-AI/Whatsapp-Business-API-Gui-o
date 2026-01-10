const supportedLangs = ["pt-br", "pt-pt", "pt-ao", "en"];

function detectBrowserLang() {
  const nav = navigator.language.toLowerCase();
  if (supportedLangs.includes(nav)) return nav;
  if (nav.startsWith("pt")) return "pt-br";
  return "en";
}

function populateLangSelector(id) {
  const sel = document.getElementById(id);
  if (!sel) return;
  sel.innerHTML = `
    <option value="pt-br">🇧🇷 Português (BR)</option>
    <option value="pt-pt">🇵🇹 Português (PT)</option>
    <option value="pt-ao">🇦🇴 Português (AO)</option>
    <option value="en">🇺🇸 English</option>
  `;
  sel.value = detectBrowserLang();
  sel.onchange = () => { 
    localStorage.setItem("lang", sel.value);
    location.reload();
  };
}

function getCurrentLang() {
  return localStorage.getItem("lang") || detectBrowserLang();
}
