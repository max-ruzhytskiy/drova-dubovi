import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 100px 20px 40px;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Breadcrumbs = styled.nav`
  font-size: 0.875rem;
  margin-bottom: 20px;

  a {
    color: #007bff;
    text-decoration: none;
    margin-right: 5px;

    &:after {
      content: "/";
      margin-left: 5px;
    }

    &:last-child:after {
      content: "";
    }
  }
`;

const ArticleList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const categories = {
  "wood-types": {
    title: "Види дров",
    articles: [
      { id: "oak-benefits", title: "Чому дубові дрова — найкращий вибір?" },
      { id: "softwood-vs-hardwood", title: "Хвойні чи листяні дрова?" },
    ],
  },
  economy: {
    title: "Економія",
    articles: [
      { id: "firewood-storage", title: "Як правильно зберігати дрова?" },
      { id: "long-burning-secrets", title: "Секрети довготривалого горіння." },
    ],
  },
  recommendations: {
    title: "Рекомендації для новачків",
    articles: [
      {
        id: "is-this-quality",
        title: "Як розпізнати якісні дрова: перевірені поради.",
      },
      { id: "top-5", title: "Топ-5 помилок при розпалюванні печі." },
    ],
  },
};

const CategoryPage = () => {
  const { id } = useParams();
  const category = categories[id];

  if (!category) {
    return <h2>Категорію не знайдено</h2>;
  }

  return (
    <Wrapper>
      <Breadcrumbs>
        <Link to="/">Головна сторінка</Link>
        <span>{category.title}</span>
      </Breadcrumbs>
      <Title>{category.title}</Title>
      <ArticleList>
        {category.articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ArticleList>
    </Wrapper>
  );
};

export default CategoryPage;
