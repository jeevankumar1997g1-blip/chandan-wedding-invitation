/**
 * Edit this file to launch or customize the site.
 * No other source files need content changes.
 */

export const site = {
  siteUrl: "https://jeevankumar1997g1-blip.github.io/chandan-wedding-invitation/",
  defaultTheme: "lotus",
  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],
  meta: {
    title: "Chandan & Harshitha — We're getting married",
    description:
      "Join the families of Chandan and Harshitha at Sri Nandini Palace, Kolar, on 4 November 2026. Reception, muhurtham, and all the details.",
  },
  couple: {
    partnerA: "Chandan",
    partnerB: "Harshitha",
  },
  hashtag: "#ChandanWedsHarshitha",
  weddingDateIso: "2026-11-04T09:30:00+05:30",
  displayDate: "4 November 2026",
  city: "Kolar, Karnataka",
  music: {
    src: "music/celebration.wav",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  hero: {
    kicker: "Together with their families",
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "With the blessings of Sri Channakeshava Swamy",
    heading: "Please bless the couple with your presence",
    paragraphs: [
      "Smt. Kantamma and Sri K. Devaraja (son of Smt. Ashwathamma and Sri Middoru Krishnappa) of K. Muttuthakadahalli, Tummanahalli Panchayath, Sidlaghatta Taluk, Chikkaballapur District, solicit your gracious presence with family and friends on the occasion of the marriage of their elder son, Chandan D., with Harshitha K.V., only daughter of Smt. G. Gowramma and Sri K.V. Venkata Swamy of Kadirenahalli, Tekal Panchayath, Malur Taluk, Kolar District.",
      "The muhurtham (wedding ceremony) will take place on Wednesday, 4 November 2026, between 9:30 AM and 10:30 AM, in the Dhanassu lagna, at Sri Nandini Palace, N.H.-75, Kumbarahalli, Tamaka, Kolar Taluk. We would be honoured to have you bless the couple as they begin their life together.",
    ],
    signOff: [
      "Yours, Smt. Kantamma and Sri K. Devaraja",
      "Chi. Aravind D.",
    ],
  },
  countdown: {
    heading: "Until the muhurtham",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    arrivedHeading: "The day is here",
    arrivedMessage: "The celebrations have begun. We cannot wait to see you.",
  },
  lineup: {
    eyebrow: "The celebrations",
    heading: "Event line-up",
    mapsLabel: "Open in Google Maps",
  },
  events: [
    {
      id: "reception",
      title: "Reception",
      date: "3 November 2026",
      time: "6:30 PM onwards",
      venue: "Sri Nandini Palace, Kumbarahalli, Tamaka, Kolar",
      note: "An evening of blessings and celebration with family and friends.",
      accent: "ruby",
      mapsUrl: "https://maps.app.goo.gl/o8pawrH7YYrntkud8",
    },
    {
      id: "wedding",
      title: "Muhurtham (Wedding)",
      date: "4 November 2026",
      time: "9:30 AM to 10:30 AM",
      venue: "Sri Nandini Palace, Kumbarahalli, Tamaka, Kolar",
      note: "The wedding ceremony in the Dhanassu lagna.",
      accent: "marigold",
      mapsUrl: "https://maps.app.goo.gl/o8pawrH7YYrntkud8",
    },
  ],
  venue: {
    eyebrow: "Find us",
    heading: "The wedding venue",
    name: "Sri Nandini Palace",
    addressLines: [
      "N.H.-75, Kumbarahalli",
      "Tamaka, Kolar Taluk",
      "Kolar District, Karnataka",
    ],
    directions:
      "Sri Nandini Palace is on National Highway 75 (N.H.-75) at Kumbarahalli, Tamaka, Kolar. Tap the button below to get directions in Google Maps.",
    mapsCta: "Open in Google Maps",
    mapsUrl: "https://maps.app.goo.gl/o8pawrH7YYrntkud8",
    loadMapLabel: "Load the map",
    mapTitle: "Map of Sri Nandini Palace, Kolar",
    embedUrl:
      "https://maps.google.com/maps?q=13.1352127,78.1887038&t=&z=16&ie=UTF8&iwloc=&output=embed",
    facadeCaption: "Tap to load Google Maps. The map is not loaded until you ask, so the page stays light.",
  },
  gallery: {
    eyebrow: "A few frames",
    heading: "From our story so far",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
    photos: [
      {
        src: "photos/1.jpeg",
        alt: "",
        width: 1280,
        height: 853,
      },
      {
        src: "photos/2.jpeg",
        alt: "",
        width: 853,
        height: 1280,
      },
      {
        src: "photos/3.jpeg",
        alt: "",
        width: 1165,
        height: 776,
      },
    ],
  },
  footer: {
    closing: "We cannot wait to celebrate with you.",
    crafted: "With love, from our families.",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "countdown", label: "When" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Photos" },
];

export default site;
