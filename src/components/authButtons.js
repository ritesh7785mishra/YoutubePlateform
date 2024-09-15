import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
	const handleClick = () => {
		signIn("google");
	};

	return (
		<div>
			<button onClick={handleClick}>Continue with google</button>
		</div>
	);
}
