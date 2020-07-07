import { nanoid } from "nanoid";

const NEXT_PUBLIC_STRAPI_API_URL = "http://3.249.33.147:1337";
const EMPLOYE_LINKS = {
  linkedin: "linkedin",
  twitter: "twitter",
  facebook: "facebook",
  github: "github",
};
const BREAKPOINTS = {
  SMALL_DEVICES: "576px",
  MEDIUM_DEVICES: "768px",
  LARGE_DEVICES: "992px",
  EXTRA_LARGE_DEVICES: "1200px",
};
const LAMBDA_API_URL = "https://fwjitkr0o4.execute-api.eu-west-1.amazonaws.com";
const HEADER_NAVIGATION = [
  {
    id: nanoid(),
    label: "MOP",
    link: "/",
  },
  {
    id: nanoid(),
    label: "About Us",
    link: "/about",
  },
  {
    id: nanoid(),
    label: "Products",
    link: "/products",
  },
  {
    id: nanoid(),
    label: "Testimonials",
    link: "/testimonials",
  },
  {
    id: nanoid(),
    label: "Team",
    link: "/team",
  },
  {
    id: nanoid(),
    label: "Blog",
    link: "/blog",
  },
  {
    id: nanoid(),
    label: "Careers",
    link: "/careers",
  },
  {
    id: nanoid(),
    label: "Open Positions",
    link: "/positions",
  },
  {
    id: nanoid(),
    label: "Contact Us",
    link: "/contact",
  },
];
const FOOTER_NAVIGATION = [
  {
    id: nanoid(),
    label: "MOP",
    link: "/",
  },
  {
    id: nanoid(),
    label: "Team",
    link: "/team",
  },
  {
    id: nanoid(),
    label: "Products",
    link: "/products",
  },
  {
    id: nanoid(),
    label: "Careers",
    link: "/careers",
  },
  {
    id: nanoid(),
    label: "Blog",
    link: "/blog",
  },
  {
    id: nanoid(),
    label: "Contact Us",
    link: "/contact",
  },
  {
    id: nanoid(),
    label: "Privacy Policy",
    link: "/policy",
  },
];
const MOBILE_NAVIGATION = [
  ...HEADER_NAVIGATION,
  {
    id: nanoid(),
    label: "Privacy Policy",
    link: "/policy",
  },
];
const LANGUAGES = {
  english: {
    label: "English",
    code: "en",
  },
  swedish: {
    label: "Svenska",
    code: "sw",
  },
  bosnian: {
    label: "Bosanski",
    code: "bs",
  },
};

export {
  NEXT_PUBLIC_STRAPI_API_URL,
  EMPLOYE_LINKS,
  BREAKPOINTS,
  LAMBDA_API_URL,
  HEADER_NAVIGATION,
  FOOTER_NAVIGATION,
  MOBILE_NAVIGATION,
  LANGUAGES,
};
