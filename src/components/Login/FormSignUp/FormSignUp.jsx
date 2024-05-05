import React, { useEffect, useState } from "react";
import LogoDefault from "../../../assets/svg/LogoDefault";
import RowInput from "../RowInput/RowInput";
import UseHandleForm from "./UseHandleForm";
import Select from "../../../utilsComponents/Select/Select";
import { useMyNotifs } from "../../../utilsComponents/Notif/useNotifs";
import "./FormSignUp.sass";
import { AnimatePresence } from "framer-motion";
import Hider from "../../../utilsComponents/Hider/Hider";

const FormSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { addNotifs, notifs } = useMyNotifs();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  const stepCount = 4;

  const { backStep, formData, nextStep, moveStep, handleForm, handleInputForm, step } = UseHandleForm(stepCount, [
    null,
    null,
    null,
    handleSubmit,
  ]);

  return (
    <div className="sign_up_form">
      {notifs.map((notifs) => notifs)}
      <AnimatePresence>{loading && <Hider classCss="glassy" loader />}</AnimatePresence>
      <div className="logo">
        <LogoDefault />
      </div>
      <div className="title">Sign up</div>
      <div className="subtitle">Come with us in this incredible journey.</div>
      <div className="slider">
        {[...Array(stepCount).keys()].map((ind) => (
          <div
            key={ind}
            className={`slide ${step === ind + 1 ? "slide_on" : ""}`}
            onClick={() => {
              moveStep(ind + 1);
            }}
          ></div>
        ))}
      </div>
      <form action="" method="post" onSubmit={handleForm}>
        {step === 1 ? (
          <>
            <RowInput
              title="Your email"
              type="email"
              value={formData.email}
              id="email"
              name="email"
              fullWidth
              onChange={handleInputForm}
            />
            <RowInput
              title="Your password"
              type="password"
              required
              value={formData.password}
              id="password"
              name="password"
              fullWidth
              onChange={handleInputForm}
            />
            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}
        {step === 2 ? (
          <>
            <RowInput
              title="Name"
              type="text"
              value={formData.name}
              id="name"
              name="name"
              fullWidth
              onChange={handleInputForm}
            />
            <RowInput
              title="Address"
              type="text"
              value={formData.address}
              id="address"
              name="address"
              fullWidth
              onChange={handleInputForm}
            />
            <RowInput
              title="Date of birth"
              type="date"
              value={formData.dtn}
              id="dtn"
              name="dtn"
              fullWidth
              onChange={handleInputForm}
            />
            <RowInput title="Tel" type="tel" value={formData.tel} id="tel" name="tel" fullWidth onChange={handleInputForm} />
            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}
        {step === 3 ? (
          <>
            <Select title="Profil" optionsType={[]} id="profil" name="profil" fullWidth onChange={handleInputForm} />
            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}
        {step === 4 ? (
          <>
            <RowInput
              title="Picture"
              type="file"
              value={formData.pdp && formData.pdp.length > 0 ? formData.pdp[0] : undefined}
              id="pdp"
              name="pdp"
              fullWidth
              onChange={handleInputForm}
            />
            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="sign_up_link">
          <div className="text">Already have an account ?</div>
          <div className="link">Sign in.</div>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
