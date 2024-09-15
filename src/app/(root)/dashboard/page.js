"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const { data: session, status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (!session) {
		router.push("/login");
		return null;
	}

	return (
		<div>
			<h1>Welcome, {session.user.name}</h1>
			<p>You're logged in with {session.user.email}</p>
		</div>
	);
}
