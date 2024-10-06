// Import necessary components and types
import React from "react";
import { Row, Col, Skeleton } from "antd"; // Import Row, Col, and Skeleton
import ArticleCard from "@/components/ArticleCard"; 
import { Article } from "@/types/types";

// Define ArticleListProps interface
interface ArticleListProps {
  articles: Article[];
  loading: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, loading }) => (
  <Row gutter={8}>
    {loading ? (
      <Skeleton active />
    ) : (
      articles.map((article) => (
        <Col span={8} key={article.id}>
          <ArticleCard article={article} />
        </Col>
      ))
    )}
  </Row>
);

export default ArticleList;
