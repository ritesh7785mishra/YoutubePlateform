import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authConfig = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					scope:
						"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.upload", // Request YouTube upload permissions
				},
			},
		}),
		// Add more providers here if necessary
	],
	secret: process.env.NEXTAUTH_SECRET, // Add your secret

	callbacks: {
		async jwt({ token, account }) {
			// When a user first signs in, store the access and refresh tokens
			if (account) {
				token.accessToken = account.access_token;
				token.refreshToken = account.refresh_token;
			}
			return token;
		},
		async session({ session, token }) {
			// Expose the access token to the session so you can use it in API requests
			session.accessToken = token.accessToken;
			return session;
		},
		async redirect() {
			let redirectUrl = process.env.NEXTAUTH_URL + "/dashboard";

			return redirectUrl; // Redirect to the homepage by default
		},
	},
};
