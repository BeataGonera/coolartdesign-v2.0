const FormContact = () => {
  return (
    <form className="flex flex-col gap-8 lg:w-4/6 max-w-[600px] justify-between">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Twój adres email:</label>
        <input
          id="email"
          className="bg-white opacity-80 rounded-none h-12 text-dark-primary p-1"
        ></input>
      </div>
      <div className="flex flex-col justify-end h-full">
        <label htmlFor="message" className="mb-2">
          Wiadomość:
        </label>
        <textarea
          id="message"
          className="bg-white opacity-80 rounded-none h-full text-dark-primary p-1 pb-16"
        ></textarea>
        <div className="w-full flex justify-end relative">
          <button
            type="submit"
            className="bg-dark-primary text-white h-9 hover:opacity-80 w-24 rounded-sm absolute bottom-2 right-2"
          >
            Wyślij
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormContact;
