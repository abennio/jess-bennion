import { fireEvent, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const RETURNING_FROM_PROJECT_STORAGE_KEY =
  "jess-bennion-returning-from-project";
const PROJECT_RETURN_PENDING_CLASS = "project-return-pending";

beforeEach(() => {
  window.history.pushState({}, "", "/jess-bennion");
  window.sessionStorage.clear();
  window.innerWidth = 1024;

  window.HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
  window.HTMLMediaElement.prototype.pause = jest.fn();

  global.ResizeObserver = class ResizeObserver {
    observe() {}
    disconnect() {}
  };
});

function renderApp() {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

async function openBirkenheadProject() {
  fireEvent.click(
    screen.getAllByRole("link", {
      name: /Birkenhead Mural.*View project/,
    })[0]
  );

  await screen.findByRole("heading", { name: "Birkenhead Mural" });
}

function expectFeaturedVideoInHeroMode() {
  expect(
    screen.getByLabelText("Placeholder for a featured hero video tile")
  ).toHaveClass("featured-video-card--hero");
}

test("shows the hero view on a fresh work page load", () => {
  renderApp();

  expectFeaturedVideoInHeroMode();
});

test("marks project navigation so browser back can reload the work page cleanly", async () => {
  renderApp();

  await openBirkenheadProject();

  expect(window.sessionStorage.getItem(RETURNING_FROM_PROJECT_STORAGE_KEY)).toBe(
    "true"
  );
  expect(document.documentElement).toHaveClass(PROJECT_RETURN_PENDING_CLASS);
});

test("renders the video first in the scrollable mobile work view", () => {
  window.innerWidth = 500;

  renderApp();

  const workItems = screen.getByTestId("compact-home-stack").children;

  expect(workItems[0]).toHaveClass("featured-slot--mobile");
  expect(
    screen.getByLabelText("Placeholder for a featured hero video tile")
  ).not.toHaveClass("featured-video-card--hero");
  expect(
    screen.getByRole("link", { name: /Birkenhead Mural.*View project/ })
  ).toBeInTheDocument();
});
