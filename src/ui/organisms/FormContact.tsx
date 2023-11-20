"use client";

import { useState } from "react";
import AnimationSuccess from "../atoms/AnimationSuccess";
import InputEmail from "../atoms/InputEmail";

const FormContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | boolean>(null);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validationInfo, setValidationInfo] = useState<null | string>(null);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    if (!message.length || !email.length) {
      setValidationInfo("Uzupełnij wszystkie pola");
      setLoading(false);
      return;
    }
    const formData = new FormData(event.target);

    formData.append("access_key", "740199fc-b464-4353-9bc1-e9f1d872b45a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    if (result.success) {
      setLoading(false);
      setSuccess(true);
    } else {
      setLoading(false);
      setError("Coś poszło nie tak. Nie udało się wysłać wiadomości.");
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-8 lg:w-4/6 max-w-[600px] justify-between relative"
        onSubmit={handleSubmit}
      >
        <InputEmail setEmail={setEmail} email={email} />
        <div className="flex flex-col justify-end h-full]">
          <label htmlFor="message" className="mb-2">
            Wiadomość:
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-white opacity-80 rounded-none h-full text-dark-primary p-1 pb-16 min-h-[300px]"
            onChange={(e: any) => setMessage(e.target.value)}
          ></textarea>
          <div className="w-full flex justify-end relative">
            {!loading && !error && !success && (
              <button
                type="submit"
                className="bg-dark-primary text-white h-9 hover:opacity-80 w-24 rounded-sm absolute bottom-2 right-2"
              >
                Wyślij
              </button>
            )}
            {loading && (
              <button
                type="submit"
                disabled
                className="bg-slate-500 text-white h-9 hover:opacity-80 w-24 rounded-sm absolute bottom-2 right-2"
              >
                Wyślij
              </button>
            )}
          </div>
          {success && (
            <div className="bg-white text-dark-primary w-full h-full flex flex-col gap-4 justify-center items-center rounded-sm absolute top-0 left-0">
              <AnimationSuccess />
              <p className="w-full text-center text-lg ">
                Dziękujemy. Otrzymaliśmy Twoją wiadomość. Odpowiemy wkrótce.
              </p>
            </div>
          )}

          {error && (
            <div className="bg-white text-dark-primary w-full h-full flex flex-col gap-4 justify-center items-center rounded-sm absolute top-0 left-0">
              <div className="w-3/4 p-2 border-red-700 border-[1px] text-center text-lg text-red-700">
                <p>Coś poszło nie tak. Nie udało się wysłać wiadomości.</p>
              </div>
            </div>
          )}
        </div>
        {validationInfo && (
          <div className="absolute -bottom-8 w-full text-center ">
            {validationInfo}
          </div>
        )}
      </form>
    </>
  );
};

export default FormContact;
