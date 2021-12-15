interface IProps {
	id: number;
	title: string;
	category: number;
	likes: number;
	handleLike: any;
}

const Post = ({ id, title, category, likes, handleLike }: IProps) => {
	const categories = ['Sem categoria', 'Lazer', 'Trabalho'];

	return (
		<div className="post-content bg-white shadow-md mx-auto rounded-sm max-w-lg mb-2">
			<div className="overflow-hidden">
				<img
					className="object-cover"
					src="https://via.placeholder.com/1000x1000"
					alt="My Category"
				/>
			</div>
			<div className="post-content__description flex justify-between p-3 items-center">
				<div className="truncate">
					<h2 className="font-bold text-sm md:text-lg truncate">{title.length > 0 && title}</h2>
					<p className="text-xs">
						<span className="font-bold">{categories[category]}</span> - Publicado hoje
					</p>
				</div>
				<button
					type="button"
					onClick={() => handleLike(id)}
					className="hover:text-blue-400 flex-shrink-0 ml-3"
				>
					<span className="font-bold">{likes}</span> Curtir
				</button>
			</div>
		</div>
	);
};

export default Post;
