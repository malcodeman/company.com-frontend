import { getTestimonials } from "../lib/api";

function Testimonials(props) {
  const { testimonials } = props;

  return (
    <div>
      <h1>Testimonials</h1>
      {testimonials.map((item) => {
        return <div id={item.id}>{item.text} </div>;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const testimonials = (await getTestimonials()) || [];

  return {
    props: { testimonials },
  };
}

export default Testimonials;
