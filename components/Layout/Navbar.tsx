import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<Link href="/" className={`${classes.logo} ${classes.link}`} >
				<span></span>
				<h1>Diddly Squat</h1>
			</Link>
			<ul className={classes.menu}>
				<li>
					<Link href="/about-us" className={classes.link}>About Us</Link>
				</li>
				<li>
					<Link href="/contact-us" className={classes.link}>Contact Us</Link>
				</li>
				<li className={classes.store}>
					<Link href="/store" className={classes.link}>Store</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
