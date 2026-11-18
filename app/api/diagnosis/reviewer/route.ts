
import { NextRequest, NextResponse } from "next/server";

import {
  getReviewerDiseaseData,
} from "../../../../data/diagnosis/serverDatabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SECURITY_HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

export async function GET(request: NextRequest) {
  try {
    // Authorization is enforced inside this function.
    const diseases = await getReviewerDiseaseData();

    const diseaseId = request.nextUrl.searchParams
      .get("diseaseId")
      ?.trim();

    if (!diseaseId) {
      return NextResponse.json(
        { error: "Disease ID is required." },
        {
          status: 400,
          headers: SECURITY_HEADERS,
        }
      );
    }

    const disease = diseases.find(
      (entry) => entry.id === diseaseId
    );

    if (!disease) {
      return NextResponse.json(
        { error: "Disease not found." },
        {
          status: 404,
          headers: SECURITY_HEADERS,
        }
      );
    }

    return NextResponse.json(
      {
        reviewerOnly: true,
        clinicalApproval: false,
        warning:
          "Legacy research material. Not approved for clinical decision-making.",
        disease,
      },
      {
        status: 200,
        headers: SECURITY_HEADERS,
      }
    );
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "UNAUTHORIZED"
    ) {
      return NextResponse.json(
        { error: "Authentication required." },
        {
          status: 401,
          headers: SECURITY_HEADERS,
        }
      );
    }

    if (
      error instanceof Error &&
      error.message === "FORBIDDEN"
    ) {
      return NextResponse.json(
        { error: "Reviewer access required." },
        {
          status: 403,
          headers: SECURITY_HEADERS,
        }
      );
    }

    console.error(
      "Reviewer API failed:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json(
      { error: "Internal server error." },
      {
        status: 500,
        headers: SECURITY_HEADERS,
      }
    );
  }
}
