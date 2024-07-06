import type { Site, SocialObject, ServiceCard } from "./types";

export const SITE: Site = {
  website: "https://rootsofpossibility.com", // replace this with your deployed domain
  author: "Julia Kuttler, MSW, LCSW",
  desc: "Collaborative, client-centerd therapy for children adolescents, and their families.",
  title: "Poots of Possibilty | Julia Kuttler",
  ogImage: "https://rootsofpossibility.com/headshot.png",
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

export const INSTAGRAM: SocialObject = {
    name: "Instagram",
    href: "https://www.psychologytoday.com/us/therapists/julia-kuttler-boulder-co/1293002",
    linkTitle: `Julia on Instagram`,
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

const CHILDREN: ServiceCard = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
}

const ADOLESCENTS: ServiceCard = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
}

const YOUNG_ADULTS: ServiceCard = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
}

const TRAUMA: ServiceCard = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
}

const SELF_HARM: ServiceCard = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
}

const ATTACHMENT: ServiceCard = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
}

export const SERVICES = [
  CHILDREN,
  ADOLESCENTS,
  YOUNG_ADULTS,
  TRAUMA,
  SELF_HARM,
  ATTACHMENT,
];