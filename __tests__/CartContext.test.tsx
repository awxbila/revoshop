import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider, useCart } from "@/context/CartContext";

function TestCart() {
  const { cart, addToCart, increaseQty, decreaseQty, removeFromCart } =
    useCart();

  const product = {
    id: 1,
    title: "Camera",
    price: 100000,
    description: "Test product",
    category: "electronics",
    image: "img.jpg",
  };

  return (
    <div>
      <p data-testid="qty">{cart[0]?.quantity || 0}</p>

      <button onClick={() => addToCart(product)}>Add</button>
      <button onClick={() => increaseQty(1)}>+</button>
      <button onClick={() => decreaseQty(1)}>-</button>
      <button onClick={() => removeFromCart(1)}>Remove</button>
    </div>
  );
}

describe("CartContext", () => {
  it("menambah produk ke cart", () => {
    render(
      <CartProvider>
        <TestCart />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByTestId("qty").textContent).toBe("1");
  });

  it("menambah qty produk", () => {
    render(
      <CartProvider>
        <TestCart />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("+"));

    expect(screen.getByTestId("qty").textContent).toBe("2");
  });

  it("menghapus produk dari cart", () => {
    render(
      <CartProvider>
        <TestCart />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Remove"));

    expect(screen.getByTestId("qty").textContent).toBe("0");
  });
});
