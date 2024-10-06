import React from "react";
import { Divider, Typography } from "antd";
import { Article } from "@/types/types";
import { parseISO, format } from "date-fns";

interface LatestArticleProps {
  article: Article;
}

const LatestArticle: React.FC<LatestArticleProps> = ({ article }) => {
  return (
    <>
      <Divider />
      <Typography.Title level={3}>{article.title}</Typography.Title>
      <Typography.Text>{article.summary}</Typography.Text>
      <Divider />
      <time dateTime={article.published_at}>
        {article.published_at && format(parseISO(article.published_at), "EEEE, LLLL d, yyyy")}
      </time>
    </>
  );
};

export default LatestArticle;
