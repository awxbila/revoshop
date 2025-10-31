import { getShoesForCategory } from "@/helpers/data";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  const category = request.nextUrl.searchParams.get("category");

  const shoes = await getShoesForCategory(category);

  return NextResponse.json({ shoes });
}
