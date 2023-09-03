import Card from "./components/UI/Card";
import Form from "./components/Form";
import mobileImg from "./assets/images/illustration-sign-up-mobile.svg";
function App() {
  return (
    <Card>
      <section>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div>Product discovery and building what matters</div>
        <div>Measuring to ensure updates are a success</div>
        <div>And much more!</div>
        <Form />
      </section>

      <section>
        <div>
          <img src={mobileImg} alt="sign up image" />
        </div>
      </section>
    </Card>
  );
}

export default App;
