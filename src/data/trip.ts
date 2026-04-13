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
  { title: "Maastricht", tag: "Half day \u00b7 anchor city",
    photo: "photos/maastricht.jpg", photoAlt: "Maastricht old town along the Maas river",
    body: "Start at Vrijthof square for coffee, then wander the cobblestoned old town south toward the river. Sint-Pietersberg cave tunnels are a hit with the 7-year-old \u2014 guided tours run hourly and stay cool on hot days. Lunch at one of the sidewalk caf\u00e9s on Onze Lieve Vrouweplein. If energy holds, cross the river to the Stadspark or browse the bookshop inside a 13th-century Dominican church." },
  { title: "Valkenburg", tag: "Half day \u00b7 kids\u2019 favorite",
    photo: "photos/valkenburg.jpg", photoAlt: "Valkenburg town with hilltop castle ruins above",
    body: "The only hilltop castle ruin in the Netherlands, perched above a town built on caves. Start with the castle climb (short but steep \u2014 stroller stays in the car), then duck into the velvet caves or the coal-mine museum below. The main street is cheerfully touristy: ice cream shops, pancake houses, and a chairlift over the valley. Easy to fill a morning and bail by nap time." },
  { title: "Bokrijk (BE)", tag: "Full day \u00b7 sleeper hit",
    photo: "photos/bokrijk.jpg", photoAlt: "Cycling Through Water path submerged in a pond at Bokrijk, Belgium", photoPosition: "center 75%",
    body: "The day that sounds logistical but ends up being the one everyone talks about. Park at P1 Kasteel, rent bikes with a trailer for the 3-year-old, and ride the \u201cCycling Through Water\u201d path mid-morning before tour buses arrive. Then lock up and explore the Bokrijk Open-Air Museum \u2014 costumed blacksmiths, farm animals, and a huge Speeltuin playground. Lunch at Koetshuis (pancakes, frites). ~1h10m drive from Maastricht area. Closed some Mondays \u2014 verify.",
    expandable: true, details: [
      "Stop 1: P1 Bokrijk Kasteel \u2014 \u20ac5 all-day parking, rent bikes with child seat/tagalong at Fietsenverhuur Bokrijk (call ahead for trailer availability).",
      "Stop 2: Cycling Through Water \u2014 arrive mid-morning before tour buses. 6\u201310km flat loop through De Wijers on the knooppunten network. The submerged bike path is the photo moment.",
      "Stop 3: Bokrijk Open-Air Museum \u2014 costumed blacksmiths, farm animals, Speeltuin playground. Budget 2\u20133 hours. Lunch at Koetshuis (pancakes, frites, outdoor terrace).",
      "Skip Cycling Through the Trees same day \u2014 it\u2019s a separate 45-min drive and too much with a 3-year-old. Save for a future trip.",
    ] },
  { title: "Aachen (DE)", tag: "Half day \u00b7 history",
    photo: "photos/aachen.jpg", photoAlt: "Historic European old town with cathedral spire",
    body: "Just 30 minutes across the German border. Charlemagne\u2019s cathedral (UNESCO) is genuinely jaw-dropping inside \u2014 mosaics, the marble throne, 1,200 years of history in one building. The old quarter around it is compact and walkable: grab printen cookies (local spiced gingerbread) and let the kids run in the Elisengarten park. Thermal baths (Carolus Thermen) are an option if someone wants a solo detour, but probably not with both kids in tow." },
  { title: "Han-sur-Lesse (BE)", tag: "Full day \u00b7 the memorable one",
    photo: "photos/han-sur-lesse.jpg", photoAlt: "Dramatic cave interior with stalactites and underground river",
    body: "The longest drive (~1.5 hours into the Belgian Ardennes) but the most dramatic payoff. A vintage tram takes you to the cave entrance, then a guided walk through massive underground chambers with an underground river, stalactites, and a light show finale. The 7-year-old will lose their mind; the 3-year-old will need carrying on some stairs. Above ground, there\u2019s a wildlife park with European bison and wolves. Pack lunch or eat at one of the village brasseries." },
  { title: "Drielandenpunt (Vaals)", tag: "Half day \u00b7 quirky",
    photo: "photos/drielandenpunt.jpg", photoAlt: "Panoramic view of rolling green hills at a border point",
    body: "The highest point in the Netherlands (a modest 322m) and the spot where NL, Belgium, and Germany meet. The kids can stand in three countries at once \u2014 there\u2019s a marker post and flags. Around it: a hedge maze, a playground, a panoramic observation tower (\u20ac5), and a few caf\u00e9s. It\u2019s not a full day, but it pairs well with a lunch stop in Vaals village or a drive through the rolling Limburg hills." },
  { title: "Antwerp (BE)", tag: "Full day \u00b7 big-city side trip",
    photo: "photos/antwerp.jpg", photoAlt: "Antwerp cathedral and historic city center",
    body: "About 1.5 hours north. A proper big city with a small-town feel \u2014 the Grote Markt is gorgeous, the cathedral holds multiple Rubens paintings, and the MAS museum rooftop has panoramic views (free to ride the escalators up). The zoo is right next to Centraal Station and works well for the kids. Diamond district, chocolate shops, and excellent frites stands throughout. Combine with a stroll along the Scheldt river promenade." },
  { title: "Brussels (BE)", tag: "Full day \u00b7 capital run",
    photo: "photos/brussels.jpg", photoAlt: "Brussels Grand Place square with ornate guild houses",
    body: "About 1 hour 40 minutes west. The Grand Place is one of Europe\u2019s most spectacular squares \u2014 worth the drive just for that. Let the 7-year-old find the Manneken Pis (it\u2019s smaller than expected). The Comic Strip Museum is a hidden gem for kids, and the Belgian Comic Strip Center has life-sized Tintin and Smurfs. Waffles from Maison Dandoy, chocolate from Pierre Marcolini. Parking is tricky \u2014 use the underground at Grand Place." },
  { title: "Cologne (DE)", tag: "Full day \u00b7 the cathedral city",
    photo: "photos/cologne.jpg", photoAlt: "Cologne Cathedral twin spires towering over the Rhine river",
    body: "About 1 hour 20 minutes northeast. The Dom (cathedral) is staggering in person \u2014 Gothic architecture at its most dramatic, and free to enter. Climb the 533 steps to the top if the 7-year-old is game. The Chocolate Museum on the Rhine has a chocolate fountain and factory tour the kids will love. Old town along the river is compact and walkable. Good bratwurst everywhere. Pair with a Rhine river cruise if you want to stretch the day." },
];

export const amsterdamOptions: ActivityOption[] = [
  { title: "Canal boat ride",      tag: "1 hour \u00b7 everyone happy",
    photo: "photos/canal-boat.jpg", photoAlt: "Amsterdam canal with boats and historic houses",
    body: "The single highest fun-per-effort activity in the city. Book a small open-boat tour (Those Dam Boat Guys or Flagship Amsterdam) rather than the big glass-top cruisers \u2014 kids can trail their hands in the water and you get better photos. One hour is the sweet spot. Late afternoon light is magic on the canals." },
  { title: "Rijksmuseum",          tag: "Half day \u00b7 art w/ kids",
    photo: "photos/rijksmuseum.jpg", photoAlt: "The Rijksmuseum facade with its reflecting pool",
    body: "Surprisingly workable with kids. Grab the free family treasure-hunt booklet at the desk \u2014 it turns the visit into a scavenger hunt through the galleries. Hit the Vermeers and the Night Watch, then let the 7-year-old lead. The garden and reflecting pool out front are good decompression. Plan 2\u20132.5 hours max and duck out before anyone melts down." },
  { title: "NEMO Science Museum",  tag: "Half day \u00b7 pure kid",
    photo: "photos/nemo.jpg", photoAlt: "NEMO Science Museum green copper building on Amsterdam waterfront",
    body: "A giant green ship-shaped building filled with hands-on experiments, water play, chain-reaction machines, and a rooftop splash pad with city views. The 3-year-old can do more here than you\u2019d expect. The 7-year-old won\u2019t want to leave. Skip the art museums entirely and come here instead if that\u2019s your family\u2019s speed. Caf\u00e9 on the top floor." },
  { title: "Vondelpark",           tag: "Flexible \u00b7 free",
    photo: "photos/vondelpark.jpg", photoAlt: "Leafy green paths and ponds in Vondelpark",
    body: "Amsterdam\u2019s big backyard. Rent bikes near the entrance or just stroller-walk the paths. There are six playgrounds scattered through the park, open-air caf\u00e9s (Groot Melkhuis is the family-friendly one), duck ponds, and a shallow wading pool in summer. Great as a morning warm-up or golden-hour wind-down. Free, no tickets, no lines." },
  { title: "Artis Zoo",            tag: "Half-to-full day",
    photo: "photos/artis.jpg", photoAlt: "Zoo animals in a lush green historic setting",
    body: "Europe\u2019s oldest zoo, right in the city center. Beautiful old-growth trees, a proper aquarium, a planetarium, and a microbe museum (Micropia) next door. The grounds themselves feel like a botanical garden. Works well paired with a walk through the leafy Plantage neighborhood afterward \u2014 caf\u00e9s on Plantage Middenlaan. Budget a full morning or afternoon." },
  { title: "Zaanse Schans",        tag: "Half day \u00b7 out of town",
    photo: "photos/zaanse-schans.jpg", photoAlt: "Dutch windmills along a river under dramatic skies",
    body: "20 minutes by train from Amsterdam Centraal, then a short walk to a postcard-perfect village of working windmills, clog-makers, and cheese farms. Go inside a windmill to see the gears turning. The 7-year-old will want clogs; the 3-year-old will want to feed the ducks. Free to walk around; small fees for individual windmill interiors. Arrive early to beat day-trippers." },
  { title: "Pannenkoeken dinner",  tag: "Evening \u00b7 ritual",
    photo: "photos/pancakes.jpg", photoAlt: "Golden Dutch pancake with toppings on a cast-iron pan",
    body: "Dutch pancakes are dinner-plate-sized, thinner than American, thicker than cr\u00eapes, and come loaded with sweet or savory toppings. The Pancake Bakery (Prinsengracht) is the classic tourist pick; Pancakes Amsterdam (multiple locations) is more modern. Either way, kids get to pick wild combinations and everyone leaves happy. Make it the first-night ritual." },
  { title: "Anne Frank House",     tag: "2 hours \u00b7 adults only",
    photo: "photos/anne-frank.jpg", photoAlt: "Amsterdam canal houses in the Jordaan neighborhood",
    body: "Tickets release online exactly 6 weeks before the visit date \u2014 set a calendar reminder and book the moment they drop, they sell out within hours. The museum is deeply moving but not appropriate for the 3-year-old and heavy for the 7-year-old. Best as a one-parent-at-a-time visit while the other takes the kids to Vondelpark or NEMO. Allow about 1.5\u20132 hours." },
];

export const limburgRentals: Rental[] = [
  { name: "Borgloon Castle",            url: "https://www.airbnb.com/rooms/1281740265852992133", desc: "Castle apartment in Gors Opleeuw. Shared heated pool, orangery. Rolling Haspengouw landscape, adjacent to Mombeek nature reserve." },
  { name: "Halte St. Gerlach",          url: "https://www.airbnb.co.in/rooms/32008268?source_impression_id=p3_1776086322_P3rm_a0ivOGpYn09", desc: "Converted 1903 train station near vineyards." },
  { name: "Oerthe Valley",              url: "https://www.vrbo.com/1678257ha?chkin=2026-06-21&chkout=2026-06-26&d1=2026-06-21&d2=2026-06-26&startDate=2026-06-21&endDate=2026-06-26&x_pwa=1&rfrr=HSR&pwa_ts=1776090464806&referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&useRewards=false&adults=4&children=1_17%2C1_17&regionId=6052089&destination=Limburg+Province%2C+Flemish+Region%2C+Belgium&destType=BOUNDING_BOX&latLong=50.973896%2C5.341968&bedroom_count_gt=3&property_reviews_group=loved_by_guests&searchId=234e4a51-2758-480a-b9f3-e6bf32224f11&sort=RECOMMENDED&top_dp=238&top_cur=USD&userIntent=&selectedRoomType=27197664&selectedRatePlan=000129d56e5abe2e449f8f888aaa4946fe65&expediaPropertyId=27197664", desc: "G\u00eete in the Ourthe valley. Refurbished on 3 levels, covered terrace w/ gas BBQ." },
  { name: "Schinnen House",             url: "https://www.airbnb.com/rooms/1455384250449715788", desc: "Luxury villa. Private bathrooms in every bedroom, heated spa bath, spacious terrace + green garden." },
  { name: "Burdinne Refuge",            url: "https://www.airbnb.com/rooms/42125862",            desc: "4BR/4BA g\u00eete. Heated in-ground pool, hammam, 3,300m\u00b2 garden. In the Burdinale-Mehaigne Natural Park." },
];

export const amsterdamRentals: Rental[] = [
  { name: "Oud-Zuid / Museumkwartier", url: "https://www.airbnb.com/s/Oud-Zuid--Amsterdam--Netherlands/homes", desc: "Walk to Vondelpark, Rijksmuseum, Van Gogh. Top pick." },
  { name: "Jordaan",                   url: "https://www.airbnb.com/s/Jordaan--Amsterdam--Netherlands/homes",  desc: "Canals, caf\u00e9s, charm. Pricier; apartments smaller." },
  { name: "De Pijp",                   url: "https://www.airbnb.com/s/De-Pijp--Amsterdam--Netherlands/homes",  desc: "Albert Cuyp market, Sarphatipark. Hip but livable." },
  { name: "Oost (Plantage/Artis)",     url: "https://www.airbnb.com/s/Oost--Amsterdam--Netherlands/homes",     desc: "Next to the zoo, leafy, great value." },
  { name: "Vrbo: Amsterdam",           url: "https://www.vrbo.com/vacation-rentals/europe/netherlands/amsterdam", desc: "Entire apartments, filter 2BR+ for families." },
];

export const nextSteps: NextStep[] = [
  { number: 1, title: "Lock the dates", desc: "Confirm Sun Jun 21 arrival, Mon Jun 29 departure. Book flights \u2014 prices climb after March for late June." },
  { number: 2, title: "Book the Borgloon house", desc: "Good properties book out fast. Target 6+ sleepers, pool or large garden, within 20 min of Borgloon." },
  { number: 3, title: "Book Amsterdam apartment", desc: "3 nights in Oud-Zuid or Oost. Prioritize elevator (strollers + Dutch stairs = no)." },
  { number: 4, title: "Reserve the rental car", desc: "Schiphol pickup Jun 21. Automatic transmission costs more in EU." },
];
