import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CTAButton from "@/components/CTAButton";
import TestimonialCard from "@/components/TestimonialCard";

const CHECKOUT_URL = "https://pay.kambafy.com/checkout/899de5b8-ad76-4c01-9c63-696845659f8f";
const PRICE = "5.000 KZ";

describe("CTAButton", () => {
  it("points to the existing Kambafy checkout URL", () => {
    render(<CTAButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", CHECKOUT_URL);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("shows the confirmed price on the default label", () => {
    render(<CTAButton />);
    expect(screen.getByRole("link").textContent).toContain("Comprar o eBook por");
    expect(screen.getByRole("link").textContent).toContain(PRICE);
  });
});

describe("TestimonialCard", () => {
  it("renders the confirmed real testimonial content", () => {
    render(<TestimonialCard text="Muito direto ao ponto." name="Carlos T." />);
    expect(screen.getByText(/Muito direto ao ponto\./)).toBeInTheDocument();
    expect(screen.getByText(/Carlos T\./)).toBeInTheDocument();
  });
});
