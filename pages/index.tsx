import { useRouter } from "next/router";
import CheckIcon from "@mui/icons-material/Check";

import classes from "../styles/HomePage.module.css";
import Image from "next/image";

const HomePage = () => {
	const router = useRouter();

	const goToStoreHandler = () => {
		router.push("/store");
	};

	return (
		<main className={classes.main}>
			<section
				className={`${classes.section} ${classes.section__hero} ${classes.section__bg__main}`}
			>
				<div className={classes["flex-group"]}>
					<div className={classes["text-group"]}>
						<h1 className={classes["main-heading"]}>
							Fresh produce from our Garden to your Table
						</h1>
						<p className={classes["p-text"]}>
							Experience the taste of homegrown goodness with our seasonal selection of
							vegetables, fruits and more.
						</p>
					</div>
					<button className={classes.cta__button} onClick={goToStoreHandler}>
						Visit our Store
					</button>
				</div>
				<Image
					src={"/images/home/lettuce-field.jpg"}
					alt="Picture of a lettuce field"
					className={classes.hero__image}
					width={2000}
					height={2000}
					quality={100}
					priority
				/>
			</section>
			<section
				className={`${classes.section} ${classes.section__secondary} ${classes.section__bg__primary}`}
			>
				<h2 className={classes["sub-heading-2"]}>Why choose us?</h2>
				<div className={classes.benefits__section__body}>
					<div className={classes.benefit}>
						<Image
							src={"/images/home/vegetables.jpg"}
							alt="Picture of vegetables"
							className={classes.benefit__image}
							width={2000}
							height={2000}
							quality={100}
							priority
						/>
						<div className={classes.benefit__body}>
							<h3 className={classes["sub-heading-3"]}>Freshest Products</h3>
							<p className={classes["p-text"]}>
								Choose from a wide variety of fresh, healthy an in-season products
								directly from our garden, with the guaranty that they are picked at their
								peak of flavor.
							</p>
						</div>
					</div>
					<div className={classes.benefit}>
						<Image
							src={"/images/home/hands-planting.jpg"}
							alt="Picture of someone plating lettuce"
							className={classes.benefit__image}
							width={2000}
							height={2000}
							quality={100}
							priority
						/>
						<div className={classes.benefit__body}>
							<h3 className={classes["sub-heading-3"]}>Responsible Farming</h3>
							<p className={classes["p-text"]}>
								At Local Greens, we make sure that our products are grown with the most
								sustainable and responsible farming methods, making our products healthier
								for you and for the environment.
							</p>
						</div>
					</div>
					<div className={classes.benefit}>
						<Image
							src={"/images/home/vegetable-stand.jpg"}
							alt="Picture of a vegetable stand"
							className={classes.benefit__image}
							width={2000}
							height={2000}
							quality={100}
							priority
						/>
						<div className={classes.benefit__body}>
							<h3 className={classes["sub-heading-3"]}>Personalization</h3>
							<p className={classes["p-text"]}>
								Don’t get stuck with products you don’t want. Personalize your basket to
								your own liking by choosing only your favorite products.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section
				className={`${classes.section} ${classes.section__secondary} ${classes.section__bg__main}`}
			>
				<h2 className={classes["sub-heading-2"]}>
					Hear from some of our satisfied customers
				</h2>
				<div className={classes.social__body}>
					<div className={classes.social__card}>
						<p className={classes["p-text"]}>
							“I've been a customer of Local Greens for a year now and I can't recommend
							them enough! Their produce is always fresh and delicious, and the
							convenience of having a basket delivered to my door is unbeatable. Plus, I
							love that I can customize my basket to fit my dietary needs and
							preferences.”
						</p>
						<span className={classes.social__card__tag}>
							<Image
								src={"/images/home/john-doe.jpg"}
								alt="John Doe's profile picture"
								className={classes.social__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<h4 className={classes["sub-heading-4"]}>John Doe</h4>
						</span>
					</div>
					<div className={classes.social__card}>
						<p className={classes["p-text"]}>
							“I've been a loyal customer of Local Greens for a while now, and I just have
							to say - their produce is top-notch! I love the fresh, tasty fruits and
							veggies, and the variety of options in each basket. Plus, my human can
							customize my basket to fit my dietary needs, which is great. Thanks, Local
							Greens, for making it easy for me to eat well and stay healthy!”
						</p>
						<div className={classes.social__card__tag}>
							<Image
								src={"/images/home/max-pugstappen.jpg"}
								alt="Max Pugstappen's profile picture"
								className={classes.social__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<h4 className={classes["sub-heading-4"]}>Max Pugstappen</h4>
						</div>
					</div>
					<div className={classes.social__card}>
						<p className={classes["p-text"]}>
							“I recently tried Local Greens for the first time and I was impressed! The
							produce was fresh and delicious, the baskets were convenient and easy to
							use, and I loved being able to customize my order to fit my preferences.
							I'll definitely be a repeat customer!”
						</p>
						<div className={classes.social__card__tag}>
							<Image
								src={"/images/home/sarah-smith.jpg"}
								alt="Sarah Smith's profile picture"
								className={classes.social__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<h4 className={classes["sub-heading-4"]}>Sarah Smith</h4>
						</div>
					</div>
					<div className={classes.social__card}>
						<p className={classes["p-text"]}>
							“I'm a busy mom and I don't always have time to go to the grocery store, so
							Local Greens has been a lifesaver! Their baskets are always filled with
							healthy, tasty options that my kids love, and I love that I'm supporting a
							local farm and sustainable farming practices. Thank you, Local Greens!”
						</p>
						<div className={classes.social__card__tag}>
							<Image
								src={"/images/home/jessica-thomson.jpg"}
								alt="Jessica Thomson's profile picture"
								className={classes.social__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<h4 className={classes["sub-heading-4"]}>Jessica Thomson</h4>
						</div>
					</div>
					<div className={classes.social__card}>
						<p className={classes["p-text"]}>
							“I'm a big fan of farm-to-table eating and I was thrilled to find Local
							Greens. Their produce is always top-notch and I love the variety of options
							they offer. Plus, the convenience of having a basket delivered to me is a
							huge plus. Thank you, Local Greens, for making it easy to eat well!”
						</p>
						<div className={classes.social__card__tag}>
							<Image
								src={"/images/home/mike-johnson.jpg"}
								alt="Mike Johnson's profile picture"
								className={classes.social__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<h4 className={classes["sub-heading-4"]}>Mike Johnson</h4>
						</div>
					</div>
				</div>
			</section>
			<section
				className={`${classes.section} ${classes.section__secondary} ${classes.section__bg__primary}`}
			>
				<h2 className={classes["sub-heading-2"]}>What we offer</h2>
				<div className={classes.features__body}>
					<span className={classes.feature}>
						<CheckIcon className={classes.feature__icon} />
						<p className={classes["p-text"]}>
							Locally grown products using organic and sustainable methods.
						</p>
					</span>
					<span className={classes.feature}>
						<CheckIcon className={classes.feature__icon} />
						<p className={classes["p-text"]}>
							Big variety of products from vegetables, fruits, herbs and other.{" "}
						</p>
					</span>
					<span className={classes.feature}>
						<CheckIcon className={classes.feature__icon} />
						<p className={classes["p-text"]}>
							Ability to personalize and order your basket online.
						</p>
					</span>
					<span className={classes.feature}>
						<CheckIcon className={classes.feature__icon} />
						<p className={classes["p-text"]}>
							Included delivery of the baskets to your door.
						</p>
					</span>
					<span className={classes.feature}>
						<CheckIcon className={classes.feature__icon} />
						<p className={classes["p-text"]}>
							Possibility to schedule a visit to the garden and get to know us better.
						</p>
					</span>
				</div>
			</section>
			<section
				className={`${classes.section} ${classes.section__secondary} ${classes.section__bg__main}`}
			>
				<h2 className={classes["sub-heading-2"]}>Like what you see?</h2>
				<div className={classes.cta__secondary__body}>
					<p className={classes["p-text"]}>
						Take the next step and experience the quality of our products for yourself.
					</p>
					<button className={classes.cta__button} onClick={goToStoreHandler}>
						Visit our Store
					</button>
				</div>
			</section>
		</main>
	);
};

export default HomePage;
