"use client";

import { auth, db } from "../lib/firebase"; 
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Loader2 } from "lucide-react"; 

export default function PremiumPaymentButton() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  // Helper function to load the Razorpay checkout script seamlessly
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
    const currentUser = auth.currentUser;

    // 1. GATEKEEPER: Force login
    if (!currentUser) {
      router.push("/login");
      return;
    }

    setIsProcessing(true);

    try {
      // 2. Load the Razorpay script
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        setIsProcessing(false);
        return;
      }

      // 3. Ask our secure API for an Order ID
      const orderResponse = await fetch("/api/razorpay", { method: "POST" });
      const orderData = await orderResponse.json();

      if (!orderData.orderId) throw new Error("No Order ID returned");

      // 4. Configure the Razorpay Popup
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: 999 * 100, 
        currency: "INR",
        name: "Career GPS Premium",
        description: "Unlock all Scholarships & Roadmaps",
        order_id: orderData.orderId,
        handler: async function (response: any) {
          // 5. SUCCESS! The user paid. Now we upgrade them in Firebase.
          try {
            const userRef = doc(db, "users", currentUser.uid);
            await updateDoc(userRef, {
              isPremium: true,
              paymentId: response.razorpay_payment_id
            });
            
            // Redirect to a success page or refresh the dashboard
            alert("Payment Successful! Welcome to Premium.");
            window.location.reload(); 
            
          } catch (error) {
            console.error("Firebase update failed", error);
          }
        },
        prefill: {
          name: currentUser.displayName || "",
          email: currentUser.email || "",
        },
        theme: {
          color: "#0F5132", // Your exact primary brand color!
        },
      };

      // 6. Launch the popup
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
      className="w-full bg-primary text-white py-4 font-bold rounded-sm shadow-lg hover:bg-primaryHover transition-all flex items-center justify-center gap-2"
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
