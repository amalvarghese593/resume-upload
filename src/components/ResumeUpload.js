import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./resumeupload.css";

export const ResumeUpload = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [filename, setFilename] = useState("");
  const fileDropHandler = (e) => {
    e.preventDefault();
    inputRef.current.files = e.dataTransfer.files;
    setFilename(e.dataTransfer.files[0].name);
  };
  const fileUpload = () => {
    inputRef.current.click();
  };
  const submitHandler = () => {
    if (inputRef.current?.files?.length) {
      //make api call
      navigate("/review");
    }
  };
  const fileChangeHandler = (e) => {
    setFilename(e.target.files[0].name);
  };

  return (
    <div className="text-start p-3">
      <h2 className="mb-4">Resume upload</h2>
      <div
        className="drop-zone mb-4"
        onDrop={fileDropHandler}
        onDragOver={(e) => e.preventDefault()}
        onClick={fileUpload}
      >
        <span>Drag and drop resume here or click to upload</span>
        {filename && <span>{filename}</span>}
        <input
          type="file"
          name="resume"
          ref={inputRef}
          accept=".pdf,application/pdf,.doc,application/msword,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={fileChangeHandler}
        />
      </div>
      <button className="btn btn-primary" onClick={submitHandler}>
        Upload
      </button>
    </div>
  );
};
