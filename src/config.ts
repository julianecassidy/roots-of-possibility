import type { Site, SocialObject, Service } from "./types";

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
};

export const INSTAGRAM: SocialObject = {
    name: "Instagram",
    href: "https://www.psychologytoday.com/us/therapists/julia-kuttler-boulder-co/1293002",
    linkTitle: `Julia on Instagram`,
    active: true,
};

export const THERAPYDEN: SocialObject = {
    name: "Therapy Den",
    href: "https://www.therapyden.com/therapist/julia-kuttler",
    linkTitle: `Julia on Therapy Den`,
    active: true,
};

export const MENTALHEALTHMATCH: SocialObject = {
    name: "Mental Health Match",
    href: "https://mentalhealthmatch.com/therapist/viewprofile",
    linkTitle: `Julia on Mental Health Match`,
    active: false,
};

const CHILDREN: Service = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const ADOLESCENTS: Service = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const YOUNG_ADULTS: Service = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const TRAUMA: Service = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const SELF_HARM: Service = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const ATTACHMENT: Service = {
  title: "Therapy for Children",
  description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  buttonLink: "/children",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

export const SERVICES = [
  CHILDREN,
  ADOLESCENTS,
  YOUNG_ADULTS,
  TRAUMA,
  SELF_HARM,
  ATTACHMENT,
];

const CRISIS_RESOURCES: Service = {
  title: "Crisis Resources",
  description: "For you to keep on hand and consult as needed - in case of emergency, please call 911",
  buttonLink: "/resources/Emergency-Resource-List.pdf",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const SELF_HARM_RESOURCES: Service = {
  title: "Information for Parents about Self-Harm",
  description: "From the Cornell Research Program on Self-Injury and Recovery",
  buttonLink: "https://www.selfinjury.bctr.cornell.edu/perch/resources/parenting-2.pdf",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const SUICIDE_HOME_SAFETY: Service = {
  title: "Home Safety Tips for Suicide Prevention",
  description: "",
  buttonLink: "/resources/HomeSafetySuicidePrevention.pdf",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const EATING_DISORDER_RESOURCES: Service = {
  title: "Eating Disorder Resources for Family Members",
  description: "From the Renfrew Center",
  buttonLink: "https://renfrewcenter.com/8-essential-eating-disorder-resources-for-family-members/",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

const SCHOOL_REFUSAL: Service = {
  title: "Do’s and Don’ts for Parents and Guardians: School Refusal",
  description: "From the School Avoidance Alliancer",
  buttonLink: "https://schoolavoidance.org/advice-from-a-fellow-school-refusal-parent-on-how-to-help-them-get-back-to-school/",
  imagePath: "/indy.jpg",
  altText: "drawn red rose",
};

export const RESOURCES = [
  CRISIS_RESOURCES,
  SELF_HARM_RESOURCES,
  SUICIDE_HOME_SAFETY,
  EATING_DISORDER_RESOURCES,
  SCHOOL_REFUSAL,
]