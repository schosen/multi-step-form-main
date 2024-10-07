import utilStyles from "../../styles/utils.module.css";
import productStyles from "../../styles/Product.module.css";
import { useState } from "react";
import { linkRegex } from "../../constants/regex/regexConstants";
import { uploadImage } from "../../utils/imageStorage";
import Image from 'next/image'


export default function Product({
	products,
	setProducts,
	validForm,
	setValidForm
}) {
	const [isProductSelected, setIsProductSelected] = useState(false)
	const [product, setProduct] = useState({name: "", link: "", priority: "", price: "", image: null , notes: ""});
	const [errMessage, setErrMessage] = useState("")


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
	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
		uploadImage(
			file,
			(base64Image) => {
				setErrMessage('');
				setValidForm({...validForm, hasValidLink: true})
				setProduct({...product,
					image: base64Image}); // Store the Base64 string of the image
			},
			(errorMessage) => {
				console.log(errorMessage)
				setErrMessage(errorMessage)
				setValidForm({...validForm, hasValidLink: false})
			}
		);
		}
	};

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

	function getImageError(validator, message) {
		if (!validator)
			return (
				<span className={utilStyles.error}>
					{message}
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
		if (hasValidName == true && hasValidPrice == true && hasValidLink == true) {

			setProducts([...products, product]);
			setProduct({name: "", link: "", priority: "", price: "", image: null, notes: ""});
			setIsProductSelected(false);
		}
  	};


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
						className={`${productStyles.label} ${utilStyles.colorText}`}
					>
						{" "}
						<div className={productStyles.labelContainer}>
							<span>Name</span>
							{getError(validForm.hasValidName)}
							{console.log(validForm.hasValidName)}
						</div>
						<input
							className={`${productStyles.inputOne} ${
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
						className={`${productStyles.label} ${utilStyles.colorText}`}
					>
						{" "}
						<div className={productStyles.labelContainer}>
							<span>Link</span>
							{getError(validForm.hasValidLink)}
							{console.log(validForm.hasValidLink)}
						</div>
						<input
							className={`${productStyles.inputOne}  ${
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
						className={`${productStyles.label} ${utilStyles.colorText}`}
					>
						{" "}
						<div className={productStyles.labelContainer}>
							<span>Price</span>
							{getError(validForm.hasValidPrice)}
						</div>
						<input
							className={`${productStyles.inputOne} ${
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
						className={`${productStyles.label} ${utilStyles.colorText}`}
					>
						{" "}
						<div className={productStyles.labelContainer}>
							<span>Priority</span>
						</div>
						<select className={`${productStyles.inputOne}`}
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
						className={`${productStyles.label} ${utilStyles.colorText}`}
					>
						{" "}
						<div className={productStyles.labelContainer}>
							<span>Image</span>
							{getImageError(validForm.hasValidImage, errMessage)}
							{console.log(validForm.hasValidImage)}
						</div>
						<input
							className={`${productStyles.inputOne}`}
							type="file"
							accept=".jpeg,.png"
							// value={product.image}
							onChange={handleImageUpload}
							// placeholder="e.g. Doe"
							id="image"
							name="image"
							// maxLength={32}
						/>
						{product.image && <Image src={product.image} alt={product.name} width="60" height="60"/>}
					</label>

					<label
						htmlFor="notes"
						className={`${productStyles.label} ${utilStyles.colorText}`}
					>
						{" "}
						<div className={productStyles.labelContainer}>
							<span>Notes</span>
						</div>
						<input
							className={`${productStyles.inputOne}`}
							type="text"
							value={product.notes}
							onChange={handleNotesChange}
							placeholder="e.g. Please buy blue one"
							id="notes"
							name="notes"
							// maxLength={32}
						/>
					</label>
					<button
					type='button'
					className={`${productStyles.longButton}`}
					onClick={handleAddProduct}> Add product </button>
					<button className={`${productStyles.cancelButton}`}onClick={handleClick}> Cancel </button>
				</>
				:
				<>
					<button className={`${productStyles.longButton}`} onClick={handleClick}> Add New Product +</button>
					<ul>
						{products.map((p, index) => (
						<li key={index} id={index}>
							{p.image && <Image src={p.image} alt="Preview" width="60" height="60"/>}
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
