/* قائمة الرحلات — عدّل هنا الأسعار والوصف والصور */
const TRIPS = [
  {
    id: 1,
    category: "safari",
    price: 700, // EGP
    duration: "3h",
    image: "https://images.unsplash.com/photo-1608156639585-58a14a0b5b92?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "سفاري باجي VIP (غروب)",
      en: "VIP Quad Safari (Sunset)",
      it: "Safari Quad VIP (Tramonto)",
      ru: "VIP сафари на квадроциклах (закат)"
    },
    desc: {
      ar: "باجي 3 ساعات وسط الجبال + نقاط تصوير. انتقالات حسب المنطقة.",
      en: "3h quad tour in the mountains with photo stops. Transfers depend on area.",
      it: "Tour quad di 3 ore tra le montagne con soste foto. Transfer dipende dalla zona.",
      ru: "3 часа на квадроциклах в горах + фотостопы. Трансфер по району."
    }
  },
  {
    id: 2,
    category: "sea",
    price: 600,
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "رحلة رأس محمد بالقارب",
      en: "Ras Mohammed Boat Trip",
      it: "Gita in barca a Ras Mohammed",
      ru: "Морской тур в Рас-Мохаммед"
    },
    desc: {
      ar: "سنوركلينج وشعاب مرجانية + غداء على المركب. معدات متاحة.",
      en: "Snorkeling at top reefs + lunch on board. Gear available.",
      it: "Snorkeling sulla barriera + pranzo a bordo. Attrezzatura disponibile.",
      ru: "Снорклинг на рифах + обед на судне. Снаряжение доступно."
    }
  },
  {
    id: 3,
    category: "sea",
    price: 500,
    duration: "2h",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "قارب زجاجي (مشاهدة الشعاب)",
      en: "Glass Boat (Coral Viewing)",
      it: "Barca con fondo di vetro",
      ru: "Лодка с прозрачным дном"
    },
    desc: {
      ar: "جولة ممتعة لمشاهدة الشعاب والأسماك من القارب الزجاجي.",
      en: "Relaxed trip to view corals and fish through glass panels.",
      it: "Giro per vedere coralli e pesci dal fondo in vetro.",
      ru: "Прогулка для наблюдения за рифами и рыбами через стекло."
    }
  },
  {
    id: 4,
    category: "safari",
    price: 850,
    duration: "Half day",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "عشاء بدوي + نجوم + باجي",
      en: "Bedouin Dinner + Stargazing + Quad",
      it: "Cena beduina + stelle + quad",
      ru: "Бедуинский ужин + звезды + квадроцикл"
    },
    desc: {
      ar: "باجي + عشاء بدوي وشاي بدوي وجلسة فلكية في الصحراء.",
      en: "Quad ride + Bedouin dinner, tea & desert stargazing.",
      it: "Quad + cena beduina, tè e osservazione delle stelle.",
      ru: "Квадроцикл + бедуинский ужин и наблюдение звезд."
    }
  },
  {
    id: 5,
    category: "sea",
    price: 700,
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "جزيرة تيران بالقارب",
      en: "Tiran Island Boat Trip",
      it: "Isola di Tiran in barca",
      ru: "Остров Тиран (морской тур)"
    },
    desc: {
      ar: "سنوركلينج بمواقع متعددة + غداء + توقفات للسباحة.",
      en: "Multiple snorkeling stops + lunch + swim breaks.",
      it: "Soste snorkeling multiple + pranzo + nuoto.",
      ru: "Несколько остановок для снорклинга + обед + купание."
    }
  },
  {
    id: 6,
    category: "city",
    price: 500,
    duration: "Evening",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "سهرة ألف ليلة وليلة (عرض)",
      en: "Alf Leila Wa Leila Show",
      it: "Spettacolo Alf Leila Wa Leila",
      ru: "Шоу «Тысяча и одна ночь»"
    },
    desc: {
      ar: "عروض فلكلورية واستعراضات + جلسات تصوير.",
      en: "Folklore performances & show + photo moments.",
      it: "Spettacoli folcloristici + foto.",
      ru: "Фольклорное шоу и фотосессии."
    }
  },
  {
    id: 7,
    category: "city",
    price: 500,
    duration: "Half day",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "جولة مدينة (السوق القديم + سوهو)",
      en: "City Tour (Old Market + SOHO)",
      it: "City Tour (Old Market + SOHO)",
      ru: "Сити-тур (Старый рынок + SOHO)"
    },
    desc: {
      ar: "تنقلات مريحة وزيارات لأشهر المعالم للتسوق والتصوير.",
      en: "Comfort transfers & stops at top spots for shopping/photos.",
      it: "Transfer comodi e stop per shopping/foto.",
      ru: "Удобный трансфер и остановки для шопинга/фото."
    }
  },
  {
    id: 8,
    category: "sea",
    price: 300,
    duration: "2h",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "سنوركلينج خليج نعمة",
      en: "Naama Bay Snorkeling",
      it: "Snorkeling a Naama Bay",
      ru: "Снорклинг в Наама-Бей"
    },
    desc: {
      ar: "جولة سريعة بمعدات كاملة ونقطة تجمع قريبة.",
      en: "Quick guided snorkeling with full gear.",
      it: "Snorkeling guidato con attrezzatura.",
      ru: "Короткий снорклинг с инструктажем и снаряжением."
    }
  },
  {
    id: 9,
    category: "show",
    price: 600,
    duration: "Evening",
    image: "https://images.unsplash.com/photo-1520974680420-19aad662f0a5?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "عشاء بحري على مركب (ليلي)",
      en: "Dinner Cruise (Night)",
      it: "Crociera con cena (sera)",
      ru: "Вечерний круиз с ужином"
    },
    desc: {
      ar: "سهرة بحرية مع عشاء وموسيقى وجو رومانسي.",
      en: "Dinner on board with music and sea breeze.",
      it: "Cena a bordo con musica.",
      ru: "Ужин на борту и музыка."
    }
  },
  {
    id: 10,
    category: "safari",
    price: 750,
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "كهف ملون + بلو هول (دهب) – مثال",
      en: "Colored Canyon + Blue Hole (Dahab) – sample",
      it: "Canyon Colorato + Blue Hole (esempio)",
      ru: "Цветной каньон + Блю Хоул (пример)"
    },
    desc: {
      ar: "برنامج يوم كامل — عدّله حسب العرض عندك.",
      en: "Full-day program — adjust details to your exact offer.",
      it: "Giornata intera — aggiorna i dettagli secondo la tua offerta.",
      ru: "Дневной тур — допишите детали по вашей оферте."
    }
  },
  {
    id: 11,
    category: "sea",
    price: 700,
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    name: {
      ar: "رحلة بحرية خاصة (يخت)",
      en: "Private Yacht Sea Trip",
      it: "Giro in yacht privato",
      ru: "Морская прогулка на частной яхте"
    },
    desc: {
      ar: "برنامج خاص للعائلات/المجموعات مع مرونة في المسار.",
      en: "Private program for families/groups with flexible route.",
      it: "Programma privato per famiglie/gruppi.",
      ru: "Индивидуальный маршрут для семей/групп."
    }
  }
];
