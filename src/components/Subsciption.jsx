import Form from "./Form";
import mobileImg from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImg from "../assets/images//illustration-sign-up-desktop.svg";
import icon from "../assets/images/icon-list.svg";


const Subsciption = () => {
  return (
    <>
      <section>
        <div>
          <img src={mobileImg} className="md:hidden " alt="sign up image" />
          <img
            src={desktopImg}
            className="hidden md:block"
            alt="sign up imgage"
          />
        </div>
      </section>

      <section className="p-6">
        <h1 className="text-4xl font-bold my-5">Stay updated!</h1>
        <p className="mb-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="flex gap-4 mb-3 ">
          <div>
            <img src={icon} alt="icon" />
          </div>
          <p>Product discovery and building what matters</p>
        </div>
        <div className="flex gap-4 mb-3">
          <div>
            <img src={icon} alt="icon" />
          </div>
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="flex gap-4 mb-8">
          <div>
            <img src={icon} alt="icon" />
          </div>
          <p>And much more!</p>
        </div>
        <Form />
      </section>
    </>
  );
};

export default Subsciption;
