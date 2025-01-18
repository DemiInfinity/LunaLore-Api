import { signUpWithEmail } from "../../../supabase/auth";
import { fetchUserByEmail } from "../../../supabase/database";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("Server hit for registration process");

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const exists = await fetchUserByEmail(email);
    if (exists) throw "already registered";
    // Use the `signUpWithEmail` function to attempt user registration
    const data = await signUpWithEmail(email, password);

    if (!data.user) {
      throw new Error("User registration failed");
    }

    console.log("User successfully registered:", data.user);

    // Return a success message to the frontend
    return res.status(200).json({
      message:
        "Registration successful. Please check your email to verify your account.",
    });
  } catch (error: any) {
      return res
        .status(400)
        .json({ error: "User with this email already exists. Please log in." });
  }
}
