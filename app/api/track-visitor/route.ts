// app/api/track-visitor/route.ts
import { NextResponse } from "next/server";

// This POST function acts as your backend server receiver
export async function POST(request: Request) {
  try {
    // 1. Parse the incoming data from the frontend
    const body = await request.json();
    const { name, ip, coords, visits } = body;

    // 2. Log the data to your SERVER console (Users cannot see this in their browser)
    console.log("=== 🚨 NEW VISITOR RECEIVED IN BACKEND 🚨 ===");
    console.log(`👤 Name:   ${name}`);
    console.log(`🌐 IP:     ${ip}`);
    console.log(`📈 Visits: ${visits}`);
    if (coords) {
      console.log(`📍 Coords: Lat ${coords.lat}, Lng ${coords.lng}`);
    }
    console.log("=============================================");

    // TODO: In Phase 3, we will write code here to save this data to a Database!

    // 3. Send a success response back to the frontend
    return NextResponse.json(
      { success: true, message: "Visitor securely logged in backend!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Backend Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process visitor data" },
      { status: 500 }
    );
  }
}
