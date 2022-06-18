import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckBoxGroup from "../ui/CheckBox";
import "./review.css";

export const Review = () => {
  const navigate = useNavigate();

  const apiResponse = {
    email: "123@test.com",
    phone: "973883282",
    experience: [
      { company: "comp1", job: "junior developer", years: "2" },
      { company: "comp2", job: "developer", years: "5" },
      { company: "comp3", job: "senior developer", years: "3" },
    ],
    education: [{ degree: "BCA" }, { degree: "MCA" }, { degree: "PhD" }],
  };
  const [data, setData] = useState({
    email: apiResponse.email,
    phone: apiResponse.phone,
    experience: [],
    education: [],
  });
  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);
  const nextHandler = () => {
    navigate("/form", { state: data });
  };

  return (
    <div className="review-wrapper text-start">
      <h2>Review your resume</h2>
      <div className="shadow row email-phone-wrapper mb-5">
        <div className="col-lg-3 col-12 email-phone-container">
          <label htmlFor="email">Email</label>
          <span>{apiResponse.email}</span>
        </div>
        <div className="col-lg-3 col-12 email-phone-container">
          <label htmlFor="phone">Phone number</label>
          <span>{apiResponse.phone}</span>
        </div>
      </div>
      <div className="shadow p-3 mb-5">
        <CheckBoxGroup
          name={"experience"}
          label="Work experience"
          setData={setData}
        >
          {apiResponse.experience.map((item, idx) => (
            <CheckBoxGroup.Item value={item.years} key={idx}>
              {`${item.company} ${item.job} ${item.years} Years`}
            </CheckBoxGroup.Item>
          ))}
        </CheckBoxGroup>
      </div>
      <div className="shadow p-3 mb-5">
        <CheckBoxGroup name={"education"} label="Education" setData={setData}>
          {apiResponse.education.map((item) => (
            <CheckBoxGroup.Item value={item.degree} key={item.degree}>
              {item.degree}
            </CheckBoxGroup.Item>
          ))}
        </CheckBoxGroup>
      </div>
      <div className="text-end mb-5">
        <button className="btn btn-primary" onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};
