import { newsData } from "../newsData";
import NewsLayout from "../NewsLayout";

export default function NewsPage({ params }: { params: { id: string } }) {
  const article = newsData.find((item) => item.id === params.id);

  if (!article) {
    return <div style={{ textAlign: "center", marginTop: "5rem" }}>Article not found.</div>;
  }

  return <NewsLayout article={article} />;
}
