import { describe, it, expect, vi, afterEach } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { CmpForm } from ".";

describe("CmpForm", () => {
  const mocks = vi.hoisted(() => {
    const mutation = { mutate: vi.fn(), isPending: false };
    return { useCmpFormMutation: () => mutation };
  });

  vi.mock("../../hooks/useCmpFormMutation", () => mocks);

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("the form cannot be submitted if it's invalid", () => {
    render(<CmpForm />);

    const submit = screen.getByRole("submit");

    expect(submit).toBeDisabled();
  });

  it("should display an error message if the name field is empty", async () => {
    render(<CmpForm />);

    const input = screen.getByLabelText(/name/i);

    // we actually need to await the act for the validation to run
    await act(() => {
      fireEvent.change(input, { target: { value: "a" } });
      fireEvent.change(input, { target: { value: "" } });
    });

    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });

  it("should display an error message if the email field is invalid", async () => {
    render(<CmpForm />);

    const input = screen.getByLabelText(/email/i);

    await act(() => {
      fireEvent.change(input, { target: { value: "not an email" } });
    });

    expect(screen.getByText("Invalid email format")).toBeInTheDocument();
  });

  it("should display an error message if no consents are selected", async () => {
    render(<CmpForm />);

    const checkbox = screen.getByLabelText(/newsletter/i);

    await act(() => {
      checkbox.click(); // enable
      checkbox.click(); // disable
    });

    expect(
      screen.getByText("At least one consent must be selected"),
    ).toBeInTheDocument();
  });

  it("should be able to submit the form if it's valid", async () => {
    render(<CmpForm />);

    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const consent = screen.getByLabelText(/newsletter/i);
    const submit = screen.getByRole("submit");
    const user = {
      name: "John doe",
      email: "john@example.com",
      consents: ["newsletter"],
    };

    await act(() => {
      fireEvent.change(name, { target: { value: user.name } });
      fireEvent.change(email, { target: { value: user.email } });
      consent.click();
    });

    expect(submit).not.toBeDisabled();

    await act(() => {
      submit.click();
    });

    expect(mocks.useCmpFormMutation().mutate).toHaveBeenCalledWith(user);
  });
});
