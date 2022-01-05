import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          /* Ahora aqyi estaran las validaciones */
          firstName: Yup.string()
            .max(15, "Debe tener como maximo 15 caracteres")
            .required("Requirido"),
          lastName: Yup.string()
            .max(10, "Debe tener como maximo 10 caracteres")
            .required("Requirido"),
          email: Yup.string().email("Email invalido").required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Momentaneamente no esta permitido")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            {/* Form ya no tendra onSubmit porque Formik Form ya lo sabe */}
            <label htmlFor="firstName">First Name</label>
            {/* El Fiel reemplazará al input */}
            <Field name="firstName" type="text" placeholder="First Name" />
            {/* ErrorMessage ya tendra la logica del errro y le decimos 
            que tipo de etiqueta queremos que sea. En este caso "span" */}
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT senior</option>
              <option value="it-jr">IT jr</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
