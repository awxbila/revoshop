"use client";

interface Props {
  page: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination({ page, onPrev, onNext }: Props) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="font-medium text-gray-700">Page {page}</span>
      <button onClick={onNext} className="px-4 py-2 border rounded">
        Next
      </button>
    </div>
  );
}
