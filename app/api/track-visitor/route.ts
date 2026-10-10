// app/api/track-visitor/route.ts
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// 1. Initialize Firebase strictly for Firestore
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

// 2. THE FIX: Explicitly target the "(default)" database shown in your Firebase console
db.settings({ 
  preferRest: true, 
  databaseId: "(default)", 
  ignoreUndefinedProperties: true 
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, ip, coords, visits } = body;

    console.log("=== 🚨 STRICT FIRESTORE TRACKER ENGAGED 🚨 ===");
    console.log(`👤 Name:   ${name}`);
    console.log(`🌐 IP:     ${ip}`);
    console.log(`📈 Visits: ${visits}`);

    // 3. Save directly to Cloud Firestore
    const docRef = await db.collection("visitors").add({
      name: name || "Anonymous",
      ip: ip || "Unknown",
      visits: visits || 1,
      coordinates: coords || "Location Denied",
      visitedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`✅ SUCCESS! Saved ${name} to FIRESTORE with ID: ${docRef.id}`);

    return NextResponse.json(
      { success: true, message: "Visitor saved to Firestore successfully!" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Firestore Error:", error.message);
    return NextResponse.json(
      { success: false, error: "Failed to save data" },
      { status: 500 }
    );
  }
}
