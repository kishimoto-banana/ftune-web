import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "../components/Form";

describe("Cardコンポーネント", () => {
  it("render", () => {
    render(<Form />);
    expect(screen.getByText("生年月日")).toBeInTheDocument();
  });
});
