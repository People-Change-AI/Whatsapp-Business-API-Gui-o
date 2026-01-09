const lang = detectLanguage();

fetch(`i18n/${lang}.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("title").innerText = data.title;
    document.getElementById("subtitle").innerText = data.subtitle;

    const content = document.getElementById("content");

    data.steps.forEach(step => {
      const div = document.createElement("div");
      div.className = "step";
      div.innerHTML = `
        <h2>${step.title}</h2>
        <p>${step.text}</p>
        <img src="${step.image}" alt="step image">
      `;
      content.appendChild(div);
    });

    document.getElementById("faqTitle").innerText = data.faq.title;
    document.getElementById("faqContent").innerHTML =
      data.faq.items.map(i => `<p><strong>${i.q}</strong><br>${i.a}</p>`).join("");

    document.getElementById("termsTitle").innerText = data.terms.title;
    document.getElementById("termsContent").innerText = data.terms.text;
  });
