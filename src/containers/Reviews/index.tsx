import React from "react";
import { Carousel } from "../../components/Carousel";
import { Review, ReviewType } from "../../components/Review";
import { Container, H2, Subtitle } from "../../components/styled";
import { styled } from "../../config/theme";
import girl from "../../images/girl.png";

type Props = {
  className?: string;
};

const fakeReview = [
  {
    name: "Екатерина Иванова",
    text:
      "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.",
    role: "Директор ООО “Раз-два”",
    avatar: `${girl}`,
  },
  {
    name: "Иван Петров",
    text:
      "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, ",
    role: "Директор ООО “Раз-два”",
    avatar: `${girl}`,
  },
  {
    name: "Ирина Петрова",
    text:
      "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.",
    role: "Директор",
    avatar: `${girl}`,
  },
];

const ReviewsSectionComponent: React.FC<Props> = ({ className }) => {
  return (
    <section className={className} id="reviews">
      <Container>
        <H2>Отзывы</H2>
        <Subtitle>Ваши благодарности</Subtitle>

        <Carousel className="reviews-carousel">
          {fakeReview.map((item: ReviewType) => (
            <Review
              key={item.name}
              name={item.name}
              text={item.text}
              role={item.role}
              avatar={item.avatar}
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export const ReviewsSection = styled(ReviewsSectionComponent)`
  padding: 140px 0 228px 0;
  .reviews-carousel {
    margin-top: 80px;
  }
`;
