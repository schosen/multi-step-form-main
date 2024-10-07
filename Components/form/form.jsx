import formStyles from "../../styles/Form.module.css";
import { useState } from "react";
import Wishlist from "./wishlist";
import Product from "./product";
import AuthCTA from "./authCta";
import { addToWishList } from '../../utils/localStorage';


export default function Form({
	step,
	setStep,
	formData,
	updateFormData,
}) {

	const [wishlist, setWishlist] = useState({
		...formData.wishlist,
	});

	const [validForm, setValidForm] = useState({
		hasValidTitle: true,
		hasValidName: true,
		hasValidPrice: true,
		hasValidLink: true,
	});
	const [products, setProducts] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		if (step == 1) {
			formValidation();
			updateFormData(wishlist);

		} else if (step == 2) {
			updateFormData(products);

		}

		if (step != 1) {
			setStep((s) => s + 1);
		}
	}

	function handleGoBack() {
		setStep((s) => {
			return s - 1;
		});
	}

	function formValidation() {
		let hasValidTitle;

		wishlist.title == "" ? hasValidTitle = undefined : hasValidTitle = true;
		{console.log("wishlist.title ", wishlist.title)}

		setValidForm({...validForm, hasValidTitle});

		if (
			[
				hasValidTitle,
				// hasValidName,
				// hasValidPrice,
			].every(
				(value) => value == true
			)) {
			setStep((s) => s + 1);
		}
	}

	const handleStoreLocally = () => {
		addToWishList(formData);
		alert('Product added to wish list!');
  	};

	// if (step != 5)
		return (
			<form onSubmit={handleSubmit}>
				{console.log(step)}
				{step == 1 && (

					<Wishlist
						wishlist={wishlist}
						setWishlist={setWishlist}
						validForm={validForm}
					/>

				)}
				{step == 2 && (
					< Product
						products={products}
						setProducts={setProducts}
						validForm={validForm}
						setValidForm={setValidForm}
					/>

				)}
				{step == 3 && (
					<AuthCTA />
				)}

				<div className={formStyles.bottom}>
					<button
						type="button"
						className={
							step >= 2
								? formStyles.buttonGoBack
								: formStyles.firstPage
						}
						onClick={handleGoBack}
					>
						Go Back
					</button>
					{step == 3 ?
					<button
						type="submit"
						className={`${formStyles.bottomButton} ${
							step == 3 && formStyles.buttonConfirm
						}`}
						onClick={handleStoreLocally}
					> Sign in
					</button> :
					<button
						type="submit"
						className={`${formStyles.bottomButton} ${
							step == 3 && formStyles.buttonConfirm
						}`}
					> Next Step
					</button>}
				</div>
			</form>
		);
	// else return (
	// 	<>
	// 	</>
	// );
}
