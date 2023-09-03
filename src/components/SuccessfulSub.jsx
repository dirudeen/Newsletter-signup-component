import { useContext } from "react";
import iconSuccess from "../assets/images/icon-success.svg";
import Context from "../context/context";


const SuccessfulSub = () => {
  const { dispatch } = useContext(Context);
const dismisMessageHandler = () => {
  return dispatch({type: 'Done'})
}

  return (
    <section className="px-8 border border-slate-600 grid h-screen">
      <div className="mt-[8rem]">
        <div className="mb-6">
          <img src={iconSuccess} alt="success icon" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Thanks for subscribing! </h1>
        <p className="mb-4">
          A confirmation email has been sent to
          <span className="font-bold"> ash@loremcompany.com</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
      </div>
      <div className="flex items-end py-10">
        <button className="text-center text-secondary-100 p-4 w-full bg-secondary-800 rounded-lg hover:bg-hoverClr" onClick={dismisMessageHandler}>
          Dismiss message
        </button>
      </div>
    </section>
  );
};

export default SuccessfulSub;
