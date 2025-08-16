/* إعداد الأرقام وروابط التواصل */
const WHATSAPP1 = "+201279990083";
const WHATSAPP2 = "+201021848590";
const CALL_NUMBER = "+201094436022";

/* حالة اللغة */
const LANGS_RTL = ["ar"];
let currentLang = localStorage.getItem("lang") || "ar";

/* عناصر DOM */
const $ = (s) => document.querySelector(s);
const cards = $("#cards");
const langSelect = $("#langSelect");
const searchInput = $("#search");
const categorySelect = $("#category");
const maxPriceInput = $("#maxPrice");

/* لغة/اتجاه */
function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = LANGS_RTL.includes(lang) ? "rtl" : "ltr";

  // ترجمات الواجهة
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  // ترجمات placeholder
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if(I18N[lang] && I18N[lang][key]) el.setAttribute("placeholder", I18N[lang][key]);
  });

  document.title = I18N[lang]?.site_title || document.title;

  render();
}

/* فورمات السعر */
function priceLabel(p){
  const c = I18N[currentLang]?.egp || "EGP";
  return `${p.toLocaleString()} ${c}`;
}

/* كارت رحلة */
function cardTemplate(t){
  const nm = t.name[currentLang] || t.name.ar;
  const ds = t.desc[currentLang] || t.desc.ar;
  const egp = I18N[currentLang]?.egp || "EGP";
  const from = I18N[currentLang]?.from || "from";
  const bookNow = I18N[currentLang]?.book_now || "Book";
  const details = I18N[currentLang]?.details || "Details";

  const msg = encodeURIComponent(`مرحبًا، عايز أحجز: ${t.name.ar} - السعر؟`);
  const wa = `https://wa.me/${WHATSAPP1.replace('+','')}/?text=${msg}`;

  return `
  <article class="card">
    <img class="thumb" src="${t.image}" alt="${nm}">
    <div class="pad">
      <div class="badge"># ${t.category}</div>
      <h3>${nm}</h3>
      <div class="meta">
        <span class="muted">${t.duration || ""}</span>
        <span class="price-tag">${priceLabel(t.price)}</span>
      </div>
      <p class="muted">${ds}</p>
    </div>
    <div class="actions">
      <a class="btn primary" href="${wa}" target="_blank" rel="noopener">${bookNow}</a>
      <a class="btn outline" href="#contact">${details}</a>
    </div>
  </article>`;
}

/* فلترة وعرض */
function render(){
  const q = (searchInput.value || "").toLowerCase().trim();
  const cat = categorySelect.value;
  const maxP = Number(maxPriceInput.value) || Infinity;

  const list = TRIPS.filter(t=>{
    const matchesQ = (t.name[currentLang]||t.name.ar||"").toLowerCase().includes(q) ||
                     (t.desc[currentLang]||t.desc.ar||"").toLowerCase().includes(q);
    const matchesCat = cat === "all" ? true : t.category === cat;
    const matchesPrice = (t.price || 0) <= maxP;
    return matchesQ && matchesCat && matchesPrice;
  });

  cards.innerHTML = list.map(cardTemplate).join("") || `<p class="muted">No results.</p>`;
}

/* روابط التواصل في الهيدر والكونتاكت */
function setContactLinks(){
  const msg = encodeURIComponent("مرحبًا، أحتاج مساعدة بالحجز 👋");
  $("#wh1").href = `https://wa.me/${WHATSAPP1.replace('+','')}?text=${msg}`;
  $("#wh2").href = `https://wa.me/${WHATSAPP2.replace('+','')}?text=${msg}`;
  $("#callBtn").href = `tel:${CALL_NUMBER}`;
  $("#waLink1").href = `https://wa.me/${WHATSAPP1.replace('+','')}?text=${msg}`;
  $("#waLink2").href = `https://wa.me/${WHATSAPP2.replace('+','')}?text=${msg}`;
  $("#callLink").href = `tel:${CALL_NUMBER}`;
}

/* أحداث */
langSelect.addEventListener("change", e=> applyLang(e.target.value));
searchInput.addEventListener("input", render);
categorySelect.addEventListener("change", render);
maxPriceInput.addEventListener("input", render);

/* init */
document.addEventListener("DOMContentLoaded", ()=>{
  // سنة الفوتر
  document.getElementById("year").textContent = new Date().getFullYear();

  // اختيار اللغة حسب التخزين
  langSelect.value = currentLang;
  setContactLinks();
  applyLang(currentLang);
});
