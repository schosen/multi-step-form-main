import utilStyles from "../../styles/utils.module.css";
import personalStyles from "../../styles/Wishlist.module.css";

export default function Wishlist({
	wishlist,
	setWishlist,
	validForm,
}) {

	function handleTitleChange(e) {
		setWishlist({
			...wishlist,
			title: e.target.value,
		});
	}
	function handleDescriptionChange(e) {
		setWishlist({
			...wishlist,
			description: e.target.value,
		});
	}
	function handleOccasionDateChange(e) {
		setWishlist({
			...wishlist,
			occasion_date: e.target.value,
		});
	}
	function handleAddressChange(e) {
		setWishlist({
			...wishlist,
			address: e.target.value,
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
				Create a Wishlist
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					Provide a wishlist title and details
				</legend>
				<label
					htmlFor="title"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Title</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName &&
                            utilStyles.containerError
						}`}
						type="text"
						value={wishlist.title}
						onChange={handleTitleChange}
						placeholder="e.g. Birthday Wishlist"
						id="title"
						name="title"
						// maxLength={32}
					/>
				</label>
				<label
					htmlFor="description"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Description</span>
						{/* {getError(validForm.hasValidEmailAddress)} */}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName &&
							utilStyles.containerError
						}`}
						type="text"
						value={wishlist.description}
						onChange={handleDescriptionChange}
						placeholder="e.g. what I want for my bday"
						id="description"
						name="description"
					/>
				</label>

				<label
					htmlFor="occasionDate"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Occasion Date</span>
						{/* {getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)} */}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName &&
                            utilStyles.containerError
						}`}
						type="date"
						value={wishlist.occasion_date}
						onChange={handleOccasionDateChange}
						// placeholder="e.g. Doe"
						id="occasionDate"
						name="occasionDate"
						// maxLength={32}
					/>
				</label>

				<label
					htmlFor="address"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Address</span>
						{/* {getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)} */}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName &&
                            utilStyles.containerError
						}`}
						type="text"
						value={wishlist.address}
						onChange={handleAddressChange}
						placeholder="e.g. 21 Simple Late, Q78 59T"
						id="address"
						name="address"
						// maxLength={32}
					/>
				</label>



			</fieldset>
		</>
	);
}
