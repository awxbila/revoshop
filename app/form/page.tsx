"use client";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

export default function FormPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (data: FormData) => {
    const newErrors: Partial<FormData> = {};
    if (!data.name) newErrors.name = "Name required";
    if (!data.email) newErrors.email = "Email required";
    return newErrors;
  };

  const submitForm = (data: FormData) => {
    alert(`Submitted: ${JSON.stringify(data, null, 2)}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      submitForm(form);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-md space-y-4">
        <h1 className="text-center">My Form</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-2 py-1"
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>

          <div className="space-y-1">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-2 py-1"
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-black px-3 py-2 text-white"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
