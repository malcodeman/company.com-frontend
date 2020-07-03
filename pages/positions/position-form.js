import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import FormControl from "../../components/FormControl";
import { Input, SIZE as inputSize } from "../../components/input";
import { Button } from "../../components/button";

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

function PositionForm(props) {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    position: Yup.string().required(t("Position is required.")),
    firstName: Yup.string().required(t("First name is required.")),
    lastName: Yup.string().required(t("Last name is required.")),
    email: Yup.string()
      .email(t("Email is invalid."))
      .required(t("Email is required.")),
    age: Yup.number().required(t("Age is required.")),
    portfolio: Yup.string().url(t("URL is invalid.")),
    cvLink: Yup.string()
      .required(t("CV Link is required"))
      .url(t("URL is invalid.")),
    linkedin: Yup.string().url(t("URL is invalid.")),
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      position: props.position || "",
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      email: props.email || "",
      age: props.age || "",
      phone: props.phone || "",
      portfolio: props.portfolio || "",
      salary: props.salary || "",
      cvLink: props.cvLink || "",
      linkedin: props.linkedin || "",
    },
    onSubmit: () => {
      props.onSubmit && props.onSubmit(formik);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <FormControl
          label={t("First Name")}
          caption={formik.touched.firstName && formik.errors.firstName}
          error={Boolean(formik.errors.firstName && formik.touched.firstName)}
        >
          <Input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
        <FormControl
          label={t("Last Name")}
          caption={formik.touched.lastName && formik.errors.lastName}
          error={Boolean(formik.errors.lastName && formik.touched.lastName)}
        >
          <Input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
        <FormControl
          label={t("Email")}
          caption={formik.touched.email && formik.errors.email}
          error={Boolean(formik.errors.email && formik.touched.email)}
        >
          <Input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
        <FormControl
          label={t("Age")}
          caption={formik.touched.age && formik.errors.age}
          error={Boolean(formik.errors.age && formik.touched.age)}
        >
          <Input
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
        <FormControl
          label={t("Phone")}
          caption={formik.touched.phone && formik.errors.phone}
          error={Boolean(formik.errors.phone && formik.touched.phone)}
        >
          <Input
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
        <FormControl
          label={t("Portfolio URL")}
          caption={formik.touched.portfolio && formik.errors.portfolio}
          error={Boolean(formik.errors.portfolio && formik.touched.portfolio)}
        >
          <Input
            type="text"
            name="portfolio"
            value={formik.values.portfolio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
        <FormControl
          label={t("Expected salary")}
          caption={formik.touched.salary && formik.errors.salary}
          error={Boolean(formik.errors.salary && formik.touched.salary)}
        >
          <Input
            type="text"
            name="salary"
            value={formik.values.salary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
        <FormControl
          label={t("CV Link")}
          caption={formik.touched.cvLink && formik.errors.cvLink}
          error={Boolean(formik.errors.cvLink && formik.touched.cvLink)}
        >
          <Input
            type="text"
            name="cvLink"
            value={formik.values.cvLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
        <FormControl
          label={t("Linkedin profile")}
          caption={formik.touched.linkedin && formik.errors.linkedin}
          error={Boolean(formik.errors.linkedin && formik.touched.linkedin)}
        >
          <Input
            type="text"
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size={inputSize.large}
          />
        </FormControl>
      </InputWrapper>
      <StyledButton>{t("Submit Application")}</StyledButton>
    </form>
  );
}

export default PositionForm;
