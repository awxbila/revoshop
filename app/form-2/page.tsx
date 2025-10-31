"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.email("Invalid format"),
  age: z.number().min(17, "Min 17"),
  birthday: z.string().min(1, "Required"),
});

type FormData = z.infer<typeof schema>;

export default function FormPage() {
  const [step, setStep] = useState<number>(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const submitForm = (data: FormData) => {
    alert(`Submitted: ${JSON.stringify(data, null, 2)}`);
  };

  const nextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let fieldsToValidate: (keyof FormData)[] = [];

    if (step == 1) fieldsToValidate = ["name", "email"];
    if (step == 2) fieldsToValidate = ["age", "birthday"];

    const valid = await trigger(fieldsToValidate);

    if (valid) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((s) => s - 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-md space-y-4">
        <h1 className="text-center">My Form</h1>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-3">
          {step === 1 && (
            <>
              <div className="space-y-1">
                <label>Name</label>
                <input
                  className="w-full border px-2 py-1"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label>Email</label>
                <input
                  {...register("email")}
                  className="w-full border px-2 py-1"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-black px-3 py-2 text-white"
                onClick={nextStep}
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-1">
                <label>Age</label>
                <input
                  type="number"
                  {...register("age", { valueAsNumber: true })}
                  className="w-full border px-2 py-1"
                />
                {errors.age && (
                  <p className="text-red-600">{errors.age.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label>Birthday</label>
                <input
                  type="date"
                  {...register("birthday")}
                  className="w-full border px-2 py-1"
                />
                {errors.birthday && (
                  <p className="text-red-600">{errors.birthday.message}</p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  className="w-full bg-gray-500 px-3 py-2 text-white"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="w-full bg-black px-3 py-2 text-white"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </main>
    </div>
  );
}
