import { formatPrice, pluralize, isNewShoe } from "@/helpers/formatter";

describe("formatPrice", () => {
  it("should format price from cents to dollars", () => {
    // Arrange
    const priceInCents = 1000;
    const expected = "$10";

    // Act
    const result = formatPrice(priceInCents);

    // Assert
    expect(result).toBe(expected);
  });

  it("should format zero price", () => {
    // Arrange
    const priceInCents = 0;
    const expected = "$0";

    // Act
    const result = formatPrice(priceInCents);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("pluralize", () => {
  it("should return singular form for num = 1", () => {
    // Arrange
    const word = "item";
    const num = 1;
    const expected = "1 item";

    // Act
    const result = pluralize(word, num);

    // Assert
    expect(result).toBe(expected);
  });

  it("should return plural form for num > 1", () => {
    // Arrange
    const word = "item";
    const num = 2;
    const expected = "2 items";

    // Act
    const result = pluralize(word, num);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("isNewShoe", () => {
  it("should return true if release date is less than 30 days ago", () => {
    // Arrange
    const recentDate = new Date();
    recentDate.setDate(recentDate.getDate() - 10); // 10 days ago
    const expected = true;

    // Act
    const result = isNewShoe(recentDate);

    // Assert
    expect(result).toBe(expected);
  });

  it("should return false if release date is more than 30 days ago", () => {
    // Arrange
    const oldDate = new Date();
    oldDate.setDate(oldDate.getDate() - 40); // 40 days ago
    const expected = false;

    // Act
    const result = isNewShoe(oldDate);

    // Assert
    expect(result).toBe(expected);
  });
});
