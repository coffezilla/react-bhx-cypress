interface IProps {
	formState: {
		title: string;
		category: number;
	};
	handleForm: any;
	submitForm: any;
}

const Form = ({ formState, handleForm, submitForm }: IProps) => {
	return (
		<div className="p-5 bg-white shadow-md mx-auto rounded-sm max-w-lg mb-5">
			<h1 className="text-md md:text-lg font-bold mb-5">Publicar novo post</h1>
			<form className="" onSubmit={(e) => submitForm(e)}>
				<label htmlFor="title" className="block mb-1">
					Título do post:
				</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formState.title}
					placeholder="Meu post..."
					onChange={(e) => handleForm(e)}
					className="border border-gray-500 py-1 px-3 block mb-2 w-full"
				/>
				<label htmlFor="category" className="block mb-1">
					Categoria:
				</label>
				<select
					id="category"
					name="category"
					className="border border-gray-500 py-1 px-3 block  mb-4 w-full"
					value={formState.category}
					onChange={(e) => handleForm(e)}
				>
					<option value="0">Sem Categoria</option>
					<option value="1">Lazer</option>
					<option value="2">Trabalho</option>
				</select>
				<button
					type="submit"
					className="bg-blue-600 hover:bg-blue-800 transition text-white rounded-md px-3 py-2 w-full md:w-auto"
				>
					Publicar
				</button>
			</form>
		</div>
	);
};

export default Form;
