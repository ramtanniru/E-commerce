'use client'
import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // POST to your API route to create user
    await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={(e) => setForm({ ...form, username: e.target.value })} placeholder="Username" required />
        <input type="password" name="password" onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
