

const Form = () => {
    return (
      <form>
        <div className="grid gap-[0.5rem] mb-6" >
          <label htmlFor="email" className="font-bold text-sm">Email address</label>
          <input className="border border-slate-400 p-4 rounded-lg" type="email" id="email" placeholder="email@company.com" />
        </div>
        <button className="w-full text-center text-secondary-100 p-4 bg-secondary-800 rounded-lg">Subscribe to monthly newsletter</button>
      </form>
    );
}

export default Form;
