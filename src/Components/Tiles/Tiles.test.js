import { render, screen } from "@testing-library/react";
import Tile from "./Tile";

test("renders a project tile", () => {
  render(
    <Tile
      image="project.png"
      alt="Project preview"
      title="Project title"
    />
  );

  expect(screen.getByRole("img", { name: "Project preview" })).toHaveAttribute(
    "src",
    "project.png"
  );
  expect(
    screen.getByRole("heading", { name: "Project title" })
  ).toBeInTheDocument();
  expect(screen.getByText("View project")).toBeInTheDocument();
});
