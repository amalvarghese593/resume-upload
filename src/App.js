import "./App.css";
import { ReviewForm } from "./components/ReviewForm";
import { Route, Routes } from "react-router-dom";
import { Review } from "./components/Review";
import { ResumeUpload } from "./components/ResumeUpload";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ResumeUpload />} />
        <Route path="/form" element={<ReviewForm />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
