// app/api/track-visitor/route.ts
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// 1. Initialize Firebase Admin with your Realtime Database URL
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
  });
}

// 2. Access Firebase Realtime Database instead of Firestore
const db = admin.database();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, ip, coords, visits } = body;

    console.log("=== 🚨 NEW VISITOR RECEIVED (Realtime DB) 🚨 ===");
    console.log(`👤 Name:   ${name}`);
    console.log(`🌐 IP:     ${ip}`);
    console.log(`📈 Visits: ${visits}`);

    // 3. Push data into the "visitors" node in Realtime Database
    const visitorsRef = db.ref("visitors");
    const newVisitorRef = visitorsRef.push();
    
    await newVisitorRef.set({
      name: name || "Anonymous",
      ip: ip || "Unknown",
      visits: visits || 1,
      coordinates: coords || "Location Denied",
      visitedAt: new Date().toISOString(),
    });

    console.log(`✅ SUCCESS! Saved ${name} to Realtime Database with key: ${newVisitorRef.key}`);

    return NextResponse.json(
      { success: true, message: "Visitor saved to Realtime Database!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Realtime Database Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save data" },
      { status: 500 }
    );
  }
}
