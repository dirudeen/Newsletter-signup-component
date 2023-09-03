import iconSuccess from "../assets/images/icon-success.svg";

const SucessfulSub = () => {
  return (
    <section>
      <div>
        <img src={iconSuccess} alt="success icon" />
      </div>
      <h1>Thanks for subscribing! </h1>

      <p>
        A confirmation email has been sent to
        <span>ash@loremcompany.com</span>. Please open it and click the button
        inside to confirm your subscription.
      </p>

      <button>Dismiss message</button>
    </section>
  );
};

export default SucessfulSub;
