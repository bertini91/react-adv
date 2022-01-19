import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

const RegisterFormikPage = () => {
  /*  name: "Nicolas Bertini",
    email: "alguNuevo@algoNuevo.com",
    password1: "",
    password2: "", */

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "Nicolas Bertini",
          email: "alguNuevo@algoNuevo.com",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe ser de mas de 2 caracteres")
            .max(2, "El nombre debe al menos 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("El email NO es válido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Minimo 6 letras")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Nombre"
              name="name"
              placeholder="Nicolas Bertini"
            />
            <MyTextInput
              label="email"
              name="email"
              placeholder="NicolasBertini@hotmail.com"
              type="email"
            />
            <MyTextInput
              label="password"
              name="password1"
              placeholder="******"
            />
            <MyTextInput
              label="confirPassword"
              name="password2"
              placeholder="******"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
