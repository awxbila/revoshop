export const COLORS = {
  white: "0deg 0% 100%",
  gray: {
    100: "185deg 5% 95%",
    300: "190deg 5% 80%",
    500: "196deg 4% 60%",
    700: "220deg 5% 40%",
    900: "220deg 3% 20%",
  },
  primary: "340deg 65% 47%",
  secondary: "240deg 60% 63%",
};

export const CATEGORIES = [
  { slug: "bestsellers", label: "Bestsellers" },
  { slug: "lifestyle", label: "Lifestyle" },
  { slug: "running", label: "Running" },
  { slug: "basketball", label: "Basketball" },
  { slug: "training", label: "Training" },
  {
    slug: "skateboarding",
    label: "Skateboarding",
  },
];

export const FAKE_SHOES = [
  {
    slug: "001",
    name: "Nike FakeShoe 1",
    price: 14500,
    numOfColors: 2,
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
  },
  {
    slug: "002",
    name: "AirWhatever Illegible",
    price: 16500,
    numOfColors: 2,
  },
  {
    slug: "003",
    name: "Nike Undefined",
    price: 16000,
    salePrice: 14000,
    numOfColors: 1,
  },
  {
    slug: "004",
    name: "Another fake shoe!",
    price: 12345,
    numOfColors: 1,
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
  },
  {
    slug: "005",
    name: "Yep shoe",
    price: 12345,
    salePrice: 1234,
    numOfColors: 1,
  },
  {
    slug: "006",
    name: "An amazingly fake shoe 1",
    price: 16500,
    numOfColors: 5,
  },
];
