export interface Base {
  name: string;
  sub: string;
  lat: number;
  lng: number;
  color: string;
  size: "large";
}

export interface DayTrip {
  name: string;
  lat: number;
  lng: number;
}

export interface ActivityOption {
  title: string;
  tag: string;
  body: string;
  photo?: string;
  photoAlt?: string;
  photoPosition?: string;
  expandable?: boolean;
  details?: string[];
}

export interface Rental {
  name: string;
  url: string;
  desc: string;
}

export interface NextStep {
  number: number;
  title: string;
  desc: string;
}

export const bases: Base[] = [
  { name: "Borgloon area",   sub: "Days 1\u20136 \u00b7 5 nights", lat: 50.800, lng: 5.346, color: "#0F6E56", size: "large" },
  { name: "Amsterdam",       sub: "Days 6\u20139 \u00b7 3 nights", lat: 52.370, lng: 4.895, color: "#B85042", size: "large" },
];

export const dayTrips: DayTrip[] = [
  { name: "Maastricht",       lat: 50.851, lng: 5.690 },
  { name: "Valkenburg",       lat: 50.866, lng: 5.831 },
  { name: "Aachen (Germany)",      lat: 50.776, lng: 6.083 },
  { name: "Li\u00e8ge (Belgium)",  lat: 50.633, lng: 5.567 },
  { name: "Han-sur-Lesse",         lat: 50.124, lng: 5.193 },
  { name: "Bokrijk (Belgium)",     lat: 50.965, lng: 5.413 },
  { name: "Drielandenpunt",        lat: 50.754, lng: 6.020 },
  { name: "Antwerp (Belgium)",     lat: 51.221, lng: 4.402 },
  { name: "Brussels (Belgium)",    lat: 50.847, lng: 4.357 },
  { name: "Cologne (Germany)",     lat: 50.938, lng: 6.960 },
];

export const limburgOptions: ActivityOption[] = [
  { title: "Maastricht", tag: "Half day",
    photo: "photos/maastricht.jpg", photoAlt: "Maastricht old town along the Maas river",
    body: "Cobblestoned old town on the Maas river. Vrijthof square, sidewalk caf\u00e9s on Onze Lieve Vrouweplein, Sint-Pietersberg cave tunnels (guided tours hourly, cool underground). Bookshop inside a 13th-century Dominican church across the river." },
  { title: "Valkenburg", tag: "Half day",
    photo: "photos/valkenburg.jpg", photoAlt: "Valkenburg town with hilltop castle ruins above",
    body: "Only hilltop castle ruin in the Netherlands, above a town built on caves. Short steep climb to the ruins, then velvet caves and coal-mine museum below. Main street has ice cream, pancake houses, and a chairlift over the valley." },
  { title: "Bokrijk (Belgium)", tag: "Full day",
    photo: "photos/bokrijk.jpg", photoAlt: "Cycling Through Water path submerged in a pond at Bokrijk, Belgium", photoPosition: "center 75%",
    body: "Bike rentals at P1 Kasteel (trailers available). \u201cCycling Through Water\u201d path \u2014 submerged bike lane through a pond, best mid-morning before tour buses. Bokrijk Open-Air Museum has costumed blacksmiths, farm animals, Speeltuin playground. Lunch at Koetshuis. ~25 min drive. Closed some Mondays.",
    expandable: true, details: [
      "Stop 1: P1 Bokrijk Kasteel \u2014 \u20ac5 all-day parking, rent bikes with child seat/tagalong at Fietsenverhuur Bokrijk (call ahead for trailer availability).",
      "Stop 2: Cycling Through Water \u2014 arrive mid-morning before tour buses. 6\u201310km flat loop through De Wijers on the knooppunten network.",
      "Stop 3: Bokrijk Open-Air Museum \u2014 costumed blacksmiths, farm animals, Speeltuin playground. Budget 2\u20133 hours. Lunch at Koetshuis (pancakes, frites, outdoor terrace).",
      "Cycling Through the Trees is a separate 45-min drive \u2014 probably too much for the same day.",
    ] },
  { title: "Aachen (Germany)", tag: "Half day",
    photo: "photos/aachen.jpg", photoAlt: "Historic European old town with cathedral spire",
    body: "50 min drive across the German border. Charlemagne\u2019s cathedral (UNESCO) \u2014 mosaics, marble throne, 1,200 years old. Compact walkable old quarter. Printen cookies (local spiced gingerbread), Elisengarten park. Carolus Thermen thermal baths nearby." },
  { title: "Han-sur-Lesse (Belgium)", tag: "Full day",
    photo: "photos/han-sur-lesse.jpg", photoAlt: "Dramatic cave interior with stalactites and underground river",
    body: "~1h 15m into the Belgian Ardennes. Vintage tram to the cave entrance, then a guided walk through massive underground chambers \u2014 underground river, stalactites, light show finale. Some stairs inside. Wildlife park above ground with European bison and wolves." },
  { title: "Drielandenpunt (Vaals)", tag: "Half day",
    photo: "photos/drielandenpunt.jpg", photoAlt: "Panoramic view of rolling green hills at a border point",
    body: "Highest point in the Netherlands (322m). Marker post where NL, Belgium, and Germany meet. Hedge maze, playground, panoramic observation tower (\u20ac5), a few caf\u00e9s. Pairs with a lunch stop in Vaals village." },
  { title: "Antwerp (Belgium)", tag: "Full day",
    photo: "photos/antwerp.jpg", photoAlt: "Antwerp cathedral and historic city center",
    body: "~1h 10m north. Grote Markt, cathedral with Rubens paintings, MAS museum rooftop (free escalator ride up for panoramic views). Zoo next to Centraal Station. Diamond district, chocolate shops, frites stands. Scheldt river promenade." },
  { title: "Brussels (Belgium)", tag: "Full day",
    photo: "photos/brussels.jpg", photoAlt: "Brussels Grand Place square with ornate guild houses",
    body: "~1h 10m west. Grand Place \u2014 ornate guild houses, one of Europe\u2019s most photographed squares. Manneken Pis (smaller than expected). Comic Strip Museum with life-sized Tintin and Smurfs. Waffles from Maison Dandoy, chocolate from Pierre Marcolini. Parking underground at Grand Place." },
  { title: "Cologne (Germany)", tag: "Full day",
    photo: "photos/cologne.jpg", photoAlt: "Cologne Cathedral twin spires towering over the Rhine river",
    body: "~1h 40m northeast. The Dom (cathedral) \u2014 Gothic, free to enter, 533 steps to the top. Chocolate Museum on the Rhine with chocolate fountain and factory tour. Compact walkable old town along the river. Rhine river cruises available." },
];

export const amsterdamOptions: ActivityOption[] = [
  { title: "Canal boat ride",      tag: "1 hour",
    photo: "photos/canal-boat.jpg", photoAlt: "Amsterdam canal with boats and historic houses",
    body: "Small open-boat tours (Those Dam Boat Guys, Flagship Amsterdam) vs. big glass-top cruisers. One hour. Late afternoon light on the canals." },
  { title: "Rijksmuseum",          tag: "Half day",
    photo: "photos/rijksmuseum.jpg", photoAlt: "The Rijksmuseum facade with its reflecting pool",
    body: "Free family treasure-hunt booklet at the desk. Vermeers, Night Watch. Garden and reflecting pool out front. 2\u20132.5 hours." },
  { title: "NEMO Science Museum",  tag: "Half day",
    photo: "photos/nemo.jpg", photoAlt: "NEMO Science Museum green copper building on Amsterdam waterfront",
    body: "Ship-shaped building. Hands-on experiments, water play, chain-reaction machines, rooftop splash pad with city views. Caf\u00e9 on the top floor." },
  { title: "Vondelpark",           tag: "Flexible",
    photo: "photos/vondelpark.jpg", photoAlt: "Leafy green paths and ponds in Vondelpark",
    body: "Bike rentals near the entrance. Six playgrounds, open-air caf\u00e9s (Groot Melkhuis), duck ponds, shallow wading pool in summer. Free, no tickets." },
  { title: "Artis Zoo",            tag: "Half day",
    photo: "photos/artis.jpg", photoAlt: "Zoo animals in a lush green historic setting",
    body: "Europe\u2019s oldest zoo, city center. Aquarium, planetarium, Micropia (microbe museum) next door. Plantage neighborhood caf\u00e9s nearby." },
  { title: "Zaanse Schans",        tag: "Half day",
    photo: "photos/zaanse-schans.jpg", photoAlt: "Dutch windmills along a river under dramatic skies",
    body: "20 min train from Centraal. Working windmills (go inside to see gears), clog-makers, cheese farms. Free to walk around; small fees for windmill interiors." },
  { title: "Pannenkoeken dinner",  tag: "Evening",
    photo: "photos/pancakes.jpg", photoAlt: "Golden Dutch pancake with toppings on a cast-iron pan",
    body: "Dinner-plate-sized Dutch pancakes, sweet or savory toppings. The Pancake Bakery (Prinsengracht) or Pancakes Amsterdam (multiple locations)." },
  { title: "Anne Frank House",     tag: "2 hours",
    photo: "photos/anne-frank.jpg", photoAlt: "Amsterdam canal houses in the Jordaan neighborhood",
    body: "Tickets release online exactly 6 weeks before visit date \u2014 sell out within hours. 1.5\u20132 hours. Heavy subject matter; adults-only option while other parent takes kids elsewhere." },
];

export const limburgRentals: Rental[] = [
  { name: "Borgloon Castle",            url: "https://www.airbnb.com/rooms/1281740265852992133", desc: "Castle apartment in Gors Opleeuw. Shared heated pool, orangery. Rolling Haspengouw landscape, adjacent to Mombeek nature reserve." },
  { name: "Halte St. Gerlach",          url: "https://www.airbnb.co.in/rooms/32008268?source_impression_id=p3_1776086322_P3rm_a0ivOGpYn09", desc: "Converted 1903 train station near vineyards." },
  { name: "Oerthe Valley",              url: "https://www.vrbo.com/1678257ha?chkin=2026-06-21&chkout=2026-06-26&d1=2026-06-21&d2=2026-06-26&startDate=2026-06-21&endDate=2026-06-26&x_pwa=1&rfrr=HSR&pwa_ts=1776090464806&referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&useRewards=false&adults=4&children=1_17%2C1_17&regionId=6052089&destination=Limburg+Province%2C+Flemish+Region%2C+Belgium&destType=BOUNDING_BOX&latLong=50.973896%2C5.341968&bedroom_count_gt=3&property_reviews_group=loved_by_guests&searchId=234e4a51-2758-480a-b9f3-e6bf32224f11&sort=RECOMMENDED&top_dp=238&top_cur=USD&userIntent=&selectedRoomType=27197664&selectedRatePlan=000129d56e5abe2e449f8f888aaa4946fe65&expediaPropertyId=27197664", desc: "G\u00eete in the Ourthe valley. Refurbished on 3 levels, covered terrace w/ gas BBQ." },
  { name: "Schinnen House",             url: "https://www.airbnb.com/rooms/1455384250449715788", desc: "Luxury villa. Private bathrooms in every bedroom, heated spa bath, spacious terrace + green garden." },
  { name: "Burdinne Refuge",            url: "https://www.airbnb.com/rooms/42125862",            desc: "4BR/4BA g\u00eete. Heated in-ground pool, hammam, 3,300m\u00b2 garden. In the Burdinale-Mehaigne Natural Park." },
];

export const amsterdamRentals: Rental[] = [
  { name: "Keizersgracht Canal House",  url: "https://www.airbnb.com/rooms/1627581356585486526?check_in=2026-06-26&check_out=2026-06-29&search_mode=regular_search&source_impression_id=p3_1776093355_P35Sl9asqWK7X1FF&previous_page_section_name=1000&federated_search_id=342d50d9-d96c-4e44-a20b-064605fd1478", desc: "100m\u00b2 canal house on Keizersgracht. 3BR, design bathrooms w/ tub + rain shower. Five floors, spiral staircase, canal views from every bedroom." },
  { name: "Eric V\u00f6kel IJ River Suite", url: "https://www.airbnb.com/rooms/42446371?check_in=2026-06-26&check_out=2026-06-29&search_mode=regular_search&source_impression_id=p3_1776093355_P3mgkNO6lOP-mq0l&previous_page_section_name=1000&federated_search_id=342d50d9-d96c-4e44-a20b-064605fd1478", desc: "75m\u00b2 designer apartment near Centraal Station. 2 double + 1 twin bedroom, 2 bathrooms, IJ River views. Sofa bed for 2 extra. Weekly housekeeping included." },
  { name: "Design House Center",        url: "https://www.airbnb.com/rooms/1658882576998670361?check_in=2026-06-26&check_out=2026-06-29&search_mode=regular_search&source_impression_id=p3_1776093355_P3o4X1_ya__iGq-8&previous_page_section_name=1000&federated_search_id=342d50d9-d96c-4e44-a20b-064605fd1478", desc: "150m\u00b2 over 4 floors. 3BR with king beds, 3 bathrooms (one with tub + double shower). A/C in top bedrooms. Private entrance, fully equipped kitchen." },
  { name: "Oud-Zuid Family Home",        url: "https://www.airbnb.com/rooms/36483173?check_in=2026-06-26&check_out=2026-06-29&search_mode=regular_search&source_impression_id=p3_1776093355_P3DwCOAbjYyc1nth&previous_page_section_name=1000&federated_search_id=342d50d9-d96c-4e44-a20b-064605fd1478", desc: "Near Amsterdam Zuid station + tram stop. Roof terrace (all-day sun), two balconies. Close to Vondelpark and museums." },
];

export const nextSteps: NextStep[] = [
  { number: 1, title: "Lock the dates", desc: "Confirm Sun Jun 21 arrival, Mon Jun 29 departure. Book flights \u2014 prices climb after March for late June." },
  { number: 2, title: "Book the Flanders house", desc: "Good properties book out fast. Target 6+ sleepers, pool or large garden, in the Borgloon area." },
  { number: 3, title: "Book Amsterdam apartment", desc: "3 nights in Oud-Zuid or Oost. Prioritize elevator (strollers + Dutch stairs = no)." },
  { number: 4, title: "Reserve the rental car", desc: "Schiphol pickup Jun 21. Automatic transmission costs more in EU." },
];
