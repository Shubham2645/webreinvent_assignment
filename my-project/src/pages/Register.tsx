import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/authSlice";
import { authService } from "../services/axiosService"; // Adjust the path accordingly
import { useNavigate } from "react-router-dom";
import { FormInput } from "../components/FormInput";
import CustomButton from "../components/Button";

export interface AuthData {
  id: string;
  token: string;
}

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) return;

    setIsLoading(true);

    try {
      const response = await authService.register({ email, password });
      const data: AuthData = response.data;

      dispatch(registerAction(data.token));
      navigate("/dashboard");
    } catch (e) {
      // Show the specific error message as an alert
      alert("Note: Only defined users succeed registration");

      // Optional: You can also log the error to the console for debugging
      console.error("Error during registration:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-10 rounded shadow-lg w-[30%] bg-white">
        <h1 className="text-2xl font-semibold mb-4">Register with us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="Email"
              type="email"
              placeholder="elonmusk@gmail.com"
              datatestid="reg-email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <FormInput
              placeholder="enter your password"
              type="password"
              label="Password"
              datatestid="reg-password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <CustomButton
            _hover={{ bg: "#ebedf0" }}
            className="mt-2"
            width={"full"}
            colorScheme="border"
            variant={"outline"}
            type="submit"
            label={isLoading ? "Please wait..." : "Register"}
          />
        </form>
        <p className="mt-8">
          Existing user ?
          <a className="text-blue-500 ml-2 font-medium" href="/login">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;