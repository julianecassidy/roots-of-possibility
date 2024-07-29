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
    href: "https://www.instagram.com/rootsofpossibility/",
    linkTitle: `Roots of Possibility on Instagram`,
    active: true,
};

export const LINKEDIN: SocialObject = {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/roots-of-possibility-pllc/",
    linkTitle: `Roots of Possibility on LinkedIn`,
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
  description: "In-person, animal-assisted, and online (teletherapy) for children 6 and up.",
  buttonLink: "/services/children",
  imagePath: "/flowers/flax.jpg",
  altText: "drawn blue flax",
};

const ADOLESCENTS: Service = {
  title: "Therapy for Adolescents",
  description: "In-person, animal-assisted, and teletherapy for ages 10-18",
  buttonLink: "/services/adolescents",
  imagePath: "/flowers/narcissus.jpg",
  altText: "drawn yellow narcissus",
};

const YOUNG_ADULTS: Service = {
  title: "Therapy for Young Adults",
  description: "In-person, animal-assisted, and telehealth therapy for those 19 to 30 years old.",
  buttonLink: "/services/young-adults",
  imagePath: "/flowers/peony-pink.jpg",
  altText: "drawn pink peony",
};

const TRAUMA: Service = {
  title: "Therapy for Trauma",
  description: "Specialized services for those looking to process and recover from past or recent trauma.",
  buttonLink: "/services/trauma",
  imagePath: "/flowers/peony-red.jpg",
  altText: "drawn red peony",
};

const SELF_HARM: Service = {
  title: "Therapy for Self Harm",
  description: "Experienced care for anyone struggling with self-injury and other self-destructive behaviors.",
  buttonLink: "/services/self-harm",
  imagePath: "/flowers/rose-yellow.jpg",
  altText: "drawn yellow rose",
};

const ATTACHMENT: Service = {
  title: "Therapy for Attachment",
  description: "Focused intervention and support for early-life and childhood attachment concerns, including related trauma, mood disturbances, or behavioral struggles.",
  buttonLink: "/services/attachment",
  imagePath: "/flowers/tropic-purple.jpg",
  altText: "drawn puprle tropical flowers",
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
  imagePath: "/flowers/peony-red.jpg",
  altText: "drawn red peony",
};

const SELF_HARM_RESOURCES: Service = {
  title: "Information for Parents about Self-Harm",
  description: "From the Cornell Research Program on Self-Injury and Recovery",
  buttonLink: "https://www.selfinjury.bctr.cornell.edu/perch/resources/parenting-2.pdf",
  imagePath: "/flowers/rose-yellow.jpg",
  altText: "drawn yellow rose",
};

const SUICIDE_HOME_SAFETY: Service = {
  title: "Home Safety Tips for Suicide Prevention",
  description: "",
  buttonLink: "/resources/HomeSafetySuicidePrevention.pdf",
  imagePath: "/flowers/flax.jpg",
  altText: "drawn blue flax",
};

const EATING_DISORDER_RESOURCES: Service = {
  title: "Eating Disorder Resources for Family Members",
  description: "From the Renfrew Center",
  buttonLink: "https://renfrewcenter.com/8-essential-eating-disorder-resources-for-family-members/",
  imagePath: "/flowers/orchids.jpg",
  altText: "drawn blue and yellow orchids",
};

const SCHOOL_REFUSAL: Service = {
  title: "Do’s and Don’ts for Parents and Guardians: School Refusal",
  description: "From the School Avoidance Alliancer",
  buttonLink: "https://schoolavoidance.org/advice-from-a-fellow-school-refusal-parent-on-how-to-help-them-get-back-to-school/",
  imagePath: "/flowers/iris-yellow.jpg",
  altText: "drawn yellow iris",
};

export const RESOURCES = [
  CRISIS_RESOURCES,
  SELF_HARM_RESOURCES,
  SUICIDE_HOME_SAFETY,
  EATING_DISORDER_RESOURCES,
  SCHOOL_REFUSAL,
]