
import { useState } from "react";
import { DefaultInput } from "~/components/elements/Input";
import { AuthForm } from "~/components/fragments/Form";


export default function authLogin() {
  const [inputValue, setInputValue] = useState("hello");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <AuthForm onSubmit={handleSubmit}>
        <div className="mt-4">
          <DefaultInput type="email" required={true} onChange={handleInputChange} placeholder="example@gmail.com">Email</DefaultInput>
        </div>
        <div className="mt-4">
          <DefaultInput type="password" required={true} onChange={handleInputChange} placeholder="********">Email</DefaultInput>
        </div>
      </AuthForm>
    </div>
  )
}

