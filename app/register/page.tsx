import React from "react";

const RegisterUserPage = () => {
    return (
        <div>
            <h1>Register</h1>

            <form action="#">
                <label htmlFor="username" className="mb-5 block">
                    <span className="label">Username</span>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="border block w-full focus:border-cyan-500 p-3"
                    />
                </label>

                <label htmlFor="email" className="mb-5 block">
                    <span className="label">Email</span>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border block w-full focus:border-cyan-500 p-3"
                    />
                </label>

                <label htmlFor="password" className="mb-5 block">
                    <span className="label">Password</span>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="border block w-full focus:border-cyan-500 p-3"
                    />
                </label>

                <button type="submit" className="btn btn-primary w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterUserPage;
