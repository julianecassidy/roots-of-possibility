import type { Site, SocialObject } from "./types";

export const SITE: Site = {
  website: "https://rootsofpossibility.com", // replace this with your deployed domain
  author: "Julia Kuttler, MSW, LCSW",
  desc: "Collaborative, client-centerd therapy for children adolescents, and their families.",
  title: "Poots of Possibilty | Julia Kuttler",
  ogImage: "https://julianecassidy.com/headshot.jpg",
  lightAndDarkMode: false,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 141,
  height: 78,
};

export const PSYCHOLOGYTODAY: SocialObject = {
    name: "Psychology Today",
    href: "https://www.psychologytoday.com/us/therapists/julia-kuttler-boulder-co/1293002",
    linkTitle: `Julia on Psychology Today`,
    active: true,
}

export const THERAPYDEN: SocialObject = {
    name: "Therapy Den",
    href: "https://www.therapyden.com/therapist/julia-kuttler",
    linkTitle: `Julia on Therapy Den`,
    active: true,
}

export const MENTALHEALTHMATCH: SocialObject = {
    name: "Mental Health Match",
    href: "https://mentalhealthmatch.com/therapist/viewprofile",
    linkTitle: `Julia on Mental Health Match`,
    active: false,
}