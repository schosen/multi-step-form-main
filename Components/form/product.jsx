import utilStyles from "../../styles/utils.module.css";
import personalStyles from "../../styles/Product.module.css";
import { useState , useEffect} from "react";
import { linkRegex } from "../../constants/regex/regexConstants";

export default function Product({
	products,
	setProducts,
	validForm,
	setValidForm
}) {
	const [isProductSelected, setIsProductSelected] = useState(false)
	const [product, setProduct] = useState({name: "", link: "", priority: "", price: "", image: "", notes: ""});
	// const [products, setProducts] = useState([]);
	// const [showForm, setShowForm] = useState(false);

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

	const handleClick = () => {
		setIsProductSelected(!isProductSelected);

	};

	const handleAddProduct = () => {

		let hasValidName;
		let hasValidPrice;
		let hasValidLink;

		product.name == "" ? hasValidName = undefined : hasValidName = true;
		product.price == "" ? hasValidPrice = undefined : hasValidPrice = true;

		if (product.link == undefined || product.link == "")  {
			hasValidLink = true
		} else {
			hasValidLink = linkRegex.test(product.link);
		}

		setValidForm({...validForm, hasValidName, hasValidPrice, hasValidLink})
		// if (product.name && product.price) {
		if (hasValidName == true && hasValidPrice == true && hasValidLink == true) {

			setProducts([...products, product]);
			setProduct({name: "", link: "", priority: "", price: "", image: "", notes: ""});
			console.log("setProducts has been set")
			setIsProductSelected(false);
			// setShowForm(false);
		}
  	};
	// const handleFormToggle = () => setShowForm(!showForm);


	const handleRemoveProduct = (index) => {
		// creates new array without the item to remove (using index to remove)
		const updatedProducts = products.filter((_, i) => i !== index);
		setProducts(updatedProducts);
	};

	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Add a Product
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					Provide a product details
				</legend>

				{isProductSelected ?

				<>
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
							{getError(validForm.hasValidLink)}
							{console.log(validForm.hasValidLink)}
						</div>
						<input
							className={`${personalStyles.inputOne}  ${
								!validForm.hasValidLink && utilStyles.containerError
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
							{getError(validForm.hasValidPrice)}
						</div>
						<input
							className={`${personalStyles.inputOne} ${
								!validForm.hasValidPrice &&
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
						</div>
						<select className={`${personalStyles.inputOne}`}
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
							className={`${personalStyles.inputOne}`}
							type="file"
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
						</div>
						<input
							className={`${personalStyles.inputOne}`}
							type="text"
							value={product.notes}
							onChange={handleNotesChange}
							placeholder="e.g. Please buy blue one"
							id="notes"
							name="notes"
							// maxLength={32}
						/>
					</label>
					<button type='button' onClick={handleAddProduct}> Add product </button>
					<button onClick={handleClick}> Cancel </button>
				</>
				:
				<>
					<button onClick={handleClick}> Add New Product </button>
					<ul>
						{products.map((p, index) => (
						<li key={index} id={index}>
							{p.name} - ${p.price}{' '}
							<button type="button" onClick={() => handleRemoveProduct(index)}>Remove</button>
						</li>
						))}
					</ul>
   				</>
			}
		</fieldset>

		</>
	);
}
