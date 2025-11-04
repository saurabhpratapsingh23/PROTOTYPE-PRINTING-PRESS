import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mt-6 text-sm text-[#E4E4E7] hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-sm"
    >
      <FiArrowLeft className="text-[#D4AF37]" size={18} />
      <span className="font-medium tracking-wide">Back</span>
    </button>
  );
};

export default BackButton;
