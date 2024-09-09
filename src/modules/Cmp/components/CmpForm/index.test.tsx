import { describe, it, expect } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { CmpForm } from ".";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
const router = createBrowserRouter([
  { path: "/", element: <CmpForm /> },
  { path: "/consents", element: <div>user consents table</div> },
]);
function renderForm() {
  return render(
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
}

describe("CmpForm", () => {
  it("the form cannot be submitted if it's invalid", () => {
    renderForm();
    const submitButton = screen.getByRole("submit");
    expect(submitButton).toBeDisabled();
  });

  it("should display an error message if the name field is empty", async () => {
    renderForm();
    const input = screen.getByLabelText(/name/i);
    // we actually need to await the act for the validation to run
    await act(() => {
      fireEvent.change(input, { target: { value: "a" } });
      fireEvent.change(input, { target: { value: "" } });
    });
    const errorMessage = screen.getByText("Name is required");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should display an error message if the email field is invalid", async () => {
    renderForm();
    const input = screen.getByLabelText(/email/i);
    await act(() => {
      fireEvent.change(input, { target: { value: "not an email" } });
    });
    const errorMessage = screen.getByText("Invalid email format");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should display an error message if no consents are selected", async () => {
    renderForm();
    const checkbox = screen.getByLabelText(/newsletter/i);
    await act(() => {
      checkbox.click(); // enable
      checkbox.click(); // disable
    });
    const errorMessage = screen.getByText(
      "At least one consent must be selected",
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("be able to submit the form if it's valid", async () => {
    renderForm();

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const consentCheckbox = screen.getByLabelText(/newsletter/i);
    const submitButton = screen.getByRole("submit");

    await act(() => {
      fireEvent.change(nameInput, { target: { value: "John doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      consentCheckbox.click();
    });

    expect(submitButton).not.toBeDisabled();

    await act(() => {
      submitButton.click();
    });

    expect(screen.getByText("user consents table")).toBeInTheDocument();
  });
});
