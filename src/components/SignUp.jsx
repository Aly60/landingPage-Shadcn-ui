// src/components/SignUp.jsx
import { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { Input, Button } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";

const SignUp = forwardRef(({ setIsSignUpVisible }, ref) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);

  const validateForm = () => {
    let isValid = true;
    let errors = { email: "", password: "" };

    if (!email.includes("@")) {
      errors.email = "البريد الإلكتروني غير صالح.";
      isValid = false;
    }

    if (password.length < 6) {
      errors.password = "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.";
      isValid = false;
    }

    setErrors(errors);
    setShowErrorBanner(!isValid);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowErrorBanner(false);
      setIsSignUpVisible(false); // Close the modal on successful form submission
      // Perform the actual form submission logic here
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      if (errors.email) {
        setErrors({ ...errors, email: "" });
      }
    } else if (name === "password") {
      setPassword(value);
      if (errors.password) {
        setErrors({ ...errors, password: "" });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent clicks from closing the modal
  };

  return (
    <>
      {/* Error Banner */}
      {showErrorBanner && (
        <div className="fixed top-0 inset-x-0 bg-red-600 text-white text-center py-3 z-50 shadow-lg">
          <p className="text-lg font-semibold">
            يرجى تصحيح الأخطاء الموجودة في النموذج
          </p>
        </div>
      )}

      {/* SignUp Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-800/60 z-40"
        onClick={() => setIsSignUpVisible(false)}
      >
        <div
          ref={ref}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative border border-gray-300"
          onClick={handleModalClick} // Stop clicks inside the modal from propagating
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            تسجيل الدخول
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Input
                type="text"
                name="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-6 relative">
              <Input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors"
            >
              تسجيل الدخول
            </Button>
          </form>
        </div>
      </div>
    </>
  );
});

SignUp.propTypes = {
  setIsSignUpVisible: PropTypes.func.isRequired,
};

SignUp.displayName = "SignUp";

export default SignUp;
