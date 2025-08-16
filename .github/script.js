function setLanguage(lang) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => {
        const key = el.id;
        if (dict[lang][key]) {
            el.innerText = dict[lang][key];
        }
    });
}

// يبدأ الموقع بالعربي
setLanguage('ar');
