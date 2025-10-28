import { colors } from "@/styles/theme";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  display: flex;
  text-align: center;
  justify-content: center;

  text {
    padding-top: 0;
  }

  &:hover {
    font-weight: bold;
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  &.sales {
    background-color: ${colors.sales};
    color: white;
    border: none;
    border-radius: 2rem;
    &&:hover {
      background-color: ${colors.salesDark};
    }
  }

  &.nav {
    background-color: ${colors.light};
    color: ${colors.dark};
    border: 1px solid ${colors.dark};
    width: 300px;
    border-radius: 0;
    &&:hover {
      background-color: ${colors.dark};
      color: ${colors.light};
    }

    @media (max-width: 768px) {
      width: 200px;
      font-size: 1.2rem;
    }
  }
`;

interface NavigationButtonProps {
  link?: string;
  title?: string;
  type: "sales" | "nav";
}

const NavigationButton = ({ link, title, type }: NavigationButtonProps) => {
  return (
    <Button className={type} style={{ alignSelf: "center" }}>
      <Link href={type === "sales" ? "/#contact-form" : link || "/bers2"}>
        {title || "Get a FREE quote now"}
      </Link>
      <ChevronRight />
    </Button>
  );
};

export default NavigationButton;
