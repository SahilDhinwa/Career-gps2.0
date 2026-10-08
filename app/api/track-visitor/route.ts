// app/api/track-visitor/route.ts
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// 1. Initialize Firebase Admin safely
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
}

const db = admin.firestore();

// 2. THE FIX: Force Vercel to use standard HTTP REST instead of failing gRPC
db.settings({ preferRest: true });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, ip, coords, visits } = body;

    console.log("=== 🚨 NEW VISITOR RECEIVED IN BACKEND 🚨 ===");
    console.log(`👤 Name:   ${name}`);
    console.log(`🌐 IP:     ${ip}`);
    
    // 3. Save the data into Firestore
    const docRef = await db.collection("visitors").add({
      name: name || "Anonymous",
      ip: ip || "Unknown",
      visits: visits || 1,
      coordinates: coords || "Location Denied",
      visitedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`✅ SUCCESS! Saved ${name} to Firebase with ID: ${docRef.id}`);

    return NextResponse.json(
      { success: true, message: "Visitor saved!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Firebase Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save data" },
      { status: 500 }
    );
  }
}
