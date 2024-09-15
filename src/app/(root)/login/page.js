"use client";

import { GoogleSignInButton } from "@/components/authButtons";
import { signIn } from "next-auth/react";

export default function Login() {
	return (
		<div>
			<h1>Login</h1>
			<GoogleSignInButton />
			{/* Replace 'google' with your OAuth provider */}
		</div>
	);
}
