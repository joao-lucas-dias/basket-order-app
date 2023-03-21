import Link from "next/link";
import { useRouter } from "next/router";
import BasketOverlay from "./BasketOverlay/BasketOverlay";

import classes from "./Navbar.module.css";

const Navbar = () => {
	const router = useRouter();

	const inStore = router.pathname.startsWith("/store");
	const inSummary = router.pathname.endsWith("/order-summary");

	const navStyle = inSummary ? "simple" : "full";

	return navStyle === "full" ? (
		<nav className={classes["nav-full"]}>
			<Link href="/" className={`${classes.logo} ${classes.link}`}>
				<span className={classes["logo-image"]}></span>
				<span className={classes["logo-name"]}>Diddly Squat</span>
			</Link>
			<ul className={classes.menu}>
				<li>
					<Link href="/about-us" className={classes.link}>
						About Us
					</Link>
				</li>
				<li>
					<Link href="/contact-us" className={classes.link}>
						Contact Us
					</Link>
				</li>
				<li>
					{inStore ? (
						<BasketOverlay />
					) : (
						<Link href="/store" className={`${classes.store} ${classes.link}`}>
							Store
						</Link>
					)}
				</li>
			</ul>
		</nav>
	) : (
		<nav className={classes["nav-simple"]}>
			<Link href="/" className={`${classes.logo} ${classes.link}`}>
				<span className={classes["logo-image"]}></span>
				<span className={classes["logo-name"]}>Diddly Squat</span>
			</Link>
		</nav>
	);
};

export default Navbar;
