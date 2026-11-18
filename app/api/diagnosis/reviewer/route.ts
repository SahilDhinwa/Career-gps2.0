
import { NextRequest, NextResponse } from "next/server";

import { requireReviewer } from "../../../../lib/auth/reviewer";
import { DISEASE_DATABASE } from "../../../../data/diagnosisDatabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    await requireReviewer();

    const diseaseId =
      request.nextUrl.searchParams.get("diseaseId");

    if (!diseaseId) {
      return NextResponse.json(
        { error: "Disease ID is required." },
        {
          status: 400,
          headers: { "Cache-Control": "no-store" },
        }
      );
    }

    const disease = DISEASE_DATABASE.find(
      (entry) => entry.id === diseaseId
    );

    if (!disease) {
      return NextResponse.json(
        { error: "Disease not found." },
        {
          status: 404,
          headers: { "Cache-Control": "no-store" },
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
        headers: {
          "Cache-Control": "private, no-store",
          "X-Content-Type-Options": "nosniff",
        },
      }
    );
  } catch (error) {
    const status =
      error instanceof Error &&
      error.message === "FORBIDDEN"
        ? 403
        : 401;

    return NextResponse.json(
      {
        error:
          status === 403
            ? "Reviewer access required."
            : "Authentication required.",
      },
      {
        status,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }
}
