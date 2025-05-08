'use client';

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation"; // ✅ use this in Next.js

import React, { useState } from "react";

type AuthFormProps = {
  type: "login" | "register";
};

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  // const navigate = useNavigate();
  const router = useRouter(); // ✅ replaces useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, this would connect to a backend
    if (type === "login") {
      toast.success("Logged in successfully!");
      // Navigate based on role (in a real app this would come from backend)
      // navigate(role === "student" ? "/dashboard/student" : "/dashboard/teacher");
      router.push("/dashboard"); // ✅ use this instead of navigate("/dashboard")
    } else {
      toast.success("Account created successfully!");
      // navigate("/auth/login");
      router.push("/auth/login"); // ✅ redirect to login after register
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-card shadow-md rounded-lg border">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {type === "login" ? "Login to Your Account" : "Create New Account"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {type === "register" && (
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="Enter your password"
          />
        </div>

        {type === "register" && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                  className="h-4 w-4 text-primary"
                />
                Student
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  checked={role === "teacher"}
                  onChange={() => setRole("teacher")}
                  className="h-4 w-4 text-primary"
                />
                Teacher
              </label>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full">
          {type === "login" ? "Login" : "Create Account"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        {type === "login" ? (
          <p>
            Don&apos;t have an account?{" "}
            <a href="/auth/register" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <a href="/auth/login" className="text-primary hover:underline">
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
