// allow users to return to previous page
import { useNavigate } from "react-router-dom";

const NavigateBackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute b-5 left-5 w-24 h-8 mb-5 border-solid border-emerald-500 border-2 bg-transparent"
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
};

export default NavigateBackButton;
