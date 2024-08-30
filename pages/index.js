import Head from "next/head";
import Step from "../Components/step";
import Form from "../Components/form/form";
import { useState } from "react";

const stepTitles = ["your info", "select plan", "add-ons", "summary"];

export default function Home() {
	const [formData, setFormData] = useState({
    user: {
      first_name: "",
      email: "",
      last_name: "",
      gender: "",
      birthday: "",
    },
    wishlist: {
      title: "",
      description: "",
      occasion_date: "",
      address: "",
      products: [{

      }],
    },

    // planInfo: { cardOption: 0, timeframe: false },
    // addOnsInfo: {
    //   "Online service": true,
    //   "Larger storage": true,
    //   "Customizable profile ": false,
    // },

    // products:{name: "", link: "", priority: "", price: "", image: "what data type?", notes: ""},
  });
	const [step, setStep] = useState(1);

	function updateFormData(info) {
		if (step == 1) {

			setFormData({
				...formData,
				// planInfo: info,
				wishlist: info,
      		});

		} else if (step == 2) {
			// setFormData({
			// 	...formData,
			// 	addOnsInfo: info,
			// });
			setFormData({
				...formData.wishlist,
				products: [info],
			});
			// here is where I add the key, value for products array
    	} else if (step == 3) {

			setFormData({
              ...formData,
              // Probably better to add each individual key:value of user but oh well
              user: info,
            });
		}
	}

	function toggleYearly() {
		setFormData({
			user: { ...formData.user },
			wishlist: { ...formData.wishlist},
			// planInfo: {
			// 	...formData.planInfo,
			// 	timeframe: !formData.planInfo.timeframe,
			// },
			addOnsInfo: { ...formData.addOnsInfo },
		});
	}

	return (
		<>
			<Head>
				<title>Multi Step Form</title>
				<meta name="description" content="Multi-step Form" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main>
				<aside>
					{stepTitles.map((title, i) => {
						return (
							<Step key={title} step={step} stepNumber={i + 1}>
								{title}
							</Step>
						);
					})}
				</aside>
				<Form
					step={step}
					setStep={setStep}
					formData={formData}
					updateFormData={updateFormData}
					toggleYearly={toggleYearly}
				/>
			</main>
		</>
	);
}
