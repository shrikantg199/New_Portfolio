import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";

describe("Hero Component", () => {
  it("renders hero section with correct content", () => {
    render(<Hero />);

    // Check if main elements are rendered
    expect(screen.getByText("Shrikant Gaikwad")).toBeInTheDocument();
    expect(screen.getByText("Full Stack Web Developer")).toBeInTheDocument();
    expect(
      screen.getByText(/Building fast, scalable, and user‑focused apps/)
    ).toBeInTheDocument();
  });

  it("renders download resume button", () => {
    render(<Hero />);

    const downloadButton = screen.getByRole("link", {
      name: /download shrikant gaikwad's resume/i,
    });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute("href", "/resume.pdf");
    expect(downloadButton).toHaveAttribute("download");
  });

  it("renders view projects button", () => {
    render(<Hero />);

    const projectsButton = screen.getByRole("link", {
      name: /view shrikant gaikwad's projects/i,
    });
    expect(projectsButton).toBeInTheDocument();
    expect(projectsButton).toHaveAttribute("href", "#projects");
  });

  it("renders social media links", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: /visit github profile/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /visit linkedin profile/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /visit email profile/i })
    ).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<Hero />);

    // Check if profile image has proper alt text
    const profileImage = screen.getByAltText("Shrikant Gaikwad profile photo");
    expect(profileImage).toBeInTheDocument();

    // Check if status indicator has aria-label
    const statusIndicator = screen.getByLabelText(
      "Available for opportunities"
    );
    expect(statusIndicator).toBeInTheDocument();
  });
});
