import Head from "next/head";
import Step from "../Components/step";
import Form from "../Components/form/form";
import Welcome from "../Components/form/welcome";
import { useState } from "react";

const stepTitles = ["create wishlist", "add product", "sign up/ login"];

export default function Home() {
	const [showForm, setShowForm] = useState(true);
	const [formData, setFormData] = useState({

    wishlist: {
      title: "",
      description: "",
      occasion_date: "",
      address: "",
      products: [],
    },

  });
  const [step, setStep] = useState(1);

  function updateFormData(info) {
    if (step == 1) {
      setFormData({
        ...formData,
        wishlist: info,
      });
    } else if (step == 2) {
      setFormData({
        ...formData.wishlist,
        products: info,
      });
    }

  }

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
            />
          </>
        )}
      </main>
    </>
  );
}
