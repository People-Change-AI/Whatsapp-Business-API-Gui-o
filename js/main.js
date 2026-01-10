const lang = getCurrentLang();

fetch(`i18n/${lang}.json`)
    .then(res => res.json())
    .then(data => {
        // Título da página
        const titleEl = document.getElementById("title") || document.getElementById("faqTitle") || document.getElementById("termsTitle");
        if (titleEl) titleEl.innerText = data.title;

        // Conteúdo Principal (Steps)
        const content = document.getElementById("content");
        if (content && data.steps) {
            content.innerHTML = data.subtitle ? `<p style="color: #64748b; margin-bottom: 30px; font-size: 1.1rem;">${data.subtitle}</p>` : "";
            
            data.steps.forEach((step, index) => {
                const div = document.createElement("article");
                div.className = "step";
                div.innerHTML = `
                    <h2><span style="color: #cbd5e1;">0${index + 1}</span> ${step.title}</h2>
                    <div class="step-description">${step.text}</div>
                    <img src="${step.image}" alt="${step.title}" loading="lazy">
                `;
                content.appendChild(div);
            });
        }

        // FAQ
        const faqContent = document.getElementById("faqContent");
        if (faqContent && data.faq?.items) {
            faqContent.innerHTML = "";
            data.faq.items.forEach(item => {
                const div = document.createElement("div");
                div.innerHTML = `<p><strong>${item.q}</strong><br><span style="color: #64748b">${item.a}</span></p>`;
                faqContent.appendChild(div);
            });
        }

        // Terms
        const termsContent = document.getElementById("termsContent");
        if (termsContent && data.terms) {
            termsContent.innerHTML = `<div class="step"><p>${data.terms.text}</p></div>`;
        }
    })
    .catch(err => {
        console.error("Erro:", err);
        document.body.innerHTML = "<div style='text-align:center; padding:50px;'>Erro ao carregar conteúdo profissional.</div>";
    });

// Inicializa o seletor
populateLangSelector("languageSelector");