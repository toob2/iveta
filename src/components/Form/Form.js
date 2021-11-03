import React from "react";
import "./Form.scss";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCommentDots, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Form = (props) => {
   // Form validation errors
   const VALIDATION_ERRORS = {
      required: "* Povinný údaj",
   };

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: {},
      resolver: undefined,
      context: undefined,
      criteriaMode: "firstError",
      shouldFocusError: true,
      shouldUnregister: false,
   });

   const triggerToast = () => {
      toast("Formulář odeslán!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: false,
         className: "contact-form__toast",
         toastId: "notifyToast",
      });
   };

   const onSubmit = async (data) => {
      try {
         const templateParams = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.textarea,
         };
         // await emailjs.send(
         //   process.env.REACT_APP_SERVICE,
         //   "template_v9usifk",
         //   templateParams,
         //   process.env.REACT_APP_USER,
         // );
         triggerToast();
         reset();
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <div className="contact-form">
         <Header name="Kontaktní formulář" />
         <form action="" id="form1" className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form__wrapper">
               {/* Name */}
               <div className="contact-form__input">
                  <div className="contact-form__input__icon">
                     <FontAwesomeIcon icon={faUser} size="1x" />
                  </div>
                  <input
                     className="contact-form__input__field"
                     type="text"
                     name="name"
                     placeholder="Jméno"
                     {...register("name", {
                        required: { value: true, message: VALIDATION_ERRORS.required },
                        minLength: {
                           value: 3,
                           message: "Jméno musí mít minimálně 3 znaky",
                        },
                        maxLength: {
                           value: 50,
                           message: "Jméno může mít maximálně 30 znaků",
                        },
                     })}
                  />
               </div>

               {errors.name ? (
                  <span className="contact-form__errorMessage">{errors.name.message}</span>
               ) : (
                  <span className="contact-form__errorMessage--ok">ok</span>
               )}

               {/* Email */}
               <div className="contact-form__input">
                  <div className="contact-form__input__icon">
                     <FontAwesomeIcon icon={faEnvelope} size="1x" />
                  </div>
                  <input
                     className="contact-form__input__field"
                     type="text"
                     name="email"
                     placeholder="Email"
                     {...register("email", {
                        required: {
                           value: true,
                           message: VALIDATION_ERRORS.required,
                        },
                        maxLength: {
                           value: 50,
                           message: "Email může mít maximálně 50 znaků",
                        },
                        pattern: {
                           value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                           message: "Zadejte prosím email ve správném formátu",
                        },
                     })}
                  />
               </div>
               {errors.email ? (
                  <span className="contact-form__errorMessage">{errors.email.message}</span>
               ) : (
                  <span className="contact-form__errorMessage--ok">ok</span>
               )}

               {/* Phone */}
               <div className="contact-form__input">
                  <div className="contact-form__input__icon">
                     <FontAwesomeIcon icon={faPhone} size="1x" />
                  </div>
                  <input
                     className="contact-form__input__field"
                     type="text"
                     name="phone"
                     placeholder="Kontaktní číslo"
                     {...register("phone", {
                        required: {
                           value: true,
                           message: VALIDATION_ERRORS.required,
                        },
                        pattern: {
                           value: /\+?\d+/,
                           message: "Zadejte prosím číslo ve správném formátu",
                        },
                     })}
                  />
                  <span className="contact-form__input__icon"></span>
               </div>

               {errors.phone ? (
                  <span className="contact-form__errorMessage">{errors.phone.message}</span>
               ) : (
                  <span className="contact-form__errorMessage--ok">ok</span>
               )}

               {/* Subject */}
               <div className="contact-form__input">
                  <div className="contact-form__input__icon">
                     <FontAwesomeIcon icon={faChevronRight} size="1x" />
                  </div>
                  <input
                     className="contact-form__input__field"
                     type="text"
                     name="subject"
                     placeholder="Předmět"
                     {...register("subject", {
                        required: {
                           value: true,
                           message: VALIDATION_ERRORS.required,
                        },
                        maxLength: {
                           value: 100,
                           message: "Předmět může mít maximálně 100 znaků",
                        },
                     })}
                  />
               </div>

               {errors.subject ? (
                  <span className="contact-form__errorMessage">{errors.subject.message}</span>
               ) : (
                  <span className="contact-form__errorMessage--ok">ok</span>
               )}

               {/* Textarea */}
               <div className="contact-form__input contact-form__input__textarea">
                  <div className="contact-form__input__icon contact-form__input__icon__textarea">
                     <FontAwesomeIcon icon={faCommentDots} size="1x" />
                  </div>
                  <textarea
                     className="contact-form__input__field contact-form__input__field--textarea"
                     id="textarea"
                     placeholder="Zpráva"
                     name="textarea"
                     cols="30"
                     rows="5"
                     {...register("textarea", {
                        required: {
                           value: true,
                           message: VALIDATION_ERRORS.required,
                        },
                     })}
                  ></textarea>
                  <span className="contact-form__input__icon">
                     <i className="fas fa-comments"></i>
                  </span>
               </div>

               {errors.textarea ? (
                  <span className="contact-form__errorMessage">{errors.textarea.message}</span>
               ) : (
                  <span className="contact-form__errorMessage--ok">ok</span>
               )}

               <div className="form__toast-container">
                  <ToastContainer />
               </div>
            </div>
            {/* Submit button */}
            <div className="contact-form__wrapper">
               <div className="input">
                  <input type="submit" value="Odeslat formulář" className="btn--submit" />
               </div>
            </div>
         </form>
      </div>
   );
};

export default Form;
