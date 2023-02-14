import { useRouter } from "next/router";

const HomePage = () => {
	const router = useRouter();

	const goToStoreHandler = () => {
		router.push("/store/categories");
	};

	return (
		<>
			<h1>Home Page!</h1>
			<div>NavBar</div>
			<section id="hero-section">
				<div id="main">
					<h1>Fresh produce from our Garden to your Table</h1>
					<p>
						Experience the taste of homegrown goodness with our seasonal selection of
						vegetables, fruits and more.
					</p>
					<button onClick={goToStoreHandler}>Visit our Store</button>
				</div>
				<img></img>
			</section>
			<section id="benefits-section">
				<h2>Why choose us?</h2>
				<div>
					<img></img>
					<h3>Freshest Products</h3>
					<p>
						Choose from a wide variety of fresh, healthy an in-season products directly
						from our garden, with the guaranty that they are picked at their peak of
						flavor.
					</p>
				</div>
				<div>
					<img></img>
					<h3>Responsible Farming</h3>
					<p>
						At Local Greens, we make sure that our products are grown with the most
						sustainable and responsible farming methods, making our products healthier for
						you and for the environment.
					</p>
				</div>
				<div>
					<img></img>
					<h3>Personalization</h3>
					<p>
						Don’t get stuck with products you don’t want. Personalize your basket to your
						own liking by choosing only your favorite products.
					</p>
				</div>
			</section>
			<section id="social-proof-section">
				<h2>Hear from some of our satisfied customers</h2>
				<div>
					<p>
						“I've been a customer of Local Greens for a year now and I can't recommend
						them enough! Their produce is always fresh and delicious, and the convenience
						of having a basket delivered to my door is unbeatable. Plus, I love that I can
						customize my basket to fit my dietary needs and preferences.”
					</p>
					<div>
						<img></img>
						<h3>John Doe</h3>
					</div>
				</div>
				<div>
					<p>
						“I've been a loyal customer of Local Greens for a while now, and I just have
						to say - their produce is top-notch! I love the fresh, tasty fruits and
						veggies, and the variety of options in each basket. Plus, my human can
						customize my basket to fit my dietary needs, which is great. Thanks, Local
						Greens, for making it easy for me to eat well and stay healthy!”
					</p>
					<div>
						<img></img>
						<h3>Max Pugstappen</h3>
					</div>
				</div>
				<div>
					<p>
						“I recently tried Local Greens for the first time and I was impressed! The
						produce was fresh and delicious, the baskets were convenient and easy to use,
						and I loved being able to customize my order to fit my preferences. I'll
						definitely be a repeat customer!”
					</p>
					<div>
						<img></img>
						<h3>Sarah Smith</h3>
					</div>
				</div>
				<div>
					<p>
						“I'm a busy mom and I don't always have time to go to the grocery store, so
						Local Greens has been a lifesaver! Their baskets are always filled with
						healthy, tasty options that my kids love, and I love that I'm supporting a
						local farm and sustainable farming practices. Thank you, Local Greens!”
					</p>
					<div>
						<img></img>
						<h3>Jessica Thomson</h3>
					</div>
				</div>
				<div>
					<p>
						“I'm a big fan of farm-to-table eating and I was thrilled to find Local
						Greens. Their produce is always top-notch and I love the variety of options
						they offer. Plus, the convenience of having a basket delivered to me is a huge
						plus. Thank you, Local Greens, for making it easy to eat well!”
					</p>
					<div>
						<img></img>
						<h3>Mike Johnson</h3>
					</div>
				</div>
			</section>
			<section id="features-section">
				<h2>What we offer</h2>
				<div>
					<img></img>
					<p>Locally grown products using organic and sustainable methods.</p>
				</div>
				<div>
					<img></img>
					<p>Big variety of products from vegetables, fruits, herbs and other. </p>
				</div>
				<div>
					<img></img>
					<p>Ability to personalize and order your basket online.</p>
				</div>
				<div>
					<img></img>
					<p>Included delivery of the baskets to your door.</p>
				</div>
				<div>
					<img></img>
					<p>Possibility to schedule a visit to the garden and get to know us better.</p>
				</div>
			</section>
			<section id="secondary-cta">
				<h2>Like what you see?</h2>
				<p>Take the next step and experience the quality of our products for yourself.</p>
				<button onClick={goToStoreHandler}>Visit our Store</button>
			</section>
			<div>Footer</div>
		</>
	);
};

export default HomePage;
