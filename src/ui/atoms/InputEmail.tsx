import { FC } from "react";
type InputEmailProps = {
  setEmail: (email: string) => void;
  email: string;
};

const InputEmail: FC<InputEmailProps> = ({ setEmail }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={"email"}>Twój adres email</label>
      <input
        id="email"
        name="email"
        className={
          "bg-white opacity-80 rounded-none h-12 text-dark-primary p-1"
        }
        onChange={(e: any) => setEmail(e.target.value)}
      ></input>
    </div>
  );
};

export default InputEmail;
