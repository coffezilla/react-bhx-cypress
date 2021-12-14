import { useState, useEffect } from 'react';

import Form from './components/Form';
import Post from './components/Post';

const App = () => {
	const [posts, setPosts] = useState<
		{ id: number; title: string; category: number; likes: number }[]
	>([]);
	const [form, setForm] = useState({
		title: '',
		category: 1,
	});

	// input
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	// like handle
	const handleLike = (postId: number) => {
		setPosts(
			posts.map((post) => {
				if (post.id === postId) {
					return { ...post, likes: post.likes + 1 };
				}
				return post;
			}),
		);
	};

	// submit
	const submitForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		let inputClean = form.title;
		inputClean = inputClean.trim();
		inputClean = inputClean.replace(/  +/g, ' ');
		const isEmpty = inputClean.length === 0;

		console.log('lizo', posts.length);

		if (!isEmpty) {
			setPosts([
				{ id: posts.length + 1, title: form.title, category: form.category, likes: 0 },
				...posts,
			]);
			setForm({ ...form, title: '' });
		}
	};

	useEffect(() => {
		// setPosts({});
	}, []);

	return (
		<div className="App bg-gray-100 md:py-5 min-h-screen">
			{/* <pre className="text-xs">{JSON.stringify(posts, null, 1)}</pre> */}
			<Form formState={form} handleForm={handleInput} submitForm={submitForm} />
			{posts.length === 0 ? (
				<p className="text-center max-w-lg mx-auto">Sem posts</p>
			) : (
				posts.map((post) => {
					return (
						<Post
							title={post.title}
							category={post.category}
							likes={post.likes}
							id={post.id}
							handleLike={handleLike}
							key={post.title}
						/>
					);
				})
			)}
		</div>
	);
};

export default App;
