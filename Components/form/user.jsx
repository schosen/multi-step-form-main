import utilStyles from "../../styles/utils.module.css";
import personalStyles from "../../styles/User.module.css";

export default function User({
	user,
	setUser,
	validForm,
}) {

	const genderOptions = ["male", "female", "other"];

	function handleFirstNameChange(e) {
		setUser({
			...user,
			first_name: e.target.value,
		});
	}
	function handleEmailChange(e) {
		setUser({
			...user,
			email: e.target.value,
		});
	}
	function handleLastNameChange(e) {
		setUser({
			...user,
			last_name: e.target.value,
		});
	}
	function handleGenderChange(e) {
		setUser({
			...user,
			gender: e.target.value,
		});
	}
	function handleBirthdayChange(e) {
		setUser({
			...user,
			birthday: e.target.value,
		});
	}
	function handlePhoneNumberChange(e) {
		setUser({
			...user,
			phoneNumber: e.target.value,
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
				Personal info
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					Please provide your name, email address, and phone number.
				</legend>
				<label
					htmlFor="firstName"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>First Name</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="text"
						value={user.first_name}
						onChange={handleFirstNameChange}
						placeholder="e.g. John"
						id="firstName"
						name="firstName"
						maxLength={32}
					/>
				</label>
				<label
					htmlFor="email"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Email Address</span>
						{getError(validForm.hasValidEmailAddress)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidEmailAddress &&
							utilStyles.containerError
						}`}
						type="email"
						value={user.email}
						onChange={handleEmailChange}
						placeholder="e.g. stephenking@lorem.com"
						id="email"
						name="email"
					/>
				</label>
				<label
					htmlFor="lastName"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Last Name</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="text"
						value={user.last_name}
						onChange={handleLastNameChange}
						placeholder="e.g. Doe"
						id="lastName"
						name="lastName"
						maxLength={32}
					/>
				</label>

				<label
					htmlFor="gender"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Gender</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<select className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						id="gender"
						name="gender"
						value={user.gender}
						onChange={handleGenderChange}>
							<option value="" disabled>Select your option</option>
							{genderOptions.map((gender, index) => (
								<>
								<option value={gender}>
									{gender}
								</option>
								</>
							))};

					</select>
					{/* <input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="text"
						value={user.gender}
						onChange={handleGenderChange}
						placeholder="e.g. Male"
						id="gender"
						name="gender"
						maxLength={32}
					/> */}
				</label>


				<label
					htmlFor="birthday"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Birthday</span>
						{/* {getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)} */}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="date"
						value={user.birthday}
						onChange={handleBirthdayChange}
						// placeholder="e.g. Doe"
						id="birthday"
						name="birthday"
						// maxLength={32}
					/>
				</label>


				{/* <label
					htmlFor="phoneNumber"
					className={`
					${personalStyles.label}
					 ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Phone Number</span>
						{getError(validForm.hasValidPhoneNumber)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidPhoneNumber &&
							utilStyles.containerError
						}`}
						type="tel"
						placeholder="e.g. +1 234 567 890"
						value={user.phoneNumber}
						onChange={handlePhoneNumberChange}
						id="phoneNumber"
						name="phoneNumber"
					/>
				</label> */}
			</fieldset>
		</>
	);
}
