jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("@/lib/firebase", () => ({
  auth: {},
  analytics: null,
}));

import { render, screen } from "@testing-library/react";
import LoginPage from "./page";

describe("Login Page", () => {
  it("renders login button", () => {
    render(<LoginPage />);
    const button = screen.getByText(/login/i);
    expect(button).toBeInTheDocument();
  });
});