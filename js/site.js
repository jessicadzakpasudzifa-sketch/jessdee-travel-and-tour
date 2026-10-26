const COUNTRIES = [
  {
    id: "ghana",
    name: "Ghana",
    region: "West Africa",
    summary: "Coastal forts, a rainforest canopy walk, and Accra after dark.",
    price: 890,
    days: 7,
    types: ["Culture", "Family"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Castle%2C_Cape_Coast_%28P1100222%29.jpg/1280px-Castle%2C_Cape_Coast_%28P1100222%29.jpg",
    alt: "Cape Coast Castle on the Gulf of Guinea in Ghana"
  },
  {
    id: "kenya",
    name: "Kenya",
    region: "East Africa",
    summary: "Game drives across the Mara and a soft landing in Nairobi.",
    price: 2450,
    days: 8,
    types: ["Safari", "Adventure"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=70",
    alt: "Elephants walking across open grassland in Kenya"
  },
  {
    id: "morocco",
    name: "Morocco",
    region: "North Africa",
    summary: "Medinas, riads, and a night in the Sahara.",
    price: 1680,
    days: 9,
    types: ["Culture"],
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1400&q=70",
    alt: "Blue-washed streets in Chefchaouen, Morocco"
  },
  {
    id: "south-africa",
    name: "South Africa",
    region: "Southern Africa",
    summary: "Cape Town's coast, then big-cat country in Kruger.",
    price: 2890,
    days: 10,
    types: ["Adventure", "Safari"],
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1400&q=70",
    alt: "Cape Town and Table Mountain above the coastline"
  },
  {
    id: "tanzania",
    name: "Tanzania",
    region: "East Africa",
    summary: "Serengeti plains followed by barefoot days in Zanzibar.",
    price: 3200,
    days: 10,
    types: ["Safari", "Relaxation"],
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1400&q=70",
    alt: "Turquoise water along a tropical East African shore"
  },
  {
    id: "egypt",
    name: "Egypt",
    region: "North Africa",
    summary: "Pyramids, the Nile, and Cairo's oldest streets.",
    price: 1280,
    days: 8,
    types: ["Culture", "Family"],
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1400&q=70",
    alt: "The Pyramids of Giza in warm evening light"
  },
  {
    id: "greece",
    name: "Greece",
    region: "Europe",
    summary: "Whitewashed islands, slow ferries, and long lunches.",
    price: 2150,
    days: 8,
    types: ["Relaxation", "Family"],
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1400&q=70",
    alt: "Blue domes and white buildings above the Santorini caldera"
  },
  {
    id: "japan",
    name: "Japan",
    region: "Asia",
    summary: "Tokyo's pace, then temples and tea in Kyoto.",
    price: 3400,
    days: 12,
    types: ["Culture"],
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=70",
    alt: "A red pagoda and autumn trees in Kyoto"
  },
  {
    id: "italy",
    name: "Italy",
    region: "Europe",
    summary: "Rome's layers and the Amalfi coast on the table.",
    price: 2480,
    days: 9,
    types: ["Culinary", "Culture"],
    image: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=1400&q=70",
    alt: "Cliffside villages along the Amalfi Coast"
  },
  {
    id: "iceland",
    name: "Iceland",
    region: "Europe",
    summary: "Waterfalls, black sand, and a soak after the drive.",
    price: 2760,
    days: 7,
    types: ["Adventure"],
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1400&q=70",
    alt: "A waterfall and green cliffs in Iceland"
  },
  {
    id: "thailand",
    name: "Thailand",
    region: "Asia",
    summary: "Bangkok markets, northern temples, and a quiet beach.",
    price: 1420,
    days: 10,
    types: ["Relaxation", "Culture"],
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1400&q=70",
    alt: "Longtail boats in clear water beside limestone cliffs in Thailand"
  },
  {
    id: "india",
    name: "India",
    region: "Asia",
    summary: "The Taj Mahal at first light, then the lanes of Agra and Delhi.",
    price: 1590,
    days: 7,
    types: ["Culture", "Family"],
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=70",
    alt: "The Taj Mahal reflected in still water"
  },
  {
    id: "turkey",
    name: "Turkey",
    region: "Europe",
    summary: "Istanbul's mosques, the Bosphorus, and a slower day in the bazaar.",
    price: 1740,
    days: 7,
    types: ["Culture"],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=70",
    alt: "The Blue Mosque and Istanbul skyline at dusk"
  },
  {
    id: "france",
    name: "France",
    region: "Europe",
    summary: "Paris bridges, museum mornings, and a day outside the city.",
    price: 2280,
    days: 7,
    types: ["Culture", "Culinary"],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=70",
    alt: "The Eiffel Tower above the Paris rooftops"
  },
  {
    id: "canada",
    name: "Canada",
    region: "North America",
    summary: "Rockies viewpoints, a lakeside lodge, and room to breathe.",
    price: 2620,
    days: 8,
    types: ["Adventure"],
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=70",
    alt: "Snow-dusted peaks and a lake in the Canadian Rockies"
  },
  {
    id: "peru",
    name: "Peru",
    region: "South America",
    summary: "Cusco, the Sacred Valley, and a dawn at Machu Picchu.",
    price: 2340,
    days: 9,
    types: ["Adventure", "Culture"],
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1400&q=70",
    alt: "Machu Picchu above the Andean ridgeline"
  }
];

const PACKAGES = [
  {
    id: "ghana-coast",
    countryId: "ghana",
    name: "Ghana Heritage & Coast",
    nights: "6 nights",
    overview: "A first journey through Ghana: Accra's kitchens and galleries, the castles at Cape Coast and Elmina, and the Kakum canopy walk.",
    itinerary: [
      { title: "Days 1–2 · Accra", text: "Airport welcome, a Jamestown walk, and an evening of grilled tilapia. Day two is for the Arts Centre, a gallery stop, and a cooking afternoon." },
      { title: "Days 3–5 · Cape Coast", text: "Guided time at Cape Coast and Elmina castles, a canoe landing with local fishermen, and the Kakum canopy walkway." },
      { title: "Days 6–7 · Back to Accra", text: "A free morning on the coast, then the return drive. Departure help and a last-night dinner in the capital." }
    ],
    includes: ["Boutique hotels", "Private driver and guide", "Breakfast daily and four dinners", "Castle and park fees", "Airport transfers"],
    excludes: ["International flights", "Travel insurance", "Visa fees", "Lunches unless noted"]
  },
  {
    id: "kenya-safari",
    countryId: "kenya",
    name: "Kenya Classic Safari",
    nights: "7 nights",
    overview: "Four nights in the Masai Mara with a Nairobi start and finish. Built for first safaris and return travelers who want time with the migration season in mind.",
    itinerary: [
      { title: "Day 1 · Nairobi", text: "Meet and transfer to a city hotel. Optional giraffe centre visit in the late afternoon." },
      { title: "Days 2–5 · Masai Mara", text: "Fly or drive into camp. Morning and afternoon game drives, a visit arranged with a Maasai community, and one bush breakfast." },
      { title: "Days 6–8 · Nairobi departure", text: "A last drive at dawn, return to Nairobi, and a day of rest or the National Museum before the flight home." }
    ],
    includes: ["Lodge and tented camp", "Park fees and game drives", "Internal flight or 4x4 transfer", "All meals on safari", "English-speaking guide"],
    excludes: ["International flights", "Balloon safari", "Tips", "Travel insurance"]
  },
  {
    id: "morocco-sahara",
    countryId: "morocco",
    name: "Morocco Cities & Sahara",
    nights: "8 nights",
    overview: "Marrakech, the Atlas Mountains, a desert camp, and Fes. A classic route with room to wander the souks without rushing every gate.",
    itinerary: [
      { title: "Days 1–3 · Marrakech", text: "Riad stay, a medina walk with a local host, Jardin Majorelle, and an evening in Jemaa el-Fna." },
      { title: "Days 4–6 · Atlas & desert", text: "Ait Benhaddou, a kasbah night, then camel track and camp under the stars near Merzouga." },
      { title: "Days 7–9 · Fes", text: "Cross the Middle Atlas, then two nights in Fes for the tanneries, a riad dinner, and departure." }
    ],
    includes: ["Riads and desert camp", "Private driver", "Breakfast and selected dinners", "Camel trek and monument entries"],
    excludes: ["International flights", "Lunches", "Travel insurance", "Optional hammam"]
  },
  {
    id: "cape-kruger",
    countryId: "south-africa",
    name: "Cape & Kruger",
    nights: "9 nights",
    overview: "Table Mountain and the Cape Peninsula, then a private-reserve stay on the edge of Kruger for walking and night drives.",
    itinerary: [
      { title: "Days 1–4 · Cape Town", text: "Waterfront hotel, peninsula tour to the Cape of Good Hope, and a free day for Bo-Kaap or a winelands add-on." },
      { title: "Days 5–8 · Kruger area", text: "Flight east and three nights in a reserve with morning walks, afternoon drives, and one night drive." },
      { title: "Days 9–10 · Depart", text: "Morning in camp and a flight back through Johannesburg." }
    ],
    includes: ["Hotels and lodge", "Peninsula tour", "Safari activities listed", "Breakfast and full board on safari", "Domestic flight"],
    excludes: ["International flights", "Winelands tour", "Visa if required", "Travel insurance"]
  },
  {
    id: "serengeti-zanzibar",
    countryId: "tanzania",
    name: "Serengeti & Zanzibar",
    nights: "9 nights",
    overview: "A split journey: wildlife on the Serengeti short grass, then Stone Town and a north-coast beach.",
    itinerary: [
      { title: "Days 1–5 · Serengeti", text: "Arusha briefing, light aircraft into the park, and three full days of game drives with picnic lunches." },
      { title: "Days 6–10 · Zanzibar", text: "Stone Town walking tour, spice farm, then three nights at a beach lodge with a dhow sunset." }
    ],
    includes: ["Camps and beach lodge", "Park fees and internal flights", "Game drives", "Breakfast and safari meals", "Stone Town guide"],
    excludes: ["International flights", "Scuba diving", "Drinks at the beach", "Travel insurance"]
  },
  {
    id: "nile-pyramids",
    countryId: "egypt",
    name: "Nile & Pyramids",
    nights: "7 nights",
    overview: "Cairo's ancient sites and a four-night Nile cruise between Luxor and Aswan, paced for families as well as couples.",
    itinerary: [
      { title: "Days 1–3 · Cairo", text: "Giza, the Grand Egyptian Museum, and Islamic Cairo with a guide who keeps the days short enough for children." },
      { title: "Days 4–7 · The Nile", text: "Fly to Luxor, board the cruise, and visit Karnak, Valley of the Kings, Edfu, and Philae." },
      { title: "Day 8 · Departure", text: "Aswan morning and flights home via Cairo." }
    ],
    includes: ["City hotel and cruise cabin", "Guided entries listed", "Domestic flights", "Breakfast and cruise meals"],
    excludes: ["International flights", "Hot-air balloon", "Tips", "Travel insurance"]
  },
  {
    id: "greek-islands",
    countryId: "greece",
    name: "Greek Island Holiday",
    nights: "7 nights",
    overview: "Athens for a day, then ferries to Naxos and Santorini. Designed for couples and friends who would rather swim than sprint.",
    itinerary: [
      { title: "Days 1–2 · Athens", text: "Acropolis with a guide in the cool hours, then a neighborhood dinner in Pangrati." },
      { title: "Days 3–5 · Naxos", text: "Port-town hotel, a beach afternoon, and a village drive through the marble country inland." },
      { title: "Days 6–8 · Santorini", text: "Caldera stay, a boat along the rim, and a free last morning before the flight." }
    ],
    includes: ["Handpicked hotels", "Ferry tickets", "Acropolis guide", "Daily breakfast", "One caldera cruise"],
    excludes: ["International flights", "Most lunches and dinners", "Travel insurance"]
  },
  {
    id: "tokyo-kyoto",
    countryId: "japan",
    name: "Tokyo to Kyoto",
    nights: "11 nights",
    overview: "A rail journey from Tokyo's neighborhoods to Hakone's springs and Kyoto's temples, with a rail pass and local hosts.",
    itinerary: [
      { title: "Days 1–5 · Tokyo", text: "Shibuya and Asakusa walks, a teamLab or market morning of your choice, and a day trip to Nikko." },
      { title: "Days 6–7 · Hakone", text: "Ryokan night with an onsen, lake cruise if the weather holds, and open-air museum time." },
      { title: "Days 8–12 · Kyoto", text: "Fushimi Inari at opening, Arashiyama, a tea gathering, Nara as a day trip, and a kaiseki farewell." }
    ],
    includes: ["Hotels and one ryokan", "JR Pass", "Listed guided walks", "Breakfast and two special dinners"],
    excludes: ["International flights", "Most meals", "Pocket wifi upgrade", "Travel insurance"]
  },
  {
    id: "rome-amalfi",
    countryId: "italy",
    name: "Rome & Amalfi Table",
    nights: "8 nights",
    overview: "A food-first week: Roman kitchens, a market class, then lemons, boats, and long tables on the Amalfi coast.",
    itinerary: [
      { title: "Days 1–4 · Rome", text: "Trastevere stay, a morning food walk, Colosseum and Forum with skip-the-line tickets, and a pasta class." },
      { title: "Days 5–9 · Amalfi", text: "Private transfer south, a boat to hidden coves, a mozzarella visit, and unstructured beach time." }
    ],
    includes: ["Central hotels", "Food walk and cooking class", "Skip-the-line ancient Rome", "Boat excursion", "Breakfast"],
    excludes: ["International flights", "Most dinners", "Travel insurance"]
  },
  {
    id: "iceland-south",
    countryId: "iceland",
    name: "Iceland South Coast",
    nights: "6 nights",
    overview: "A small-group loop of waterfalls, black-sand beaches, and a glacier edge, with Reykjavík on either side.",
    itinerary: [
      { title: "Days 1–2 · Reykjavík", text: "Harbor hotel, a hallgrimskirkja hour, and a golden-circle day with a local driver." },
      { title: "Days 3–5 · South coast", text: "Seljalandsfoss, Skógafoss, Reynisfjara, and a guided glacier walk with proper kit supplied." },
      { title: "Days 6–7 · Blue rest", text: "A lagoon soak and a free afternoon before departure." }
    ],
    includes: ["Hotels", "Golden Circle and south-coast guiding", "Glacier walk", "Lagoon entry", "Breakfast"],
    excludes: ["International flights", "Lunches", "Travel insurance", "Extra excursions"]
  },
  {
    id: "thailand-slow",
    countryId: "thailand",
    name: "Thailand, Slowly",
    nights: "9 nights",
    overview: "Bangkok for the river and the markets, Chiang Mai for temples and a cooking day, then a quiet Andaman beach.",
    itinerary: [
      { title: "Days 1–3 · Bangkok", text: "River hotel, a longtail on the khlongs, and a evening food walk that skips the longest queues." },
      { title: "Days 4–6 · Chiang Mai", text: "Old-city stay, a temple morning, and a market-to-table cooking class." },
      { title: "Days 7–10 · Beach", text: "Flight south and three unscheduled nights with a boat day if you want one." }
    ],
    includes: ["Hotels", "Listed tours and class", "Domestic flight", "Breakfast", "Airport transfers"],
    excludes: ["International flights", "Most meals", "Travel insurance"]
  },
  {
    id: "peru-sacred",
    countryId: "peru",
    name: "Sacred Valley & Machu Picchu",
    nights: "8 nights",
    overview: "Time to acclimatize in the Sacred Valley before a dawn entry to Machu Picchu, with Lima's food scene as the bookend.",
    itinerary: [
      { title: "Days 1–2 · Lima", text: "Miraflores hotel and a guided tasting through Barranco and the central market." },
      { title: "Days 3–6 · Sacred Valley", text: "Cusco at an easy pace, Pisac and Ollantaytambo, and a community lunch in the valley." },
      { title: "Days 7–9 · Machu Picchu", text: "Train and guided citadel visit, then a return via Cusco for the flight to Lima and home." }
    ],
    includes: ["Hotels", "Train and entry tickets", "Guides and tasting", "Breakfast", "Internal flights"],
    excludes: ["International flights", "Huayna Picchu permit if added later", "Travel insurance"]
  },
  {
    id: "taj-agra",
    countryId: "india",
    name: "Taj & Agra",
    nights: "6 nights",
    overview: "Delhi for the arrival, then Agra for the Taj Mahal at opening hour and a riverside evening.",
    itinerary: [
      { title: "Days 1–2 · Delhi", text: "Airport welcome, a guided old-city walk, and a free afternoon to settle." },
      { title: "Days 3–5 · Agra", text: "Sunrise at the Taj Mahal, Agra Fort, and a slower day for markets or a family rest." },
      { title: "Days 6–7 · Departure", text: "Return to Delhi and help with the flight home." }
    ],
    includes: ["Hotels", "Private driver", "Taj and fort entries", "Breakfast", "Airport transfers"],
    excludes: ["International flights", "Most meals", "Travel insurance"]
  },
  {
    id: "istanbul-week",
    countryId: "turkey",
    name: "Istanbul Week",
    nights: "6 nights",
    overview: "A first week in Istanbul: the historic peninsula, a Bosphorus cruise, and time to wander the Grand Bazaar.",
    itinerary: [
      { title: "Days 1–3 · Sultanahmet", text: "Hagia Sophia, the Blue Mosque, and a cistern visit with a local host." },
      { title: "Days 4–5 · The water", text: "A Bosphorus cruise and a neighborhood afternoon in Karakoy or Kadikoy." },
      { title: "Days 6–7 · Departure", text: "A free morning and transfer to the airport." }
    ],
    includes: ["Boutique hotel", "Listed entries and cruise", "Breakfast", "Airport transfers"],
    excludes: ["International flights", "Most meals", "Travel insurance"]
  },
  {
    id: "paris-light",
    countryId: "france",
    name: "Paris, Lightly",
    nights: "6 nights",
    overview: "A gentle Paris week: one museum, the river, and evenings left open for whatever the city suggests.",
    itinerary: [
      { title: "Days 1–3 · The river", text: "Left-bank hotel, a Seine walk, and a skip-the-line hour at the Louvre or Musee d'Orsay." },
      { title: "Days 4–5 · Neighborhoods", text: "A market morning and a day trip to Versailles if the group wants it." },
      { title: "Days 6–7 · Departure", text: "A last cafe morning and transfer help." }
    ],
    includes: ["Central hotel", "Museum entry", "Breakfast", "Airport transfer"],
    excludes: ["International flights", "Most meals", "Versailles tickets unless added", "Travel insurance"]
  },
  {
    id: "rockies-lakes",
    countryId: "canada",
    name: "Rockies Lakes",
    nights: "7 nights",
    overview: "Banff and Lake Louise at an easy pace, with a private driver for the scenic stops.",
    itinerary: [
      { title: "Days 1–3 · Banff", text: "Town hotel, a gondola or hot springs afternoon, and a quiet start after the flight." },
      { title: "Days 4–6 · The lakes", text: "Lake Louise and Moraine when the road is open, with time for a short walk rather than a summit." },
      { title: "Days 7–8 · Departure", text: "Return toward Calgary and the flight home." }
    ],
    includes: ["Lodge and hotel", "Private driver", "Park pass", "Breakfast"],
    excludes: ["International flights", "Most meals", "Travel insurance"]
  }
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

function countryById(id) {
  return COUNTRIES.find((country) => country.id === id);
}

function packageById(id) {
  return PACKAGES.find((trip) => trip.id === id);
}

function budgetBand(price) {
  if (price < 1500) return "under";
  if (price <= 2500) return "mid";
  return "premium";
}

function durationBand(days) {
  if (days <= 7) return "week";
  if (days <= 9) return "mid";
  return "long";
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("is-open")) return;
    const target = event.target;
    if (target instanceof Element && target.closest(".nav-toggle, .site-nav")) return;
    closeNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function tripOptions(placeholder) {
  const options = [`<option value="">${placeholder || "Any destination"}</option>`];
  COUNTRIES.forEach((country) => {
    options.push(`<option value="${country.id}">${country.name}</option>`);
  });
  return options.join("");
}

function fillDestinationSelects() {
  document.querySelectorAll("[data-destinations]").forEach((select) => {
    const current = new URLSearchParams(window.location.search).get(select.dataset.param || "country") || select.dataset.selected || "";
    select.innerHTML = tripOptions(select.dataset.placeholder);
    if (current && [...select.options].some((option) => option.value === current)) {
      select.value = current;
    }
  });
}

function applySearchParams() {
  const params = new URLSearchParams(window.location.search);
  document.querySelectorAll("[data-destinations]").forEach((select) => {
    const key = select.dataset.param || "country";
    const value = params.get(key);
    if (value && [...select.options].some((option) => option.value === value)) {
      select.value = value;
    }
  });
  ["date", "travelers", "intent", "package"].forEach((key) => {
    const field = document.querySelector(`[name="${key}"]`);
    const value = params.get(key === "date" ? "date" : key);
    if (field && value) field.value = value;
  });
  const departure = document.querySelector('[name="departure"]');
  if (departure && params.get("date")) departure.value = params.get("date");
  const travelers = document.querySelector('[name="travelers"]');
  if (travelers && params.get("travelers")) travelers.value = params.get("travelers");
  const destination = document.querySelector('[name="destination"]');
  if (destination && params.get("country")) destination.value = params.get("country");
  if (destination && params.get("destination")) destination.value = params.get("destination");
}

function renderCountries() {
  const grid = document.querySelector("#country-grid");
  if (!grid) return;

  const form = document.querySelector("#country-filters");
  const note = document.querySelector("#plan-note");
  const count = document.querySelector("#result-count");
  const params = new URLSearchParams(window.location.search);

  const setSelect = (name) => {
    const field = form.elements[name];
    if (field && params.get(name)) field.value = params.get(name);
  };
  ["country", "region", "budget", "type", "duration"].forEach(setSelect);

  const date = params.get("date");
  const travelers = params.get("travelers");
  if (note && (date || travelers)) {
    const bits = [];
    if (travelers) bits.push(`${travelers} traveler${travelers === "1" ? "" : "s"}`);
    if (date) bits.push(`departing ${date}`);
    const query = new URLSearchParams();
    if (params.get("country")) query.set("destination", params.get("country"));
    if (date) query.set("date", date);
    if (travelers) query.set("travelers", travelers);
    note.hidden = false;
    note.innerHTML = `<p>Planning for ${bits.join(", ")}. <a href="booking.html?${query.toString()}">Continue to the inquiry form</a> when a country feels right.</p>`;
  }

  const draw = () => {
    const data = new FormData(form);
    const filters = Object.fromEntries(data.entries());
    const matches = COUNTRIES.filter((country) => {
      if (filters.country && country.id !== filters.country) return false;
      if (filters.region && country.region !== filters.region) return false;
      if (filters.budget && budgetBand(country.price) !== filters.budget) return false;
      if (filters.type && !country.types.includes(filters.type)) return false;
      if (filters.duration && durationBand(country.days) !== filters.duration) return false;
      return true;
    });

    count.textContent = `${matches.length} destination${matches.length === 1 ? "" : "s"}`;
    if (!matches.length) {
      grid.innerHTML = `<div class="empty"><h2>No countries match those filters</h2><p>Clear a filter, or tell us what you want and we will shape a custom itinerary.</p><a class="btn btn-navy" href="booking.html?intent=custom">Request a custom itinerary</a></div>`;
      return;
    }

    grid.innerHTML = matches
      .map((country) => {
        const href = `packages.html?country=${country.id}`;
        return `<a class="country-card" href="${href}">
          <img src="${country.image}" alt="${country.alt}">
          <div>
            <p>${country.region} · ${country.days} days</p>
            <h3>${country.name}</h3>
            <p>${country.summary}</p>
            <p>From ${money.format(country.price)} per person</p>
          </div>
        </a>`;
      })
      .join("");

    const next = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) next.set(key, value);
    });
    if (date) next.set("date", date);
    if (travelers) next.set("travelers", travelers);
    const query = next.toString();
    history.replaceState(null, "", query ? `?${query}` : "countries.html");
  };

  form.addEventListener("input", draw);
  form.addEventListener("reset", () => {
    window.setTimeout(draw, 0);
  });
  draw();
}

function renderPackages() {
  const grid = document.querySelector("#package-grid");
  const dialog = document.querySelector("#package-dialog");
  if (!grid || !dialog) return;

  const form = document.querySelector("#package-filters");
  const count = document.querySelector("#result-count");
  const params = new URLSearchParams(window.location.search);
  if (form) {
    ["country", "region", "budget", "type", "duration"].forEach((name) => {
      if (params.get(name) && form.elements[name]) form.elements[name].value = params.get(name);
    });
  }

  const openPackage = (id) => {
    const trip = packageById(id);
    const country = countryById(trip.countryId);
    dialog.innerHTML = `
      <img class="dialog-photo" src="${country.image}" alt="${country.alt}">
      <div class="dialog-body">
        <div class="dialog-top">
          <div>
            <p class="kicker">${country.name} · ${country.region}</p>
            <h2 id="dialog-title">${trip.name}</h2>
            <div class="meta">
              <span>${trip.nights}</span>
              <span>${country.types.join(" · ")}</span>
              <span>From ${money.format(country.price)} pp</span>
            </div>
          </div>
          <button class="close-dialog" type="button" data-close aria-label="Close">×</button>
        </div>
        <p>${trip.overview}</p>
        <div class="itinerary">
          ${trip.itinerary
            .map(
              (stop) => `<article><h4>${stop.title}</h4><p>${stop.text}</p></article>`
            )
            .join("")}
        </div>
        <div class="split-lists">
          <div>
            <h3>Included</h3>
            <ul>${trip.includes.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h3>Not included</h3>
            <ul>${trip.excludes.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="package-actions" style="margin-top:18px">
          <a class="btn btn-gold" href="booking.html?destination=${country.id}&package=${trip.id}&intent=book">Book now</a>
          <a class="btn btn-line-dark" href="booking.html?destination=${country.id}&package=${trip.id}&intent=quote">Request quote</a>
        </div>
      </div>`;
    dialog.showModal();
  };

  const draw = () => {
    const filters = form ? Object.fromEntries(new FormData(form).entries()) : {};
    const matches = PACKAGES.filter((trip) => {
      const country = countryById(trip.countryId);
      if (filters.country && country.id !== filters.country) return false;
      if (filters.region && country.region !== filters.region) return false;
      if (filters.budget && budgetBand(country.price) !== filters.budget) return false;
      if (filters.type && !country.types.includes(filters.type)) return false;
      if (filters.duration && durationBand(country.days) !== filters.duration) return false;
      return true;
    });

    if (count) count.textContent = `${matches.length} package${matches.length === 1 ? "" : "s"}`;
    if (!matches.length) {
      grid.innerHTML = `<div class="empty"><h2>No packages in that range</h2><p>We can still design a route around your dates and budget.</p><a class="btn btn-navy" href="booking.html?intent=custom">Request a custom itinerary</a></div>`;
      return;
    }

    grid.innerHTML = matches
      .map((trip) => {
        const country = countryById(trip.countryId);
        return `<article class="package-card">
          <img src="${country.image}" alt="${country.alt}">
          <div class="package-body">
            <p class="kicker">${country.name} · ${country.region}</p>
            <h3>${trip.name}</h3>
            <p>${trip.overview}</p>
            <div class="meta">
              <span>${trip.nights}</span>
              ${country.types.map((type) => `<span>${type}</span>`).join("")}
            </div>
            <div class="package-foot">
              <p class="price"><small>From, per person</small>${money.format(country.price)}</p>
              <div class="package-actions">
                <button class="btn btn-navy btn-small" type="button" data-open="${trip.id}">View itinerary</button>
                <a class="btn btn-gold btn-small" href="booking.html?destination=${country.id}&package=${trip.id}&intent=book">Book now</a>
              </div>
            </div>
          </div>
        </article>`;
      })
      .join("");
  };

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open]");
    if (button) openPackage(button.dataset.open);
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest("[data-close]")) dialog.close();
  });
  dialog.addEventListener("close", () => {
    dialog.innerHTML = "";
  });

  if (form) {
    form.addEventListener("input", draw);
    form.addEventListener("reset", () => window.setTimeout(draw, 0));
  }
  draw();

  if (params.get("package") && packageById(params.get("package"))) {
    openPackage(params.get("package"));
  }
}

function bindInquiry(form, storageKey) {
  if (!form) return;
  const success = document.querySelector("#form-success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    form.querySelectorAll(".error").forEach((node) => {
      node.textContent = "";
    });

    const required = ["name", "email", "phone", "destination", "message"];
    required.forEach((name) => {
      const field = form.elements[name];
      const error = form.querySelector(`[data-error-for="${name}"]`);
      if (field && !field.value.trim()) {
        valid = false;
        if (error) error.textContent = "This field is required.";
      }
    });

    const email = form.elements.email;
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      valid = false;
      const error = form.querySelector('[data-error-for="email"]');
      if (error) error.textContent = "Enter a valid email address.";
    }

    const departure = form.elements.departure;
    const returning = form.elements.return;
    if (departure && returning && departure.value && returning.value && returning.value < departure.value) {
      valid = false;
      const error = form.querySelector('[data-error-for="return"]');
      if (error) error.textContent = "Return date should be on or after departure.";
    }

    if (!valid) return;

    const payload = Object.fromEntries(new FormData(form).entries());
    const reference = `JD-${Math.floor(1000 + Math.random() * 9000)}`;
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    saved.push({ ...payload, reference, savedAt: new Date().toISOString() });
    localStorage.setItem(storageKey, JSON.stringify(saved));

    form.hidden = true;
    if (success) {
      success.classList.add("is-on");
      const name = payload.name.split(" ")[0];
      success.querySelector("[data-ref]").textContent = reference;
      success.querySelector("[data-name]").textContent = name;
    }
  });
}

function initBooking() {
  const form = document.querySelector("#inquiry-form");
  if (!form) return;
  const packageField = form.elements.package;
  packageField.innerHTML =
    '<option value="">Not sure yet</option>' +
    PACKAGES.map((trip) => {
      const country = countryById(trip.countryId);
      return `<option value="${trip.id}">${trip.name} · ${country.name}</option>`;
    }).join("");
  applySearchParams();
  const params = new URLSearchParams(window.location.search);
  if (params.get("package")) packageField.value = params.get("package");
  if (params.get("intent") && form.elements.intent) form.elements.intent.value = params.get("intent");
  bindInquiry(form, "jessdee.inquiries");
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  fillDestinationSelects();
  applySearchParams();
  renderCountries();
  renderPackages();
  initBooking();
  bindInquiry(document.querySelector("#contact-form"), "jessdee.messages");
});
