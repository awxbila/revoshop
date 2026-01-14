import { render, screen } from "@testing-library/react";
import Navbar from "@/components/navbar";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

describe("navbar", () => {
  it("renders cart icon", () => {
    render(
      <AuthProvider>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </AuthProvider>
    );

    expect(screen.getByText("🛒")).toBeInTheDocument();
  });
});
