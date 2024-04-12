import React, { useContext, useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { FaSadCry } from "react-icons/fa";
import { RiEmotionNormalFill } from "react-icons/ri";
import { IoHappySharp } from "react-icons/io5";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { serverUrl } from "@/utils (Context)/constants";
import { AuthContext } from "@/utils (Context)/authContext";

const AddNewArticles = () => {
  const [userReview, setUserReview] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleReviewSelection = (value) => {
    setUserReview(value);
  };
  const errorSchema = Yup.object().shape({
    title: Yup.string()
      .min(8, "Title must be greater that 8 characters")
      .max(60, "Title can't exceed 60 characters")
      .required("Please enter a title"),

    url: Yup.string()
      .matches(
        /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
        "Invalid URL"
      )
      .required("Please enter a Article URL"),
    review: Yup.string().required("Please select one"),
  });

  const handleFormSubmission = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("handle form submission");
      const response = await fetch(serverUrl + "/api/addNewArticle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser.uid,
          title: values.title,
          url: values.url,
          comment: values.comment,
          review: values.review,
        }),
      });
      // console.log(response);
      if (response.ok) {
        toast.dark("Article is submitted for review.");
        resetForm();
      }
    } catch (error) {
      console.log("error while adding article in article bucket: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-2/3 py-12 px-6">
      <div className="mb-8">
        <h1 className="font-bold text-2xl">Add New Article!</h1>
        <i>Required fields are marked with an asterisk (*).</i>
      </div>
      <Formik
        initialValues={{ title: "", url: "", comment: "", review: "" }}
        validationSchema={errorSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleFormSubmission(values, { setSubmitting, resetForm });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-4 px-2"
          >
            <div className="w-full">
              <label htmlFor="title" className="">
                Title*
              </label>
              <input
                type="title"
                name="title"
                className="rounded-xl py-2 px-4 outline-none w-full"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <ErrorMessage
                component={"span"}
                name="title"
                className="text-red-600 text-sm"
              />
              {/* {errors.title && touched.title && errors.title} */}
            </div>
            <div className="w-full">
              <label htmlFor="url" className="">
                Article Url*
              </label>
              <input
                type="url"
                name="url"
                className="rounded-xl py-2 px-4 outline-none w-full"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
              />
              <ErrorMessage
                component={"span"}
                name="url"
                className="text-red-600 text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="comment" className="">
                Why you liked the Article{" "}
                <i className="font-normal text-sm">(optional)</i>
              </label>
              <Field
                as="textarea"
                type="comment"
                name="comment"
                className="rounded-xl py-2 px-4 outline-none w-full"
                value={values.comment}
              />
            </div>
            <div className="gap-2" id="review">
              <label htmlFor="review">Satisfaction level?*</label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleReviewSelection("1");
                    handleChange("review")("1");
                  }}
                >
                  <FaSadCry
                    className={`${
                      values.review === "1" && "text-yellow-400"
                    } w-6 h-6`}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleReviewSelection("2");
                    handleChange("review")("2");
                  }}
                >
                  <RiEmotionNormalFill
                    className={`${
                      values.review === "2" && "text-yellow-400"
                    } w-7 h-7`}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleReviewSelection("3");
                    handleChange("review")("3");
                  }}
                >
                  <IoHappySharp
                    className={`${
                      values.review === "3" && "text-yellow-400"
                    } w-7 h-7`}
                  />
                </button>
              </div>
              <ErrorMessage
                component={"span"}
                name="review"
                className="text-red-600 text-sm"
              />
            </div>

            <button
              className="bg-[#1497c1] py-1 px-4 hover:bg-[#469fbc] rounded-full"
              type="submit"
              disabled={isSubmitting}
              // onClick={notify}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewArticles;
