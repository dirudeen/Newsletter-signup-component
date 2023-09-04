import { useContext } from "react";
import iconSuccess from "../assets/images/icon-success.svg";
import ShowPageContext from "../context/ShowPage-context";


const SuccessfulSub = () => {
  const { dispatch, email } = useContext(ShowPageContext);
const dismisMessageHandler = () => {
  return dispatch({type: 'Done'})
}

  return (
    <section className="px-8 grid h-screen md:block md:h-auto md:p-8 md:w-[28rem]">
      <div className="mt-[8rem] md:mt-0">
        <div className="mb-6">
          <img src={iconSuccess} alt="success icon" />
        </div>
        <h1 className="text-clamp leading-[1.1] font-bold mb-4">Thanks for subscribing! </h1>
        <p className="mb-4">
          A confirmation email has been sent to
          <span className="font-bold"> {email}</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
      </div>
      <div className="flex items-end py-10 md:pb-0">
        <button className="text-center text-secondary-100 p-4 w-full bg-secondary-800 rounded-lg hover:bg-hoverClr" onClick={dismisMessageHandler}>
          Dismiss message
        </button>
      </div>
    </section>
  );
};

export default SuccessfulSub;
