import React from "react";
import Form from "../ui/Form";
import { FieldArray, Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import "./reviewform.css";
import { useLocation } from "react-router-dom";

export const ReviewForm = () => {
  const {
    state: { email, phone, education, experience },
  } = useLocation();
  const initialValues = {
    email: email || "",
    phone: phone || "",
    experience: experience || [],
    education: education || [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    phone: Yup.string().required("required"),
    experience: Yup.array().of(Yup.string()),
    education: Yup.array().of(Yup.string()),
  });
  const onSubmit = (props) => {
    console.log({ props });
    alert("submitted");
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  const { values } = formik;

  return (
    <FormikProvider value={formik}>
      <div className="form-container p-5">
        <div className="col-lg-6 col-md-8 col-sm-12 col-12 shadow text-start p-3">
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <Form.Input
              type="email"
              name="email"
              label="Email"
              placeholder="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <Form.Input
              type="text"
              name="phone"
              placeholder="Phone number"
              label="Phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.phone}
              touched={formik.touched.phone}
            />
          </div>
          <label className="mb-3">Work experience</label>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
            <FieldArray
              name="experience"
              render={(arrayHelpers) => (
                <div>
                  {!!values.experience?.length &&
                    values.experience.map((el, index) => (
                      <div key={index} className="d-flex mb-3">
                        <Field
                          className="form-control me-3"
                          name={`experience.${index}`}
                        />
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          x
                        </button>
                      </div>
                    ))}
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => arrayHelpers.push("")}
                  >
                    Add experience
                  </button>
                </div>
              )}
            />
          </div>
          <label className="mb-3">Education</label>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
            <FieldArray
              name="education"
              render={(arrayHelpers) => (
                <div>
                  {!!values.education?.length &&
                    values.education.map((el, index) => (
                      <div key={index} className="d-flex mb-3">
                        <Field
                          className="form-control me-3"
                          name={`education.${index}`}
                        />
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          x
                        </button>
                      </div>
                    ))}
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => arrayHelpers.push("")}
                  >
                    Add education
                  </button>
                </div>
              )}
            />
          </div>
          <div className="text-end">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </FormikProvider>
  );
};
