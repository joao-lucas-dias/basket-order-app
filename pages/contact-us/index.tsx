import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import classes from "@/styles/ContactPage.module.css";

const ContactPage = () => {
	return (
		<main className={classes.main}>
			<section className={classes.section__main}>
				<div className={classes.section__main__column}>
					<Image
						src="/images/contact/cows.jpg"
						alt="Picture of a farm."
						className={classes.section__main__image}
						width={2000}
						height={2000}
						quality={100}
					/>
					<h2 className={classes.secondary_heading}>
						Have any questions about your orders?
					</h2>
					<p className={classes.normal_text}>
						If you have any questions about your order, we are here to help! Whether you
						have a question about a product or need help with an order, please don't
						hesitate to reach out to us by phone or email and we will be happy to assist
						you.
					</p>
				</div>
				<div className={classes.section__main__column}>
					<Image
						src="/images/contact/farm.jpg"
						alt="Picture of a farm."
						className={classes.section__main__image}
						width={2000}
						height={2000}
						quality={100}
					/>
					<h2 className={classes.secondary_heading}>Want to visit us at the farm?</h2>
					<p className={classes.normal_text}>
						We would love to have you visit us at the farm! Whether you're looking for a
						fun family outing or want to learn more about where your food comes from. To
						schedule a visit, please contact us by phone or email and we will be happy to
						arrange a time that works for you.
					</p>
				</div>
			</section>
			<section className={classes.section__contact}>
				<div className={classes.section__contact__column}>
					<h3 className={classes.terciary_heading}>
						<PhoneIcon fontSize="large" />
						Phone Number
					</h3>
					<p className={classes.normal_text}>+123 987654321</p>
				</div>
				<div className={classes.section__contact__column}>
					<h3 className={classes.terciary_heading}>
						<AlternateEmailIcon fontSize="large" />
						E-mail
					</h3>
					<p className={classes.normal_text}>local.greens@mail.com</p>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;
