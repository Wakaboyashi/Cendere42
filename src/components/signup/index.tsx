import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    // Önce şifreler uyuşuyor mu kontrol et
    if (form.password !== form.confirmPassword) {
      setError("Şifreler uyuşmuyor");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();
      if (data.success) {
        Navigate("/home"); // örneğin navigate("/home")
      } else {
        setError(data.error || "Kayıt başarısız");
      }
    } catch (err) {
      setError("Sunucu hatası: " + err.message);
    }
  };

  return (
      <div className="w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900 p-8 shadow-md shadow-zinc-800/50 text-white mx-auto mt-20">
        <h2 className="mb-6 text-center text-2xl font-bold">Sign Up</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded bg-zinc-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded bg-zinc-800 p x-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded bg-zinc-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full rounded bg-zinc-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            onClick={handleSignUp}
            className="w-full rounded bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-700"
          >
            Sign Up
          </button>
        </div>
      </div>
  );
};

export default SignUp;
