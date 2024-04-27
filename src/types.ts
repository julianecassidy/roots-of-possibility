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
  | "Mental Health Match";

export type Post = {
  id: number;
  title: string;
  permalink: string;
  content: string;
  date: string;
  canonical: string;
  tags: Array<Tag>
}

export type Tag = {
  id: number;
  name: string;
}