import { createElement, useRef,useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

Modal.setAppElement("#root");
const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-center">
        <img
            src={Contact.whtasappQr}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
        
        <div className="flex justify-center">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => {
              return(
                <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                {
                  !content.modal &&
                  <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
                }
                {
                  content.modal &&
                  <a  className="text-white font-Poppins"
                  onMouseOver={() => {
                    openModal();
                  }}
                  >{content.text}</a>
                }
                
              </div>
              )
              
})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
