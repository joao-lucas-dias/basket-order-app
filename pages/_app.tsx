import Header from "@/components/Layout/Header/Header";
import store from "@/store/store";
import { Roboto_Flex } from "@next/font/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/main.scss";

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
			<Header />
			<Component {...pageProps} />
		</Provider>
	);
}
