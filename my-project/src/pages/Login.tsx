import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/authSlice";
import { authService } from "../services/axiosService";
import { FormInput } from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const response = await authService.login({ email, password });
      const token = response.data.token;
      navigate("/dashboard");
      dispatch(loginAction(token));
    } catch (e: any) {
      console.error("Login failed: ", e.response || e);
      alert(e?.response?.data?.error || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-10 rounded shadow-lg w-[30%] bg-white">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Login with us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="Email"
              placeholder="elonmusk@gmail.com"
              type="email"
              datatestid="log-email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <FormInput
              placeholder="enter your password"
              datatestid="log-password"
              label="Password"
              type="password"
              required={true}
              value={password}
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
            label={isLoading ? "Please wait.." : "Login"}
            disabled={isLoading}
          />
        </form>
        <p className="mt-5">
          New user?
          <a className="text-blue-500 ml-2 font-medium" href="/register">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;