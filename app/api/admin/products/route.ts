import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newProduct = {
    id: Date.now(),
    ...body,
  };

  products.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(req: Request) {
  const body = await req.json();

  const index = products.findIndex((p) => p.id === body.id);
  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  products[index] = body;
  return NextResponse.json(body);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const index = products.findIndex((p) => p.id === id);
  products.splice(index, 1);

  return NextResponse.json({ success: true });
}
