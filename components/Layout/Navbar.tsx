import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./Navbar.module.css";

const Navbar = () => {
	const router = useRouter();

	const inStore = router.pathname.startsWith("/store");

	return (
		<nav className={classes.nav}>
			<Link href="/" className={`${classes.logo} ${classes.link}`}>
				<span></span>
				<h1>Diddly Squat</h1>
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
				<Link href="/store" className={classes.link}>
					<li className={`${classes.store} ${classes.link}`}>{inStore ? "My Basket" : "Store"}</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
