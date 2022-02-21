import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Cardコンポーネント", () => {
  it("propsどおり出力されるか", () => {
    render(
      <Card
        media="仮メディア"
        title="仮タイトル"
        frequency="daily"
        type="horoscope"
      />
    );
    expect(screen.getByText("仮メディア")).toBeInTheDocument();
    expect(screen.getByText("仮タイトル")).toBeInTheDocument();
    expect(screen.getByText("#今日の占い")).toBeInTheDocument();
    expect(screen.getByText("#星占い")).toBeInTheDocument();
  });
});
