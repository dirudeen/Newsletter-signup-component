

const Form = () => {
    return (
      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="email@company.com" />
        </div>
        <button>Subscribe to monthly newsletter</button>
      </form>
    );
}

export default Form;
