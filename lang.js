// i18n dictionary (Arabic default, English alt)
const dict = {
  ar: {
    title:"شرم سيتي ترافل | رحلات وتوصيل بأقل الأسعار",
    brand:"شرم سيتي-ترافل",
    nav_tours:"الرحلات",
    nav_transfer:"التوصيل",
    nav_about:"عنّا",
    nav_contact:"تواصل",
    book_now:"احجز الآن",
    hero_title:"عيش أجمل تجربة في شرم الشيخ",
    hero_sub:"رحلات بحرية وصحراوية، واستقبال وتوصيل بأقل الأسعار. خدمة 24/7.",
    see_tours:"شوف الرحلات",
    see_transfer:"خدمات التوصيل",
    tours_title:"أفضل الرحلات",
    tours_sub:"أسعار تنافسية تشمل الانتقالات والتأمين ودليل مرخّص.",
    tour_boat:"رحلة يخت: محمية رأس محمد + سنوركل",
    hours8:"8 ساعات",
    lunch_included:"غداء ومشروبات",
    insured:"تأمين شامل",
    book:"احجز",
    tour_safari:"سفاري بيتش باجي + عشاء بدوي",
    hours4:"4 ساعات",
    show:"عرض فلكلور",
    tour_submarine:"غواصة سيمي سبمارين: شعاب مرجانية",
    hours2:"ساعتان",
    family:"مناسبة للعائلة",
    from:"ابتداءً من",
    transfer_title:"التوصيل والمواصلات",
    transfer_sub:"استقبال مطار، تنقّل فنادق، ورحلات خاصة بسيارات حديثة وسواقين محترفين.",
    airport:"استقبال مطار شرم",
    sedan:"سيدان (1-3 ركاب)",
    hotel:"تنقلات الفنادق",
    van:"فان (حتى 7 ركاب)",
    private:"رحلة خاصة نصف يوم",
    private_desc:"سيارة خاصة + سائق",
    transfer_note:"الأسعار شاملة الانتظار المعقول + كرسي طفل مجاني عند الطلب.",
    about_title:"ليه تختارنا؟",
    licensed:"دليلين مرخّصين وتأمين كامل",
    best_price:"أقل سعر مضمون",
    support:"دعم واتساب 24/7",
    reviews:"تقييمات ممتازة",
    booking_title:"احجز رحلتك",
    name:"الاسم الكامل",
    phone:"رقم الواتساب",
    service:"الخدمة",
    date:"التاريخ",
    notes:"ملاحظات",
    send_whatsapp:"إرسال على واتساب",
    instant_reply:"نردّ عليك فورًا خلال دقائق.",
    footer_about:"شريكك المثالي لرحلة لا تُنسى في شرم الشيخ.",
    contact_title:"تواصل",
    quick_links:"روابط",
  },
  en: {
    title:"Sharm City Travel | Tours & Transfers at Best Prices",
    brand:"Sharm City-Travel",
    nav_tours:"Tours",
    nav_transfer:"Transfers",
    nav_about:"About",
    nav_contact:"Contact",
    book_now:"Book Now",
    hero_title:"Live your best Sharm El-Sheikh experience",
    hero_sub:"Sea & desert tours with airport transfers. Lowest prices. 24/7 support.",
    see_tours:"See Tours",
    see_transfer:"Transfer Services",
    tours_title:"Top Tours",
    tours_sub:"Competitive prices incl. transport, insurance & licensed guide.",
    tour_boat:"Yacht Trip: Ras Mohammed + Snorkeling",
    hours8:"8 hours",
    lunch_included:"Lunch & drinks",
    insured:"Full insurance",
    book:"Book",
    tour_safari:"Desert Safari ATV + Bedouin Dinner",
    hours4:"4 hours",
    show:"Folklore show",
    tour_submarine:"Semi-Submarine: Coral Reefs",
    hours2:"2 hours",
    family:"Family friendly",
    from:"From",
    transfer_title:"Transfers & Transport",
    transfer_sub:"Airport meet, hotel rides & private trips with modern cars and pro drivers.",
    airport:"Sharm Airport Pickup",
    sedan:"Sedan (1-3 pax)",
    hotel:"Hotel Transfers",
    van:"Van (up to 7 pax)",
    private:"Private Trip (Half Day)",
    private_desc:"Private car + driver",
    transfer_note:"Prices include reasonable waiting + free child seat on request.",
    about_title:"Why choose us?",
    licensed:"Licensed guides & full insurance",
    best_price:"Best price guaranteed",
    support:"24/7 WhatsApp support",
    reviews:"Excellent reviews",
    booking_title:"Book Your Trip",
    name:"Full Name",
    phone:"WhatsApp Number",
    service:"Service",
    date:"Date",
    notes:"Notes",
    send_whatsapp:"Send via WhatsApp",
    instant_reply:"We reply within minutes.",
    footer_about:"Your perfect partner for an unforgettable Sharm trip.",
    contact_title:"Contact",
    quick_links:"Quick Links",
  }
};

const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

let current = "ar";

function applyLang(l){
  const map = dict[l];
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n");
    if (map[key]) el.textContent = map[key];
  }
  document.title = map.title;
  langLabel.textContent = l === "ar" ? "EN" : "ع";
  current = l;
  localStorage.setItem("lang", l);
}
applyLang(localStorage.getItem("lang") || "ar");

langToggle.addEventListener("click", ()=> applyLang(current==="ar" ? "en" : "ar"));

// Booking -> WhatsApp message
const form = document.getElementById("bookingForm");
form.addEventListener("submit", e=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const msgAr = `حجز جديد:
الاسم: ${data.name}
واتساب: ${data.phone}
الخدمة: ${data.service}
التاريخ: ${data.date}
ملاحظات: ${data.notes || "-"}
`;
  const msgEn = `New booking:
Name: ${data.name}
WhatsApp: ${data.phone}
Service: ${data.service}
Date: ${data.date}
Notes: ${data.notes || "-"}
`;
  const text = encodeURIComponent(current==="ar" ? msgAr : msgEn);
  // ضع رقمك هنا بصيغة دولية
  const phone = "201000000000";
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});
