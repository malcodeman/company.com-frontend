import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormControl from "../components/FormControl";

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  width: 100%;
`;

const Textarea = styled.textarea`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  resize: vertical;
  min-height: 6rem;
`;

const Button = styled.button`
  background-color: #e81220;
  border: 0;
  height: 64px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-size: 2rem;
`;

function ContactForm(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required."),
    message: Yup.string()
      .required("Message is required.")
      .min(10, "Please enter a message with at least 10 characters in length."),
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: props.name || "",
      email: props.email || "",
      company: props.company || "",
      message: props.message || "",
    },
    onSubmit: () => {
      props.onSubmit && props.onSubmit(formik);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <FormControl
          label="Name"
          caption={formik.touched.name && formik.errors.name}
          error={Boolean(formik.errors.name && formik.touched.name)}
        >
          <Input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <FormControl
          label="Email"
          caption={formik.touched.email && formik.errors.email}
          error={Boolean(formik.errors.email && formik.touched.email)}
        >
          <Input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <FormControl
          label="Company"
          caption={formik.touched.company && formik.errors.company}
          error={Boolean(formik.errors.company && formik.touched.company)}
        >
          <Input
            type="text"
            name="company"
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <FormControl
          label="Message"
          caption={formik.touched.message && formik.errors.message}
          error={Boolean(formik.errors.message && formik.touched.message)}
        >
          <Textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
      </InputWrapper>
      <Button>Send</Button>
    </form>
  );
}

export default ContactForm;
