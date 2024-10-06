import React from "react";
import { Row, Col, List, Typography } from "antd";
import { Article } from "@/types/types";

const { Text, Title } = Typography;

interface ArticleStatisticsProps {
  articles: Article[];
}

const ArticleStatistics: React.FC<ArticleStatisticsProps> = ({ articles }) => {
  const uniqueSources = Array.from(new Set(articles.map((article) => article.news_site)));

  const dateRange = [
    ["Earliest: ", new Date(Math.min(...articles.map((article) => new Date(article.published_at).getTime()))).toLocaleDateString()],
    ["Latest: ", new Date(Math.max(...articles.map((article) => new Date(article.published_at).getTime()))).toLocaleDateString()],
  ];

  const featuredArticleCount = articles.filter((article) => article.featured).length;

  return (
    <div>
      <Title level={3}>Article Statistics</Title>

      <Row gutter={8}>
        <Col span={8}>
          <List
            header={<Text strong>Unique News Sources</Text>}
            bordered
            dataSource={uniqueSources}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
        <Col span={8}>
          <List
            header={<Text strong>Date Range of Articles</Text>}
            bordered
            dataSource={dateRange}
            renderItem={(item) => <List.Item>{item.join(" ")}</List.Item>}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ArticleStatistics;
