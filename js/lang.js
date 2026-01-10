const supportedLangs = ["pt-br", "pt-pt", "pt-ao", "en"];

function detectBrowserLang() {
  const nav = navigator.language.toLowerCase();
  if (supportedLangs.includes(nav)) return nav;
  if (nav.startsWith("pt")) return "pt-br";
  return "en";
}

// Retorna o idioma salvo ou detecta o do navegador
function getCurrentLang() {
  return localStorage.getItem("lang") || detectBrowserLang();
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

  // CORREÇÃO AQUI: Define o valor do select baseado no que está em uso no momento
  // Se não fizermos isso, ele sempre volta para o idioma do navegador ao recarregar.
  sel.value = getCurrentLang();

  sel.onchange = () => {
    localStorage.setItem("lang", sel.value);
    location.reload(); // Recarrega para o main.js buscar o novo JSON
  };
}