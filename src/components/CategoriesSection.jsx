import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionWrapper = styled.section`
  padding: 40px 20px;
  background-color: #2f190c;
  background-size: cover;
  background-position: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #b66631;
  text-shadow: 2px 2px 4px rgba(205, 148, 5, 0.595);
  text-align: center;
  margin-bottom: 20px;
`;

const CategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CategoryCard = styled.div`
  background-color: #ab7c5d;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 280px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    color: #555;
    margin: 10px 0;
  }

  a {
    color: #0c72df90;
    text-decoration: none;
  }
`;

const categories = [
  {
    id: "wood-types",
    title: "Види дров",
    description: "Дізнайтеся про різні види дров.",
  },
  {
    id: "economy",
    title: "Економія",
    description: "Як заощадити на опаленні дровами.",
  },
  {
    id: "recommendations",
    title: "Рекомендації для новачків",
    description: "Варто також знати.",
  },
];

const CategoriesSection = () => {
  return (
    <SectionWrapper id="smart-heat">
      <SectionTitle>Розумне тепло</SectionTitle>
      <CategoriesGrid>
        {categories.map((category) => (
          <CategoryCard key={category.id}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <Link to={`/categories/${category.id}`}>Дізнатися більше</Link>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </SectionWrapper>
  );
};

export default CategoriesSection;
