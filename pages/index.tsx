import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "../styles/pages/_home.module.scss";

const HomePage = () => {
	const router = useRouter();

	const goToStoreHandler = () => {
		router.push("/store");
	};

	return (
		<main className={classes.main}>
			<section className={`${classes.section} ${classes.hero}`}>
				<Image
					src={"/images/home/lettuce-field.jpg"}
					alt="Picture of a lettuce field."
					className={classes.hero__image}
					width={2000}
					height={500}
					quality={100}
					priority
				/>
				<div className={classes.hero__main}>
					<h1>Fresh produce from our Farm to your Table</h1>
					<p>
						Experience the taste of homegrown goodness with our seasonal selection of
						vegetables, fruits and more.
					</p>
					<button className={classes.cta_button} onClick={goToStoreHandler}>
						Visit our Store
					</button>
				</div>
			</section>
			<section className={`${classes.section} ${classes.benefits}`}>
				<h2>Why choose us?</h2>
				<div className={classes.benefits__body}>
					<div className={classes.benefits_item}>
						<Image
							src={"/images/home/vegetables.jpg"}
							alt="Picture of vegetables"
							className={classes.benefits_item__image}
							width={2000}
							height={2000}
							quality={100}
							priority
						/>
						<div className={classes.benefits_item__body}>
							<h3>Freshest Products</h3>
							<p>
								Choose from a wide variety of fresh, healthy an in-season products
								directly from our garden, with the guaranty that they are picked at their
								peak of flavor.
							</p>
						</div>
					</div>
					<div className={classes.benefits_item}>
						<Image
							src={"/images/home/hands-planting.jpg"}
							alt="Picture of someone plating lettuce"
							className={classes.benefits_item__image}
							width={2000}
							height={2000}
							quality={100}
							priority
						/>
						<div className={classes.benefits_item__body}>
							<h3>Responsible Farming</h3>
							<p>
								At Local Greens, we make sure that our products are grown with the most
								sustainable and responsible farming methods, making our products healthier
								for you and for the environment.
							</p>
						</div>
					</div>
					<div className={classes.benefits_item}>
						<Image
							src={"/images/home/vegetable-stand.jpg"}
							alt="Picture of a vegetable stand"
							className={classes.benefits_item__image}
							width={2000}
							height={2000}
							quality={100}
							priority
						/>
						<div className={classes.benefits_item__body}>
							<h3>Personalization</h3>
							<p>
								Don’t get stuck with products you don’t want. Personalize your basket to
								your own liking by choosing only your favorite products.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className={`${classes.section} ${classes.social_proof}`}>
				<h2>Hear from some of our satisfied customers</h2>
				<div className={classes.social_proof__body}>
					<div className={classes.social_proof_item}>
						<p>
							“I've been a customer of Local Greens for a year now and I can't recommend
							them enough! Their produce is always fresh and delicious, and the
							convenience of having a basket delivered to my door is unbeatable. Plus, I
							love that I can customize my basket to fit my dietary needs and
							preferences.”
						</p>
						<span className={classes.social_proof_item__tag}>
							<Image
								src={"/images/home/john-doe.jpg"}
								alt="John Doe's profile picture"
								className={classes.social_proof_item__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<p>John Doe</p>
						</span>
					</div>
					<div className={classes.social_proof_item}>
						<p>
							“I've been a loyal customer of Local Greens for a while now, and I just have
							to say - their produce is top-notch! I love the fresh, tasty fruits and
							veggies, and the variety of options in each basket. Plus, my human can
							customize my basket to fit my dietary needs, which is great. Thanks, Local
							Greens, for making it easy for me to eat well and stay healthy!”
						</p>
						<div className={classes.social_proof_item__tag}>
							<Image
								src={"/images/home/max-pugstappen.jpg"}
								alt="Max Pugstappen's profile picture"
								className={classes.social_proof_item__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<p>Max Pugstappen</p>
						</div>
					</div>
					<div className={classes.social_proof_item}>
						<p>
							“I recently tried Local Greens for the first time and I was impressed! The
							produce was fresh and delicious, the baskets were convenient and easy to
							use, and I loved being able to customize my order to fit my preferences.
							I'll definitely be a repeat customer!”
						</p>
						<div className={classes.social_proof_item__tag}>
							<Image
								src={"/images/home/sarah-smith.jpg"}
								alt="Sarah Smith's profile picture"
								className={classes.social_proof_item__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<p>Sarah Smith</p>
						</div>
					</div>
					<div className={classes.social_proof_item}>
						<p>
							“I'm a busy mom and I don't always have time to go to the grocery store, so
							Local Greens has been a lifesaver! Their baskets are always filled with
							healthy, tasty options that my kids love, and I love that I'm supporting a
							local farm and sustainable farming practices. Thank you, Local Greens!”
						</p>
						<div className={classes.social_proof_item__tag}>
							<Image
								src={"/images/home/jessica-thomson.jpg"}
								alt="Jessica Thomson's profile picture"
								className={classes.social_proof_item__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<p>Jessica Thomson</p>
						</div>
					</div>
					<div className={classes.social_proof_item}>
						<p>
							“I'm a big fan of farm-to-table eating and I was thrilled to find Local
							Greens. Their produce is always top-notch and I love the variety of options
							they offer. Plus, the convenience of having a basket delivered to me is a
							huge plus. Thank you, Local Greens, for making it easy to eat well!”
						</p>
						<div className={classes.social_proof_item__tag}>
							<Image
								src={"/images/home/mike-johnson.jpg"}
								alt="Mike Johnson's profile picture"
								className={classes.social_proof_item__image}
								width={2000}
								height={2000}
								quality={100}
								priority
							/>
							<p>Mike Johnson</p>
						</div>
					</div>
				</div>
			</section>
			<section className={`${classes.section} ${classes.features}`}>
				<h2>What we offer</h2>
				<div className={classes.features__body}>
					<span className={classes.features_item}>
						<CheckIcon className={classes.features_item__icon} />
						<p>Locally grown products using organic and sustainable methods.</p>
					</span>
					<span className={classes.features_item}>
						<CheckIcon className={classes.features_item__icon} />
						<p>Big variety of products from vegetables, fruits, herbs and other. </p>
					</span>
					<span className={classes.features_item}>
						<CheckIcon className={classes.features_item__icon} />
						<p>Ability to personalize and order your basket online.</p>
					</span>
					<span className={classes.features_item}>
						<CheckIcon className={classes.features_item__icon} />
						<p>Included delivery of the baskets to your door.</p>
					</span>
					<span className={classes.features_item}>
						<CheckIcon className={classes.features_item__icon} />
						<p>
							Possibility to schedule a visit to the garden and get to know us better.
						</p>
					</span>
				</div>
			</section>
			<section className={`${classes.section} ${classes.secondary_cta}`}>
				<h2>Like what you see?</h2>
				<div className={classes.secondary_cta__body}>
					<p>
						Take the next step and experience the quality of our products for yourself.
					</p>
					<button className={classes.cta_button} onClick={goToStoreHandler}>
						Visit our Store
					</button>
				</div>
			</section>
		</main>
	);
};

export default HomePage;
