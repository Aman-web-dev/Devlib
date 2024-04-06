import React from "react";
import { ErrorMessage, Field, Formik } from "formik";

const AddNewArticles = () => (
  <div className="w-2/3 py-12 px-6">
    <div className="mb-8">
      <h1 className="font-bold text-2xl">Add New Article!</h1>
      <i>Required fields are marked with an asterisk (*).</i>
    </div>
    <Formik
      initialValues={{ title: "", url: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Required";
        } else if (!/[A-Z][a-z]+/g.test(values.title)) {
          errors.title = "Invalid title address";
        }
        if (!values.url) {
          errors.url = "Required";
        } else if (
          !/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g.test(
            values.url
          )
        ) {
          errors.url = "Invalid URL";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-4 px-2"
        >
          <div className="w-full">
            <label
              htmlFor="title"
              className="text-normal font-semibold tracking-wider"
            >
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
            <label
              htmlFor="url"
              className="text-normal font-semibold tracking-wider"
            >
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
          {/* {errors.url && touched.url && errors.url} */}
          <button
            className="bg-[#1497c1] py-1 px-4 hover:bg-[#469fbc] rounded-full"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default AddNewArticles;
