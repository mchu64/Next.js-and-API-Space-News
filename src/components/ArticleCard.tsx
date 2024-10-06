import React from "react";
import { Divider, Typography } from "antd";
import { Article } from "@/types/types";
import { parseISO, format } from "date-fns";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div>
      <Typography.Title level={3}>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" // Ensures security when opening a new tab
          style={{ color: 'inherit', textDecoration: 'none' }} // Keeps the text style similar to a non-link title
        >
          {article.title}
        </a>
      </Typography.Title>

      <img 
        src={article.image_url} 
        alt={article.title} 
        style={{ width: "100%", height: "auto", maxHeight: "200px", objectFit: "cover" }} 
      />

      <Divider />

      {article.published_at && (
        <time dateTime={article.published_at}>
          {format(parseISO(article.published_at), "EEEE, LLLL d, yyyy")}
        </time>
      )}
    </div>
  );
};

export default ArticleCard;
