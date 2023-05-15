import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";

import classes from "@/styles/components/Layout/_header.module.scss";
import BasketOverlay from "./BasketOverlay/BasketOverlay";

const Header = () => {
	const router = useRouter();

	const inStore = router.pathname.startsWith("/store");
	const inSummary = router.pathname.endsWith("/order-summary");

	const inContactUs = router.pathname.startsWith("/contact-us");
	const inAboutUs = router.pathname.startsWith("/about-us");

	const navStyle = inSummary ? "simple" : "full";

	const navLogo = (
		<Link href="/" className={classes.link}>
			<span className={classes.header__logo}>Local Greens</span>
		</Link>
	);

	return navStyle === "full" ? (
		<header className={`${classes.header} ${classes.navbar__full}`}>
			{navLogo}
			<button className={classes.header__hamburger}>
				<MenuIcon fontSize="large" />
			</button>
			<nav className={classes.nav_menu}>
				<ul>
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
		</header>
	) : (
		<header className={`${classes.navbar} ${classes.navbar__simple}`}>{navLogo}</header>
	);
};

export default Header;
