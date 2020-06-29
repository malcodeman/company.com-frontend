import { NEXT_PUBLIC_STRAPI_API_URL } from "./constants";

async function getTestimonials() {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/testimonials`);
  const json = await res.json();

  return json;
}

async function getEmployees() {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/employees`);
  const json = await res.json();

  return json;
}

export { getTestimonials, getEmployees };
