// All copy, links and placeholders for the site live here.
// Copy is temporary: edit the strings below to change the site text.

export const product = {
  name: "InterLayer",
  // Shown in the browser tab and search results.
  title: "InterLayer — Your workspace, wherever you go.",
  description: "A touch control layer for your Mac. Use your iPad as a touch panel with Sidecar.",
  // App icon (public/icon.png). Header, Download section and browser tab.
  icon: "/icon.png",
};

// "coming-soon": the Download buttons show Coming Soon and link nowhere.
// "available":   the Download buttons link to `url`.
export const download = {
  status: "coming-soon",
  url: "",
  label: "Download Beta",
  comingSoonLabel: "Coming Soon",
  platform: "Beta for macOS",
  // System Requirements, shown under the Download button.
  requirements: {
    heading: "System Requirements",
    items: [
      "Mac with Apple Silicon (M1 or later)",
      "macOS 26 or later",
      "macOS 27 or later for direct touchscreen use on supported Macs",
      "iPad with Sidecar support for touch-panel use",
    ],
    note: "InterLayer also works with a mouse or trackpad. An iPad is not required.",
  },
};

// Media: put files in /public/media/ and set `src` (e.g. "/media/hero.mp4").
// Supported: .mp4 / .webm (looping, muted video) and .gif / .png / .jpg / .webp / .svg.
// Leave `src` empty to show a grey placeholder with the label.
export const home = {
  hero: {
    eyebrow: "InterLayer",
    heading: "Your workspace, wherever you go.",
    lead: "A touch control layer for your Mac. Place buttons and dials on screen and send shortcuts to the app you are working in.",
    media: { src: "/media/il_lp_hero.png", alt: "InterLayer running on a Mac and an iPad", label: "Hero image / video — Mac + iPad", ratio: "16 / 9" },
  },
  sidecar: {
    heading: "Your iPad, as a touch panel.",
    lead: "Connect your iPad with Sidecar and control the app on your Mac by touch. A mouse works too.",
    media: { src: "/media/il_lp1.png", alt: "InterLayer on an iPad next to a Mac", label: "Sidecar image — iPad as a touch panel", ratio: "16 / 9" },
  },
  anywhere: {
    heading: "Right where you need it.",
    lead: "No iPad needed. Bring up your controls anywhere on your Mac, right where your cursor is.",
    media: { src: "/media/il_lp2.png", alt: "InterLayer controls shown at the cursor on a Mac", label: "Image — controls at the cursor on a Mac", ratio: "16 / 9" },
  },
  useCases: {
    heading: "Built for the way you work.",
    items: [
      {
        title: "Shortcuts",
        text: "Send the shortcuts you use most with a single touch.",
        media: { src: "/media/il_lp3.png", alt: "Shortcut buttons", label: "Use case image — Shortcuts", ratio: "4 / 3" },
      },
      {
        title: "Media",
        text: "Play, pause and change the volume without leaving your work.",
        media: { src: "/media/il_lp4.png", alt: "Media controls", label: "Use case image — Media", ratio: "4 / 3" },
      },
      {
        title: "Creative tools",
        text: "Keep the controls of your creative apps on a panel at hand.",
        media: { src: "/media/il_lp5.png", alt: "Controls for a creative app", label: "Use case image — Creative tools", ratio: "4 / 3" },
      },
    ],
  },
  studio: {
    heading: "Make it yours.",
    lead: "Arrange parts, assign commands and change the look in Studio.",
    media: { src: "/media/il_lp6.png", alt: "InterLayer Studio", label: "Studio screenshot", ratio: "1661 / 1013" },
  },
  download: {
    heading: "InterLayer for macOS",
  },
};

export const company = {
  name: "OPERON DESIGN LAB LLC",
  tagline: "Software, interaction and input-device development.",
  products: [
    { name: "InterLayer", href: "/" },
    { name: "PitsBoard", href: "" }, // add a URL when there is one
  ],
  details: [
    { label: "Address", value: "AKASAKA FRONT TOWN 3F., 4-8-19, AKASAKA, MINATO-KU, TOKYO" },
    { label: "Founded", value: "2026" },
  ],
  contact: {
    // Set `email` to show a mailto link; until then the placeholder text is shown.
    email: "contact@operondesign.com",
    placeholder: "[Contact email]",
  },
};

export const footer = {
  copyright: "© OPERON DESIGN LAB",
};
