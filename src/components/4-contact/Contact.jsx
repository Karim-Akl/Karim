import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/Animation/Animation - 1720179009244.json";
import contactAnimation from "../../../public/Animation/Animation - 1720180172944.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvwegrp");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex donee"
              style={{ fontSize: "18px", marginTop: "1.7rem"}}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
                className="flex doneee"
              />
              Your message has been sent successfully 
            </p>
          )}
        </form>



        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 340, marginTop: "-90px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;