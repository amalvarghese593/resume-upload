import React, { cloneElement, Fragment, Children, setData } from "react";

const CheckBoxGroup = ({ name, children, onChange, setData, label }) => {
  const renderChildren = () => {
    return Children.map(children, (child) => {
      return cloneElement(child, {
        name: name,
        onChange: onChange,
        setData,
      });
    });
  };

  return (
    <div className="text-start">
      {label && <h5>{label}</h5>}
      <div className="d-flex flex-column">{renderChildren()}</div>
    </div>
  );
};

const Item = ({ name, value, children, onChange, setData }) => {
  return (
    <Fragment>
      <div className="p-3 d-flex align-items-center gap-3">
        <input
          type="checkbox"
          name={name}
          value={value}
          id={name + "" + value}
          onChange={(e) => {
            const isChecked = e.target.checked;
            if (isChecked) {
              setData((prev) => {
                return {
                  ...prev,
                  [name]: [...prev[name], value],
                };
              });
            } else {
              setData((prev) => ({
                ...prev,
                [name]: prev[name].filter((el) => el !== value),
              }));
            }
          }}
        />
        <label htmlFor={name + "" + value}>{children}</label>
      </div>
    </Fragment>
  );
};

CheckBoxGroup.Item = Item;

export default CheckBoxGroup;
