import { ChangeEvent, useState } from "react";

//T hace referencia que será un hook generico.
//Lo hacemos generico asi el formulario puede tener propiedades variadas
export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //prev tendrá los valores anteriores
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initState });
  };

  //isValidEmail es una expresion regular para validar el email
  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  //...formData hará que se destructuren las propiedades
  return { ...formData, formData, onChange, resetForm, isValidEmail };
};
