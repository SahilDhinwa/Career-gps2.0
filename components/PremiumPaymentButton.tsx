"use client";

import { db } from "../lib/firebase"; 
import { doc, setDoc } from "firebase/firestore"; 
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Loader2 } from "lucide-react"; 
import { useAuth } from "../context/AuthContext"; // NEW: Connect to the Global Brain

export default function PremiumPaymentButton() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // NEW: Pull the user and the sync function from the Brain
  const { user, refreshUserData } = useAuth(); 

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePaymentClick = async () => {
    // NEW: Use the user from the Brain instead of checking Firebase directly
    if (!user) {
      router.push("/login");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        setIsProcessing(false);
        return;
      }

      const orderResponse = await fetch("/api/razorpay", { method: "POST" });
      const orderData = await orderResponse.json();

      if (!orderData.orderId) throw new Error("No Order ID returned");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: 999 * 100, 
        currency: "INR",
        name: "Career GPS Premium",
        description: "Unlock all Scholarships & Roadmaps",
        order_id: orderData.orderId,
        handler: async function (response: any) {
          
          try {
            const userRef = doc(db, "users", user.uid);
            
            await setDoc(userRef, {
              isPremium: true,
              paymentId: response.razorpay_payment_id,
              email: user.email 
            }, { merge: true });
            
            // THE FIX: Tell the Brain to sync instantly instead of refreshing the page!
            await refreshUserData();
            
            alert("Payment Successful! Welcome to Premium.");
            
          } catch (error: any) {
            console.error("Firebase update failed", error);
            alert("Payment captured, but database update failed: " + error.message);
          }
        },
        prefill: {
          name: user.displayName || "",
          email: user.email || "",
        },
        theme: {
          color: "#114232", // Updated to match your exact Primary Green variable
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Payment setup failed", error);
      alert("Could not initialize payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button 
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className="w-full bg-primary text-white py-4 px-6 font-bold rounded-sm shadow-lg hover:bg-primaryHover transition-all flex items-center justify-center gap-2"
    >
      {isProcessing ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" /> Securely Connecting...
        </>
      ) : (
        <>
          <Lock className="w-5 h-5" /> 
          Unlock Access for ₹999
        </>
      )}
    </button>
  );
}
