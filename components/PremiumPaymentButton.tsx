"use client";

import { auth } from "../../lib/firebase"; // Your firebase instance
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock } from "lucide-react"; // Nice iconography

export default function PremiumPaymentButton() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentClick = async () => {
    // 1. THE GATEKEEPER CHECK
    const currentUser = auth.currentUser;

    if (!currentUser) {
      // If not logged in, force them to the login page
      router.push("/login");
      return;
    }

    // 2. IF LOGGED IN: Proceed to payment
    setIsProcessing(true);
    try {
      console.log("Proceeding to Stripe/Razorpay payment...");
      // Add your payment gateway trigger here
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button 
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className="w-full bg-primary text-white py-4 font-bold rounded-sm shadow-lg hover:bg-primaryHover transition-all flex items-center justify-center gap-2"
    >
      {isProcessing ? "Processing..." : (
        <>
          <Lock className="w-5 h-5" /> 
          Unlock Access for ₹999
        </>
      )}
    </button>
  );
}

