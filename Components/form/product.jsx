import utilStyles from "../../styles/utils.module.css";
import personalStyles from "../../styles/Product.module.css";

export default function Product({
	product,
	setProduct,
	validForm,
}) {
    const priorityOptions = ["high", "medium", "low"];

	function handleProductNameChange(e) {
		setProduct({
			...product,
			name: e.target.value,
		});
	}

    function handleLinkChange(e) {
		setProduct({
			...product,
			link: e.target.value,
		});
	}

	function handlePriceChange(e) {
		setProduct({
			...product,
			price: e.target.value,
		});
	}
	function handlePriorityChange(e) {
		setProduct({
			...product,
			priority: e.target.value,
		});
	}
	function handleImageChange(e) {
		setProduct({
			...product,
			image: e.target.value,
		});
	}

    function handleNotesChange(e) {
		setProduct({
			...product,
			notes: e.target.value,
		});
	}

	function getError(validator) {
		if (!validator)
			return (
				<span className={utilStyles.error}>
					{validator === undefined
						? "This field is required"
						: "Invalid format"}
				</span>
			);
	}

	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Add a Product
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					Provide a product details
				</legend>
				<label
					htmlFor="ProductName"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Name</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="text"
						value={product.name}
						onChange={handleProductNameChange}
						placeholder="e.g. Shoes"
						id="productName"
						name="productName"
						// maxLength={32}
					/>
				</label>

				<label
					htmlFor="link"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Link</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="url"
						value={product.link}
						onChange={handleLinkChange}
						placeholder="e.g. https://google.com"
						id="link"
						name="link"
						// maxLength={32}
					/>
				</label>

				<label
					htmlFor="price"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Price</span>
						{/* {getError(validForm.hasValidEmailAddress)} */}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							// !validForm.hasValidEmailAddress &&
							utilStyles.containerError
						}`}
						type="number"
						value={product.price}
						onChange={handlePriceChange}
						placeholder="25.99"
						id="price"
						name="price"
					/>
				</label>

				<label
					htmlFor="priority"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Priority</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<select className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						id="priority"
						name="priority"
						value={product.priority}
						onChange={handlePriorityChange}>
							<option value="" disabled>Select your option</option>
							{priorityOptions.map((priority, index) => (
								<>
								<option value={priority}>
									{priority}
								</option>
								</>
							))};

					</select>
				</label>

				<label
					htmlFor="image"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Image</span>
						{/* {getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)} */}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="text"
						value={product.image}
						onChange={handleImageChange}
						// placeholder="e.g. Doe"
						id="image"
						name="image"
						// maxLength={32}
					/>
				</label>

				<label
					htmlFor="notes"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Notes</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="text"
						value={product.notes}
						onChange={handleNotesChange}
						placeholder="e.g. Please buy blue one"
						id="notes"
						name="notes"
						// maxLength={32}
					/>
				</label>



			</fieldset>
		</>
	);
}
