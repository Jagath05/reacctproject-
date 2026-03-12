import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {

      // Save login status
      localStorage.setItem("isLoggedIn", true);

      // Save username for navbar
      localStorage.setItem("loggedUser", savedUser.name);

      alert("Login successful!");

      navigate("/");

    } else {

      alert("Invalid email or password");

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign In
        </h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />

        {/* Login Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded transition"
        >
          Login
        </button>

        {/* Signup Redirect */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 cursor-pointer font-semibold"
          >
            Sign Up
          </span>
        </p>

      </form>

    </div>
  );
}