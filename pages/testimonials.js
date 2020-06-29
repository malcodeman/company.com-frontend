import { getTestimonials } from "../lib/api";
import Layout from "../components/Layout";

function Testimonials(props) {
  const { testimonials } = props;

  return (
    <Layout>
      <h1>Testimonials</h1>
      {testimonials.map((item) => {
        return <div key={item.id}>{item.text}</div>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const testimonials = (await getTestimonials()) || [];

  return {
    props: { testimonials },
  };
}

export default Testimonials;
