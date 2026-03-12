import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(form));

    alert("Signup successful! Please login.");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">

      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <button className="bg-green-600 text-white w-full py-2 rounded">
          Sign Up
        </button>

      </form>
    </div>
  );
}