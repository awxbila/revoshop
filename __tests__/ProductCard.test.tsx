import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/ProductCard";

const mockProduct = {
  id: 1,
  title: "Test Product",
  slug: "test-product",
  price: 100000,
  description: "This is a test product description.",
  images: ["https://example.com/image.jpg"],
  category: {
    id: 1,
    name: "Test Category",
    slug: "test-category",
    image: "https://example.com/category.jpg",
  },
};

describe("ProductCard", () => {
  it("should render product details correctly", () => {
    // Arrange
    const mockOnAdd = jest.fn();
    const expectedTitle = "Test Product";
    const expectedPrice = "Rp 100,000";
    const expectedDescription = "This is a test product description.";

    // Act
    render(<ProductCard product={mockProduct} onAdd={mockOnAdd} />);

    // Assert
    expect(screen.getByAltText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(expectedPrice)).toBeInTheDocument();
    expect(screen.getByText(expectedDescription)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /edit/i })).toBeInTheDocument();
  });

  it("should call onAdd when Add To Cart button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    const mockOnAdd = jest.fn();
    const buttonName = /add to cart/i;

    // Act
    render(<ProductCard product={mockProduct} onAdd={mockOnAdd} />);
    const addButton = screen.getByRole("button", { name: buttonName });
    await user.click(addButton);

    // Assert
    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });

  it("should have correct link href", () => {
    // Arrange
    const mockOnAdd = jest.fn();
    const linkName = /edit/i;
    const expectedHref = "/product/1";

    // Act
    render(<ProductCard product={mockProduct} onAdd={mockOnAdd} />);
    const editLink = screen.getByRole("link", { name: linkName });

    // Assert
    expect(editLink).toHaveAttribute("href", expectedHref);
  });
});
