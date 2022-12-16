import { screen, render } from "@testing-library/react";
import React from "react";
import Modal from "./modal";

describe("Test Modal", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  it("Shuld render Modal", () => {
    render(
      // eslint-disable-next-line testing-library/no-node-access
      <Modal>Titulo</Modal>
    );
    expect(screen.getByText("Titulo")).toBeVisible();
  });
});
