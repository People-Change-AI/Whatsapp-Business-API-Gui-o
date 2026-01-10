const lang = getCurrentLang();

fetch(`i18n/${lang}.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("title")?.innerText = data.title;
    document.getElementById("subtitle")?.innerText = data.subtitle;

    const content = document.getElementById("content");
    if (content && data.steps) {
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

    // FAQ
    document.getElementById("faqTitle")?.innerText = data.faq?.title;
    if (data.faq?.items && document.getElementById("faqContent")) {
      data.faq.items.forEach(i => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${i.q}</strong><br>${i.a}`;
        document.getElementById("faqContent").appendChild(p);
      });
    }

    // Terms
    document.getElementById("termsTitle")?.innerText = data.terms?.title;
    if (data.terms?.text && document.getElementById("termsContent")) {
      document.getElementById("termsContent").innerHTML = `<p>${data.terms.text}</p>`;
    }
  });

// populate language select if exists
populateLangSelector("languageSelector");
