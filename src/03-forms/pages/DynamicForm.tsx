import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";
console.log(formJson);

//Formik te pide que debe haber un initialValue.
//Es por eso que creamos un initial value vacio
const initialValue: { [key: string]: any } = {};

//ahora debemos sacar las validaciones que tendran los elementos del JSON
//Como es el caso del "required"
const requiredFields: { [key: string]: any } = {};

//Con este form le asignamos la estructura que tendrá
//el initialValue y validaciones que debe tener
for (const input of formJson) {
  initialValue[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string(); //Declaramos el esquema

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 1,
        `Mínimo de ${(rule as any).value || 2} caracteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Este campo no cumple el formato permitido");
    }

    requiredFields[input.name] = schema;
  }
  console.log("hgola");
}

const validationSchema = Yup.object({ ...requiredFields });

const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema} //Validamos el esquema del JSON
        onSubmit={(value) => console.log(value)}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              return new Error(`El type: ${type}, NO es soportado`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
