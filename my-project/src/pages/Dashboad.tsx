import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { logout } from "../redux/authSlice";
import CustomButton from "../components/Button";

const DashboardPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  // if user is authenticated
  if (!isAuthenticated) return <div>Unauthorized Access. Please sign in.</div>;

  return (
    <div className=" h-[100vh] w-full bg-gray-200 ">
      <div className="bg-white items-center flex justify-between p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <CustomButton
          _hover={{ bg: "#ebedf0" }}
          className="mt-2"
          colorScheme="border"
          variant={"outline"}
          label="Logout"
          onClick={() => dispatch(logout())}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
