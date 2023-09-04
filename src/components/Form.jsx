import { useCallback, useState, useContext } from "react";
import ShowPageContext from "../context/ShowPage-context";

const Form = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const { dispatch } = useContext(ShowPageContext);

  let isValid = enteredEmail.trim().includes("@");

  const inputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const inputBlurHandler = useCallback(() => {
    setIsTouched(true);
  }, []);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }
    console.log("working");
    dispatch({ type: "Success" });

    setIsTouched(false);
    setEnteredEmail("");
  };

  const errorClass =
    isTouched && !isValid
      ? " border-red-400 bg-red-100 placeholder:text-red-400"
      : " border-slate-400 focus:border-slate-600 focus:border-[1.5px]";

  return (
    <form onSubmit={submitFormHandler}className="mb-10 md:mb-0">
      <div className=" mb-6">
        <div className="flex justify-between mb-2">
          <label htmlFor="email" className="font-bold text-sm">
            Email address
          </label>
          {isTouched && !isValid && (
            <p className="text-primary-400 text-sm font-bold">
              Valid Email required
            </p>
          )}
        </div>
        <input
          className={`w-full outline-none rounded-lg p-4 border ${errorClass}`}
          type="email"
          id="email"
          value={enteredEmail}
          placeholder="email@company.com"
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
        />
      </div>
      <button className="w-full text-center text-secondary-100 p-4 bg-secondary-800 rounded-lg hover:bg-hoverClr ">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
