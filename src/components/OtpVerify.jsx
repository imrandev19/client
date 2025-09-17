import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";
export default function OtpVerify() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const email = location.state?.email; // ✅ passed from signup
 const dispatch = useDispatch()
  const handleVerify = async (e) => {
    
    e.preventDefault();
    setLoading(true);
    try {
       
       await axios.post("http://localhost:5000/api/auth/otp-verify", {
        email,
        otp,
      }).then((res)=>{
        console.log(res.data.success)
        console.log("otp verified")
        
        dispatch(loginUser(res.data.user));
        // ✅ Save in localStorage
        localStorage.setItem("user", JSON.stringify(res.data.data));
        navigate("/")
      }).catch((err)=>console.log(err))
   
      }
    catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/resend-otp", {
        email,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          OTP Verification
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Enter the 6-digit OTP sent to your email 📩
        </p>

        <form onSubmit={handleVerify} className="mt-6 space-y-5">
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter OTP"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-md"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* 🔁 Resend OTP */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Didn’t receive OTP?{" "}
          <button
            onClick={handleResend}
            disabled={resendLoading}
            className="text-red-600 font-medium hover:underline"
          >
            {resendLoading ? "Resending..." : "Resend OTP"}
          </button>
        </p>
      </div>
    </div>
  );
}
