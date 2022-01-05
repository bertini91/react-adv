import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";


export const FormikYupPage = () => {
  //El initialValues te pide si o si formik para inicializar useFormik
  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      /* Ahora aqyi estaran las validaciones */
      firstName: Yup.string()
        .max(15, "Debe tener como maximo 15 caracteres")
        .required("Requirido"),
      lastName: Yup.string()
        .max(10, "Debe tener como maximo 10 caracteres")
        .required("Requirido"),
      email: Yup.string().email("Email invalido").required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          //reconoce la variable firstName por el initialValue
          //ya no hace falta tener name porque la funcion de Yup getFielProps
          //le estamos enviando el name y ya no hace falta el onChange ni el onBlur
          {...getFieldProps("firstName")}
        />
        {/* Si fue tocado y hay un error en firsName, mostrame el mensaje */}
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
