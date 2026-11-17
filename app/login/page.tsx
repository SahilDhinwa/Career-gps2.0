
import { redirect } from "next/navigation";

export default async function OldLoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    redirect?: string | string[];
    mode?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const query = new URLSearchParams();

  if (typeof params.redirect === "string") {
    query.set("redirect", params.redirect);
  }

  if (params.mode === "batman") {
    query.set("mode", "batman");
  }

  const suffix = query.toString();

  redirect(
    `/account/login${suffix ? `?${suffix}` : ""}`
  );
}
