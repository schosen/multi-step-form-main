import utilStyles from "../../styles/utils.module.css";
import formStyles from "../../styles/Form.module.css";
import { useState } from "react";
import User from "./user";
// import SelectPlan from "./selectPlan/selectPlan";
import Wishlist from "./wishlist";
import Product from "./product";
// import PickAddOns from "./pickAddOns/pickAddOns";
import Summary from "./summary";
import AuthCTA from "./authCta";
import {
	nameRegex,
	emailRegex,
	phoneNumberRegex,
	linkRegex,
} from "../../constants/regex/regexConstants";
import { addToWishList } from '../../utils/localStorage';


export default function Form({
	step,
	setStep,
	formData,
	updateFormData,
	// toggleYearly,
}) {

	// const [user, setUser] = useState({
	// 	...formData.user,
	// });

	const [wishlist, setWishlist] = useState({
		...formData.wishlist,
	});

	const [validForm, setValidForm] = useState({
		hasValidTitle: true,
		hasValidName: true,
		hasValidPrice: true,
		hasValidLink: true,
	});

	// const [product, setProduct] = useState([]);
	const [products, setProducts] = useState([]);

	// const [selectPlanInfo, setSelectPlanInfo] = useState({
	// 	...formData.planInfo,
	// });
	// const [addOnsInfo, setAddOnsInfo] = useState({
	// 	...formData.addOnsInfo,
	// });

	function handleSubmit(e) {
		e.preventDefault();
		if (step == 1) {
			formValidation();
			updateFormData(wishlist);
			// updateFormData(selectPlanInfo);

		} else if (step == 2) {
			// updateFormData(addOnsInfo);
			updateFormData(products);

		}

		// else if (step == 3) {
		// 	formValidation();
		// }

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

		// if (step == 1 ) {
		wishlist.title == "" ? hasValidTitle = undefined : hasValidTitle = true;
		{console.log("wishlist.title ", wishlist.title)}
		// }


		//TODO: add validation for other fields
		// let hasValidName = nameRegex.test(user.name);
		// let hasValidEmailAddress = emailRegex.test(user.email);
		// let hasValidPhoneNumber = phoneNumberRegex.test(
		// 	user.phoneNumber
		// );
		// if (user.name == "") hasValidName = undefined;
		// if (user.email == "") hasValidEmailAddress = undefined;
		// if (user.phoneNumber == "") hasValidPhoneNumber = undefined;
		setValidForm({...validForm,
			hasValidTitle
			// hasValidEmailAddress,
			// hasValidPhoneNumber,
		});
		if (
			[
				hasValidTitle,
				// hasValidName,
				// hasValidPrice,
				// hasValidEmailAddress,
				// hasValidPhoneNumber
			].every(
				(value) => value == true
			)) {
			// TODO: this should update wishlist or product
			// updateFormData(user);
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
					// <SelectPlan
					// 	selectPlanInfo={selectPlanInfo}
					// 	setSelectPlanInfo={setSelectPlanInfo}
					// />
				)}
				{step == 2 && (
					< Product
						products={products}
						setProducts={setProducts}
						validForm={validForm}
						setValidForm={setValidForm}
					/>

					// <PickAddOns
					// 	addOns={addOnsInfo}
					// 	setAddOns={setAddOnsInfo}
					// 	yearly={selectPlanInfo.timeframe}
					// />
				)}
				{step == 3 && (
					<AuthCTA />
				)}
				{/* {step == 4 && (
					<Summary
						formData={formData}
						toggleYearly={() => {
							setSelectPlanInfo({
								...selectPlanInfo,
								timeframe: !selectPlanInfo.timeframe,
							});
							toggleYearly();
						}}
					/>
				)} */}
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
					{/* <button
						type="submit"
						className={`${formStyles.bottomButton} ${
							step == 4 && formStyles.buttonConfirm
						}`}
					>
						{step == 4 ? "Confirm" : "Next Step"}
					</button> */}
				</div>
			</form>
		);
	// else return (
	// 	<>
	// 	{/* TODO add sign or login here */}
	// 	<AuthCTA />
	// 	</>
	// );
}
