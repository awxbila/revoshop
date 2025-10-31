import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductList from "../components/ProductList";

const mockProducts = [
  {
    id: 1,
    title: "Product 1",
    slug: "product-1",
    price: 100000,
    description: "Desc 1",
    images: ["img1.jpg"],
    category: {
      id: 1,
      name: "Cat 1",
      slug: "cat-1",
      image: "cat1.jpg",
    },
  },
  {
    id: 2,
    title: "Product 2",
    slug: "product-2",
    price: 200000,
    description: "Desc 2",
    images: ["img2.jpg"],
    category: {
      id: 2,
      name: "Cat 2",
      slug: "cat-2",
      image: "cat2.jpg",
    },
  },
];

describe("ProductList", () => {
  it("should render no products when array is empty", () => {
    // Arrange
    const mockOnAdd = jest.fn();
    const emptyProducts: any[] = [];

    // Act
    render(<ProductList products={emptyProducts} onAdd={mockOnAdd} />);

    // Assert
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByText("Product")).not.toBeInTheDocument();
  });

  it("should render correct number of ProductCard components", () => {
    // Arrange
    const mockOnAdd = jest.fn();

    // Act
    render(<ProductList products={mockProducts} onAdd={mockOnAdd} />);

    // Assert
    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(
      screen.getAllByRole("button", { name: /add to cart/i })
    ).toHaveLength(2);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("should pass onAdd to each ProductCard", async () => {
    // Arrange
    const user = userEvent.setup();
    const mockOnAdd = jest.fn();

    // Act
    render(<ProductList products={mockProducts} onAdd={mockOnAdd} />);
    const addButtons = screen.getAllByRole("button", { name: /add to cart/i });
    await user.click(addButtons[0]);

    // Assert
    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });
});
