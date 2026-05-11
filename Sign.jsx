

function Sign() {
    return (
        <div className="title">
            <div className="container">
                <h1>New Sign Page</h1>
            </div>
            <div className="class-sign">
                <label htmlFor="email">Email Address</label>
                <input type="text" placeholder="Email address" />
            </div>
            <div className="class-sign">
                <label htmlFor="password">Password</label>
                <input type="text" placeholder="Password" />
            </div>
            <div className="class-sign">
                <label htmlFor="Confirm">Confirm Password</label>
                <input type="text" placeholder="Confirm Password" />
            </div>
            <div className="btnclass">
                <button type="submit">
                    Sign In
                </button>
            </div>
            <p>Click here for Login
                <button className="btn-class">Login</button>
            </p>


        </div>
    )
}
export default Sign;