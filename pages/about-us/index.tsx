import classes from "@/styles/AboutUsPage.module.css";
import Image from "next/image";

const AboutUsPage = () => {
	return (
		<main className={classes.main}>
			<section className={classes.section}>
				<div className={classes.column}>
					<h2 className={classes.section__heading}>
						Meet Mark Days, Our Farm's Founder and Lead Farmer
					</h2>
					<p className={classes.section__paragraph}>
						Mark Days is the heart and soul of our farm. With a passion for sustainable
						agriculture and a deep respect for the land, Mark has dedicated his life to
						creating a thriving and environmentally-friendly farm that provides fresh,
						healthy food to our community.
					</p>
					<br></br>
					<p className={classes.section__paragraph}>
						His knowledge and expertise in organic and biodynamic farming practices have
						helped us to establish a reputation as a leading local farm, and his
						commitment to quality and customer satisfaction is unwavering. Mark is a
						native of the area and grew up with a love of farming and a deep appreciation
						for the natural world. After studying sustainable agriculture in college, he
						returned home to start his own farm and put his ideas into practice.
					</p>
					<br></br>
					<p className={classes.section__paragraph}>
						With a lot of hard work and determination, Mark transformed a small plot of
						land into the thriving operation it is today. He oversees all aspects of our
						farm's operations, from planting and harvesting to animal husbandry and sales.
						Mark is passionate about educating others about the benefits of sustainable
						agriculture and is always happy to share his knowledge and expertise with
						visitors to our farm. When he's not hard at work on the farm, Mark enjoys
						hiking, fishing, and spending time with his family and friends.
					</p>
				</div>
				<Image
					src="/images/about/farmer.jpg"
					alt="Picture of a farmer."
					className={`${classes.section__main__image} ${classes.column}`}
					width={2000}
					height={2000}
					quality={100}
				/>
			</section>
			<section className={`${classes.section} ${classes.flipped}`}>
				<div className={classes.column}>
					<h2 className={classes.section__heading}>Our Farming Roots</h2>
					<p className={classes.section__paragraph}>
						Local Greens has been a labor of love for our family for generations. From the
						moment we purchased our land, we knew we wanted to create a sustainable and
						community-focused farming operation that would make our family proud. Over the
						years, we have honed our skills and learned the importance of organic and
						biodynamic farming practices, and we are passionate about sharing our
						knowledge and expertise with others. Today, our farm is a thriving enterprise
						that is built on a strong foundation of hard work, dedication, and a
						commitment to quality.
					</p>
				</div>
				<Image
					src="/images/about/farm.jpg"
					alt="Picture of a farm."
					className={`${classes.section__image} ${classes.column}`}
					width={2000}
					height={2000}
					quality={100}
				/>
			</section>
			<section className={classes.section}>
				<div className={classes.column}>
					<h2 className={classes.section__heading}>Our Sustainable Vision</h2>
					<p className={classes.section__paragraph}>
						At Local Greens, we are committed to sustainable and ethical farming
						practices. Our mission is to provide fresh, high-quality produce to our
						community, while minimizing our environmental impact and promoting the health
						and well-being of our animals. We believe that a healthy farm is a happy farm,
						and we strive to create a positive and supportive environment for all of our
						team members and partners.
					</p>
				</div>
				<Image
					src="/images/about/farm-animals.jpg"
					alt="Picture of farm animals."
					className={`${classes.section__image} ${classes.column}`}
					width={2000}
					height={2000}
					quality={100}
				/>
			</section>
			<section className={`${classes.section} ${classes.flipped}`}>
				<div className={classes.column}>
					<h2 className={classes.section__heading}>From Farm to Table</h2>
					<p className={classes.section__paragraph}>
						Local Greens is proud to offer a wide range of fresh and delicious products,
						all of which are grown or raised on our property. From our juicy tomatoes and
						sweet strawberries to our grass-fed beef and free-range chicken, we are
						committed to providing the highest quality products to our customers. We take
						pride in our sustainable farming practices and use of natural fertilizers and
						pest control methods, ensuring that our products are not only tasty but also
						healthy and safe for you and your family.
					</p>
				</div>
				<Image
					src="/images/about/produce.jpg"
					alt="Picture of farm produce."
					className={`${classes.section__image} ${classes.column}`}
					width={2000}
					height={2000}
					quality={100}
				/>
			</section>
		</main>
	);
};

export default AboutUsPage;
