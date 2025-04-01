export default function RegisterPage() {
    return (
        <div className="register-container">
            <h1>Register</h1>
            <form>
                <input type="text" className="input-field" placeholder="Username" />
                <input type="password" className="input-field" placeholder="Password" />
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
}
