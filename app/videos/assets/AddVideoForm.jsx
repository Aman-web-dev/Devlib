import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { AuthContext } from "@/utils (Context)/authContext";
import { toast } from "react-toastify";

const initialValues = { title: "", url: "", comment: "", review: "", tags: "" };

const AddVideoForm = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const formRef = useRef();
  const { currentUser } = useContext(AuthContext);

  function extractId(url) {
    return new Promise((resolve, reject) => {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        resolve(match[2]);
      } else {
        reject(null);
      }
    });
  }

  const errorSchema = Yup.object().shape({
    title: Yup.string()
      .min(8, "Title must be greater that 8 characters")
      .max(250, "Title can't exceed 250 characters")
      .required("Please enter a title"),

    url: Yup.string()
      .matches(
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
        "Invalid URL"
      )
      .required("Please enter a Youtube video URL"),
    tags: Yup.string().required("Tags are required"),
    // review: Yup.string().required("Please select one"),
  });

  const handleFormSubmission = async (values, { setSubmitting, resetForm }) => {
    try {
      setIsFormSubmitting(true);

      const id = await extractId(values.url);
      if (id !== null || id !== undefined) {
        const tags = [values.tags];
        try {
          setTimeout(async () => {
            const addVideoResponse = await fetch(
              `http://localhost:4000/addVideo`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: currentUser.uid,
                  title: values.title,
                  vid_id: id,
                  tags: tags,
                }),
              }
            );
            if (addVideoResponse.ok) {
              toast.dark("Your Video is submitted for review!");
              resetForm();
            } else if (!addVideoResponse.ok) {
              toast.error("Something went wrong! please try again later");
            }
            setIsFormSubmitting(false);
          }, 2000);

          //   getYoutubeVideoData();
        } catch (error) {
          console.log("data not added due to: ", error);
          setIsFormSubmitting(false);
        }
      }
    } catch (error) {
      console.log("error while form submission: ", error);
      setIsFormSubmitting(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-2/3 py-12 px-6 ">
      <div className="mb-8">
        <h1 className="font-bold text-2xl">Add a new Youtube Video!</h1>
        <i>Required fields are marked with an asterisk (*).</i>
      </div>
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={errorSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleFormSubmission(values, { setSubmitting, resetForm });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
            </div>
            <div className="w-full">
              <label htmlFor="url" className="">
                Youtube Video Url*
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
                Why you liked the Video{" "}
                <small>
                  <i className="font-normal ">(optional)</i>
                </small>
              </label>
              <Field
                as="textarea"
                type="comment"
                name="comment"
                className="rounded-xl py-2 px-4 outline-none w-full"
                value={values.comment}
              />
            </div>
            {/* <div className="gap-2" id="review"> */}
            {/* <label htmlFor="review">Satisfaction level?*</label>
              <ErrorMessage
                component={"span"}
                name="review"
                className="text-red-600 text-sm"
              />
            </div> */}

            {/* tags */}
            <div className="w-full">
              <label htmlFor="url" className="">
                Tags*{" "}
                <small>
                  <i className="font-normal ">(use comma to separate tags)</i>
                </small>
              </label>
              <input
                type="tags"
                name="tags"
                className="rounded-xl py-2 px-4 outline-none w-full"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tags}
              />
              <ErrorMessage
                component={"span"}
                name="tags"
                className="text-red-600 text-sm"
              />
            </div>
            <button
              className="bg-[#1497c1] py-1 px-4 hover:bg-[#469fbc] rounded-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isFormSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddVideoForm;
