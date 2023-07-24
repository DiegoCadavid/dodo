const RegisterForm = ({}) => {
  return (
    <form className="mt-8 flex flex-col gap-4">
      <input type="text" placeholder="username" className="dodo-input" autoComplete="off" name="username-register"/>
      <input type="email" placeholder="email" className="dodo-input" autoComplete="off" name="email-register"  />
      <input type="password" placeholder="password" className="dodo-input" autoComplete="off" name="password-register" />
      <input
        type="password"
        placeholder="repeat password"
        className="dodo-input"
        autoComplete="off"
        name="password-register-repeat"
      />
      <button type="submit" className="dodo-btn dodo-btn-primary pt-2">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
