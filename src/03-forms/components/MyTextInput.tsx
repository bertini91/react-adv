import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any; //Es como un comodin que nos permite recibir mas propiedades
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props); //Es un hooks que espera los props
  //console.log(field); //field = {name: 'firstName', value: '', onChange: ƒ, onBlur: ƒ}

  return (
    <>
      <label htmlFor={props.id || props.name}>{label} </label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage /* Es lo mismo que usar el meta touch y error */
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />
    </>
  );
};
