const supportedLanguages = ["pt-br", "pt-pt", "pt-ao"];

function detectLanguage() {
  const lang = navigator.language.toLowerCase();
  if (supportedLanguages.includes(lang)) return lang;
  if (lang.startsWith("pt")) return "pt-br";
  return "pt-br";
}
