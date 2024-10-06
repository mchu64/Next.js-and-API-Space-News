/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, Switch, Space, Spin, Alert, Pagination } from "antd";
import { Article } from "@/types/types";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";
import ArticleStatistics from "@/components/ArticleStatistics";

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewType, setViewType] = useState<"table" | "grid">("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v4/articles/?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`
        );
        const newsData = await response.json();
        setNews(newsData.results);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  useEffect(() => {
    renderContent();
  }, [viewType, news, isLoading, currentPage]);

  const handleViewTypeChange = (checked: boolean) => {
    setViewType(checked ? "grid" : "table");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    if (isLoading) {
      return <Spin />;
    }

    if (news.length === 0) {
      return <Alert message="No articles found." type="info" />;
    }

    return (
      <>
        <ArticleStatistics articles={news} />
        <Divider />
        <Typography.Title level={2}>Articles</Typography.Title>
        {viewType === "table" ? (
          <ArticleTable articles={news} loading={isLoading} />
        ) : (
          <ArticleList articles={news} loading={isLoading} />
        )}
<div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
  <Pagination
    current={currentPage}
    total={1000} // Assuming there are 1000 articles in total, adjust as needed
    pageSize={itemsPerPage} // Keep the items per page fixed at 10 (or whatever you want)
    onChange={handlePageChange}
    showSizeChanger={false} // Disable the "items per page" selector
  />
</div>
      </>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "10px" }}>
        <span>{"View as: "}</span>
        <Space direction="horizontal">
          <Switch
            checkedChildren="Table"
            unCheckedChildren="Grid"
            defaultChecked
            onChange={handleViewTypeChange}
          />
        </Space>
        <span style={{ paddingLeft: "10px" }}>
          {"(Switch between Table and Grid view)"}
        </span>
      </div>

      {renderContent()}
    </div>
  );
};

export default NewsPage;
