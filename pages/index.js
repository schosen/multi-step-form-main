import Head from "next/head";
import Step from "../Components/step";
import Form from "../Components/form/form";
import Welcome from "../Components/form/welcome";
import { useState } from "react";

const stepTitles = ["create wishlist", "add product", "sign up/ login"];

export default function Home() {
	const [showForm, setShowForm] = useState(true);
	const [formData, setFormData] = useState({
    // user: {
    //   first_name: "",
    //   email: "",
    //   last_name: "",
    //   gender: "",
    //   birthday: "",
    // },
    wishlist: {
      title: "",
      description: "",
      occasion_date: "",
      address: "",
      products: [],
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
      setFormData({
        ...formData.wishlist,
        products: info,
      });
    }

    // else if (step == 3) {

    // 	setFormData({
    //       ...formData,
    //       // Probably better to add each individual key:value of user but oh well
    //       user: info,
    //     });
    // }
  }

  // function toggleYearly() {
  // 	setFormData({
  // 		user: { ...formData.user },
  // 		wishlist: { ...formData.wishlist},
  // 		// planInfo: {
  // 		// 	...formData.planInfo,
  // 		// 	timeframe: !formData.planInfo.timeframe,
  // 		// },
  // 		addOnsInfo: { ...formData.addOnsInfo },
  // 	});
  // }

  const handleFormToggle = () => setShowForm(!showForm);

  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Multi-step Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {showForm && <Welcome handleFormToggle={handleFormToggle} />}
        {!showForm && (
          <>
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
              // toggleYearly={toggleYearly}
            />
          </>
        )}
      </main>
    </>
  );
}
