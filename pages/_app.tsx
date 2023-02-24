import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Layout/Navbar";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Navbar />
			<main>
				<Component {...pageProps} />
			</main>
			<div>FOOTER</div>
		</Provider>
	);
}
