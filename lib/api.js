async function getTestimonials() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/testimonials`
  );
  const json = await res.json();

  return json;
}

export { getTestimonials };
