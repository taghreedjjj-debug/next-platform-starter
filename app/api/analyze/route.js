
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { answers } = body;

  // 🔹 هنا لاحقًا ندخل AI حقيقي
  // حاليًا mock response (تجربة)
  const result = {
    diagnosis: "strong",
    negotiation: "average",
    followup: "needs-work"
  };

  return NextResponse.json(result);
}
