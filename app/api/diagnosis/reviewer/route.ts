
import { NextRequest, NextResponse } from "next/server";

import { requireReviewer } from "../../../../lib/auth/reviewer";
import { DISEASE_DATABASE } from "../../../../data/diagnosisDatabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const reviewer = await requireReviewer();

  if (!reviewer) {
    return NextResponse.json(
      { error: "Reviewer access required" },
      {
        status: 403,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }

  const diseaseId =
    request.nextUrl.searchParams.get("diseaseId");

  if (!diseaseId) {
    return NextResponse.json(
      { error: "Disease ID required" },
      { status: 400 }
    );
  }

  const disease = DISEASE_DATABASE.find(
    (item) => item.id === diseaseId
  );

  if (!disease) {
    return NextResponse.json(
      { error: "Record not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      disease,
      clinicalApproval: false,
      reviewerOnly: true,
    },
    {
      headers: {
        "Cache-Control": "private, no-store",
      },
    }
  );
}
