import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthForm } from "@/components/auth/AuthForm";

export default function Login() {
	return (
		<div>
			<Header />

			{/* <h1>Login Page</h1> */}
			<main className="flex-grow flex items-center justify-center py-12 px-4">
				<div className="w-full max-w-md">
					<AuthForm type="login" />
				</div>
			</main>

			<Footer />
		</div>
	);
};
