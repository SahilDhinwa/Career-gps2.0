import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// Initialize Razorpay with your hidden secret keys
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: Request) {
  try {
    // 1. Create an order for ₹999 (Razorpay expects the amount in paise, so multiply by 100)
    const order = await razorpay.orders.create({
      amount: 999 * 100, 
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });

    // 2. Send the secure Order ID back to the frontend
    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error) {
    console.error("Razorpay Error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
