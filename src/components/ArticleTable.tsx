// Import necessary components and types
import React from "react";
import { Table, Typography, Image } from "antd";
import { Article } from "@/types/types";

// Define ArticleTableProps interface
interface ArticleTableProps {
  articles: Article[];
  loading: boolean;
}

// ArticleTable component
const ArticleTable: React.FC<ArticleTableProps> = ({ articles, loading }) => {
  // Define columns for the table
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "News Source",
      dataIndex: "news_site",
      key: "news_site",
    },
    {
      title: "Published At",
      dataIndex: "published_at",
      key: "published_at",
      render: (text: string) => new Date(text).toLocaleString(),
    },
  ];

  return (
    <Table
      dataSource={articles}
      columns={columns}
      rowKey="id"
      loading={loading}
      pagination={{ pageSize: 10 }} // Set the desired page size
    />
  );
};

export default ArticleTable;
