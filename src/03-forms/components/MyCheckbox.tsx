import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any; //Es como un comodin que nos permite recibir mas propiedades
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  /* const [field, meta] = useField({ ...props, type: "checkbox" }); */
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      {/* {
        //Errores
        meta.touched && meta.error && (
          <span className="error">{meta.error} </span>
        )
      } */}
      <ErrorMessage /* Es lo mismo que usar el meta touch y error */
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />
    </>
  );
};
