"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import { useWatch } from "react-hook-form";
import { ButtonBase } from "@/components/Form";

export const ProductSizeSelector: FC<{
  sizes: { label: string; price: number }[];
  currentColor: string;
  defaultValue: string;
  selectProps?: any;
}> = ({ sizes, currentColor, defaultValue, selectProps }) => (
  <div className="text-sm text-gray-600 flex items-center space-x-4 mb-4">
    <span className="uppercase font-semibold">SIZE:</span>
    <select
      defaultValue={defaultValue}
      {...selectProps}
      className="font-semibold border-none focus:ring-0 p-0 text-gray-700"
    >
      {sizes.map((s) => (
        <option key={s.label} value={s.label}>
          {s.label}
        </option>
      ))}
    </select>
    <span className="uppercase text-gray-600 ml-4 font-semibold">
      COLOR: <span className="font-semibold text-gray-700">{currentColor}</span>
    </span>
  </div>
);

export const ProductVisualCard: FC<{
  images: string[];
  productName: string;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectDot: (index: number) => void;
}> = ({ images, productName, activeIndex, onPrev, onNext, onSelectDot }) => (
  <div className="relative w-full mb-6 p-4 rounded-xl shadow-md border border-gray-100 bg-white">
    <div className="flex justify-center">
      <Image
        src={images[activeIndex]}
        alt={productName}
        width={240}
        height={240}
        sizes="240px"
        className="rounded-xl object-cover"
        priority
      />
    </div>

    <ButtonBase
      type="button"
      className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition p-1"
      aria-label="Previous Product"
      onClick={onPrev}
    >
      <ArrowLeft size={16} />
    </ButtonBase>
    <ButtonBase
      type="button"
      className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition p-1"
      aria-label="Next Product"
      onClick={onNext}
    >
      <ArrowLeft size={16} className="rotate-180" />
    </ButtonBase>

    <ButtonBase
      type="button"
      className="absolute top-2 right-2 p-1 rounded-full bg-white hover:bg-gray-100 transition shadow"
      aria-label="Remove Item"
      onClick={() => alert("Remove action demo")}
    >
      <X size={16} className="text-gray-500" />
    </ButtonBase>

    <div className="flex justify-center mt-2 space-x-1">
      {Array.from({ length: images.length }).map((_, i) => (
        <button
          key={i}
          aria-label={`Select product ${i + 1}`}
          className={`w-2 h-2 rounded-full ${
            i === activeIndex ? "bg-gray-700" : "bg-gray-300"
          }`}
          onClick={() => onSelectDot(i)}
        />
      ))}
    </div>
  </div>
);

const OrderSummary: FC = () => {
  const product = {
    id: "sku-001",
    name: "Nike Sportswear Men's T-Shirt",
    color: "Red",
    images: [
      "https://placehold.co/240x240/dc3545/ffffff?text=NIKE-1",
      "https://placehold.co/240x240/dc3545/ffffff?text=NIKE-2",
      "https://placehold.co/240x240/dc3545/ffffff?text=NIKE-3",
    ],
    sizes: [
      { label: "S", price: 99 },
      { label: "M", price: 109 },
      { label: "L", price: 119 },
      { label: "XL", price: 129 },
    ],
    qty: 1,
  };

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const prev = () =>
    setActiveImageIndex(
      (i) => (i - 1 + product.images.length) % product.images.length
    );
  const next = () =>
    setActiveImageIndex((i) => (i + 1) % product.images.length);
  const selectDot = (i: number) => setActiveImageIndex(i);

  const watchedSize = useWatch({ name: "order.size" });
  const sizeIndex = product.sizes.findIndex((s) => s.label === watchedSize);
  const effectiveSizeIndex = sizeIndex >= 0 ? sizeIndex : 2;
  const unitPrice = product.sizes[effectiveSizeIndex].price;
  const shipping = 0;
  const taxes = 0;
  const subtotal = unitPrice * product.qty;
  const total = subtotal + shipping + taxes;

  const formatCurrency = (amount: number) => `$${amount}`;

  const productName = product.name;

  return (
    <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-4">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">Order</h2>

      <ProductVisualCard
        images={product.images}
        productName={productName}
        activeIndex={activeImageIndex}
        onPrev={prev}
        onNext={next}
        onSelectDot={selectDot}
      />

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          {productName}
        </h3>
        <ProductSizeSelector
          sizes={product.sizes}
          currentColor={product.color}
          defaultValue={product.sizes[2].label}
        />
        <p className="text-xl font-semibold text-gray-900 mt-2">
          {formatCurrency(unitPrice)}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-300">
        <div className="flex justify-between text-base text-gray-700 mb-3">
          <span>SUBTOTAL</span>
          <span className="font-semibold">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-base text-gray-700 mb-4">
          <span>SHIPPING</span>
          <span className="font-semibold text-gray-700">Free</span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-300">
        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>TOTAL</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <ButtonBase
        type="submit"
        className="w-full mt-8 p-4 bg-blue-600 text-white text-lg rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
      >
        Checkout →
      </ButtonBase>

      <div className="mt-4 flex items-center justify-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          defaultChecked
          className={`form-checkbox w-5 h-5 rounded transition duration-150 text-blue-600 focus:ring-blue-500`}
        />
        <label htmlFor="terms" className="text-sm text-gray-500">
          by confirming the order, I accept the
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium ml-1"
          >
            terms of the user agreement
          </a>
        </label>
      </div>
      <input type="hidden" defaultValue={product.id} />
      <input type="hidden" defaultValue={product.color} />
      <input type="hidden" defaultValue={product.qty} />
    </div>
  );
};

export default OrderSummary;
