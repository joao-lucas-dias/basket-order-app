import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import classes from "@/styles/ContactPage.module.css";
import Image from "next/image";

const ContactPage = () => {
	return (
		<main className={classes.main}>
			<h1 className={classes.heading}>Contact Us!</h1>
			<section className={classes.section__main}>
				<div className={classes.section__main__child}>
					<Image
						src="/images/contact/cows.jpg"
						alt="Picture of a farm."
						className={classes.section__main__image}
						width={2000}
						height={2000}
						quality={100}
					/>
					<h2 className={classes.subheading}>Have any questions about your orders?</h2>
					<p className={classes.paragraph}>
						If you have any questions about your order, we are here to help! Whether you
						have a question about a product or need help with an order, please don't
						hesitate to reach out to us by phone or email and we will be happy to assist
						you.
					</p>
				</div>
				<div className={classes.section__main__child}>
					<Image
						src="/images/contact/farm.jpg"
						alt="Picture of a farm."
						className={classes.section__main__image}
						width={2000}
						height={2000}
						quality={100}
					/>
					<h2 className={classes.subheading}>Want to visit us at the farm?</h2>
					<p className={classes.paragraph}>
						We would love to have you visit us at the farm! Whether you're looking for a
						fun family outing or want to learn more about where your food comes from. To
						schedule a visit, please contact us by phone or email and we will be happy to
						arrange a time that works for you.
					</p>
				</div>
			</section>
			<section className={classes.section__contact}>
				<div className={classes.section__contact__child}>
					<h3 className={classes.section__contact__heading}>
						<PhoneIcon fontSize="large" />
						Phone Number
					</h3>
					<p className={classes.paragraph}>+123 987654321</p>
				</div>
				<div className={classes.section__contact__child}>
					<h3 className={classes.section__contact__heading}>
						<AlternateEmailIcon fontSize="large" />
						E-mail
					</h3>
					<p className={classes.paragraph}>local.greens@mail.com</p>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;
