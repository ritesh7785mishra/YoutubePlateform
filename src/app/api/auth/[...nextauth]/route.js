import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // You can replace with any provider

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// Add more providers here if necessary
	],
	secret: process.env.NEXTAUTH_SECRET, // Add your secret
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
