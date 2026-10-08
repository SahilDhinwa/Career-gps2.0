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
    // Explicitly routing to your database URL to fix the 5 NOT_FOUND error for older projects
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`
  });
}

// 2. Get access to your Firestore Database
const db = admin.firestore();

export async function POST(request: Request) {
  try {
    // 3. Receive the data sent from your frontend
    const body = await request.json();
    const { name, ip, coords, visits } = body;

    // --- YOUR DETAILED SERVER LOGS ---
    console.log("=== 🚨 NEW VISITOR RECEIVED IN BACKEND 🚨 ===");
    console.log(`👤 Name:   ${name}`);
    console.log(`🌐 IP:     ${ip}`);
    console.log(`📈 Visits: ${visits}`);
    if (coords && coords.lat) {
      console.log(`📍 Coords: Lat ${coords.lat}, Lng ${coords.lng}`);
    } else {
      console.log(`📍 Coords: Location Denied / IP Fallback`);
    }
    console.log("=============================================");

    // 4. Save the data into a Firebase collection named "visitors"
    const docRef = await db.collection("visitors").add({
      name: name || "Anonymous",
      ip: ip || "Unknown",
      visits: visits || 1,
      coordinates: coords || "Location Denied",
      visitedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`✅ SUCCESS! Saved ${name} to Firebase with ID: ${docRef.id}`);

    // 5. Send success response back to the frontend
    return NextResponse.json(
      { success: true, message: "Visitor saved to Firebase Database!" },
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
