import { NEXT_PUBLIC_STRAPI_API_URL, LAMBDA_API_URL } from "./constants";

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

async function getProducts() {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/products`);
  const json = await res.json();

  return json;
}

async function getPositions() {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/positions`);
  const json = await res.json();

  return json;
}

async function getPosition(id) {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/positions/${id}`);
  const json = await res.json();

  return json;
}

async function getInstagramImages() {
  const res = await fetch(`${LAMBDA_API_URL}/dev/instagram`);
  const json = await res.json();

  return json;
}

export {
  getTestimonials,
  getEmployees,
  getProducts,
  getPositions,
  getPosition,
  getInstagramImages,
};
