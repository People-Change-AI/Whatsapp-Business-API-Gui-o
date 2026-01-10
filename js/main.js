const lang = getCurrentLang();

fetch(`i18n/${lang}.json`)
  .then(res => res.json())
  .then(data => {
    // --- PÁGINA INICIAL (index.html) ---
    const title = document.getElementById("title");
    if (title) title.innerText = data.title;

    const content = document.getElementById("content");
    if (content && data.steps) {
      content.innerHTML = ''; 
      data.steps.forEach(step => {
        const div = document.createElement("div");
        div.className = "step";
        div.innerHTML = `
          <h2>${step.title}</h2>
          <p>${step.text}</p>
          <img src="${step.image}" alt="${step.title}">
        `;
        content.appendChild(div);
      });
    }

    // --- PÁGINA FAQ (faq.html) ---
    const faqTitle = document.getElementById("faqTitle");
    if (faqTitle) faqTitle.innerText = data.faq?.title || "FAQ";

    const faqContent = document.getElementById("faqContent");
    if (faqContent && data.faq?.items) {
      faqContent.innerHTML = '';
      data.faq.items.forEach(i => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${i.q}</strong><br>${i.a}`;
        faqContent.appendChild(p);
      });
    }

    // --- PÁGINA TERMOS (terms.html) ---
    const termsTitle = document.getElementById("termsTitle");
    if (termsTitle) termsTitle.innerText = data.terms?.title || "Termos";

    const termsContent = document.getElementById("termsContent");
    if (termsContent && data.terms?.text) {
      termsContent.innerHTML = `<p>${data.terms.text}</p>`;
    }
  })
  .catch(err => {
    console.error("Erro ao carregar tradução:", err);
    const main = document.querySelector("main");
    if (main) main.innerHTML = "<p>Erro ao carregar conteúdo. Verifique sua conexão.</p>";
  });

// Inicializa o seletor de idiomas se ele existir na página
populateLangSelector("languageSelector");