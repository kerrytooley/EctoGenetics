import { colors } from "@/styles/theme";
import Link from "next/link";
import { styled } from "styled-components";
import { Title } from "./SectionTitles";

// Styled carousel card components

const Card = styled(Link)`
  margin: 0.5rem;
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-items: flex-start;
  background: ${colors.dark};
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${colors.light};
  scroll-snap-align: start;
  transition: transform 0.2s;
  cursor: pointer;

  @media (max-width: 768px) {
    flex: 0 0 250px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const CardText = styled.div`
  padding: 1rem;
  text-align: left;
`;

interface CarouselCardProps {
  link: string;
  image: string;
  title: string;
}

const CarouselCard = ({
  link,
  image,
  title
}: CarouselCardProps) => {
  return (
    <Card href={link}>
      <CardImage src={image} alt={title} />
      <CardText>
        <Title className="light">{title}</Title>
      </CardText>
    </Card>
  );
};

export default CarouselCard;
