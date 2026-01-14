import { render, screen, fireEvent } from "@testing-library/react";
import { AuthProvider, useAuth } from "@/context/AuthContext";

function TestComponent() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <p data-testid="user">{user}</p>

      <button onClick={() => login("test@mail.com")}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

describe("AuthContext", () => {
  it("login menyimpan user", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText("Login"));

    expect(screen.getByTestId("user").textContent).toBe("test@mail.com");
  });

  it("logout menghapus user", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText("Login"));
    fireEvent.click(screen.getByText("Logout"));

    expect(screen.getByTestId("user").textContent).toBe("");
  });
});
