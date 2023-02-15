import Link from "next/link";

const CategoryItem: React.FC<{ categoryName: string }> = (props) => {
	return (
		<li>
			<Link href={`/store/${props.categoryName}`}>
				<img></img>
				<p>{props.categoryName}</p>
			</Link>
		</li>
	);
};

export default CategoryItem;
