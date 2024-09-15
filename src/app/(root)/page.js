"use client";
import React from "react";
// import { useUser } from "@auth0/nextjs-auth0/client";

export default function page() {
	// const { user, error, isLoading } = useUser();
	// if (user) {
	// 	console.log(user);
	// }
	return (
		<div>
			{/* <a href="/api/auth/logout">Logout</a> */}
			{/* <p>{user?.email}</p> */}
			<br />
			{/* <a href="/api/auth/login">Login</a> */}
			<a href="/login">Login</a>
		</div>
	);
}
