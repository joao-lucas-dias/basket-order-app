import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Navbar from "@/components/Layout/Navbar/Navbar";
import store from "@/store/store";
import { Roboto_Flex } from "@next/font/google";

import "../styles/globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<style jsx global>
				{`
					html {
						font-family: ${roboto.style.fontFamily};
					}
				`}
			</style>
			<Navbar />
			<Component {...pageProps} />
		</Provider>
	);
}
