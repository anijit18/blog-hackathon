export default function LoginPage() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    );
  }
  