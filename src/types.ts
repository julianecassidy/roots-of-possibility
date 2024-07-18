export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
};

export type SocialObject = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
};

export type SocialMedia =
  | "Psychology Today"
  | "Therapy Den"
  | "Mental Health Match"
  | "Instagram";

export type Post = {
  id: number;
  title: string;
  permalink: string;
  content: string;
  date: string;
  canonical: string;
  tags: Array<Tag>
};

export type Tag = {
  id: number;
  name: string;
};

export type TitleStyles = {
  text: string;
  style: string;
};

export type Service = {
  imagePath: string;
  altText: string;
  title: string;
  description: string;
  buttonLink: string;
}

export interface Card extends Service {
  bgColor: "bg-base-100" | "bg-secondary" | "bg-accent" | "bg-[#D0D7C4]";
  textColor: "text-neutral" | "text-base-100";
  buttonColor: "primary" | "secondary";
  buttonText: "Learn More" | "Get Resource";
}