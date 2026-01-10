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

  sel.innerHTML = "";

  const options = [
    { value: "pt-br", label: "🇧🇷 Português (BR)" },
    { value: "pt-pt", label: "🇵🇹 Português (PT)" },
    { value: "pt-ao", label: "🇦🇴 Português (AO)" },
    { value: "en", label: "🇺🇸 English" }
  ];

  options.forEach(opt => {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    sel.appendChild(o);
  });

  sel.value = detectBrowserLang();

  sel.onchange = () => {
    localStorage.setItem("lang", sel.value);
    location.reload();
  };
}


function getCurrentLang() {
  return localStorage.getItem("lang") || detectBrowserLang();
}
