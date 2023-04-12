import Link from "next/link";
import { useRouter } from "next/router";
import BasketOverlay from "./BasketOverlay/BasketOverlay";

import classes from "./Navbar.module.css";

const Navbar = () => {
	const router = useRouter();

	const inStore = router.pathname.startsWith("/store");
	const inSummary = router.pathname.endsWith("/order-summary");

	const inContactUs = router.pathname.startsWith("/contact-us");
	const inAboutUs = router.pathname.startsWith("/about-us");

	const navStyle = inSummary ? "simple" : "full";

	const navLogo = (
		<Link href="/" className={`${classes.logo} ${classes.link}`}>
			<span className={classes.logo__image}></span>
			<span className={classes.logo__name}>Local Greens</span>
		</Link>
	);

	return navStyle === "full" ? (
		<nav className={`${classes.navbar} ${classes.navbar__full}`}>
			{navLogo}
			<ul className={classes.menu}>
				<li>
					<Link
						href="/about-us"
						className={`${classes.link} ${inAboutUs && classes.link__active}`}
					>
						About Us
					</Link>
				</li>
				<li>
					<Link
						href="/contact-us"
						className={`${classes.link} ${inContactUs && classes.link__active}`}
					>
						Contact Us
					</Link>
				</li>
				{inStore ? (
					<li>
						<BasketOverlay />
					</li>
				) : (
					<li className={classes.store__button}>
						<Link href="/store" className={`${classes.link} ${classes.store__link}`}>
							Store
						</Link>
					</li>
				)}
			</ul>
		</nav>
	) : (
		<nav className={`${classes.navbar} ${classes.navbar__simple}`}>{navLogo}</nav>
	);
};

export default Navbar;
