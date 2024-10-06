import React, { useEffect, useState } from "react";
import { Divider, Typography, Spin, Alert } from "antd";
import LatestArticle from "@/components/LatestArticle"; // Import the LatestArticle component
import { Article } from "@/types/types"; // Import the Article type

const Home: React.FC = () => {
  const [latestArticle, setLatestArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/latest");
        const latestArticleData = await response.json();
        console.log("Latest Article Data:", latestArticleData); // Log the data
        setLatestArticle(latestArticleData);
      } catch (error) {
        console.error("Error fetching latest article:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchLatestArticle();
  }, []);
  
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography.Title>Space! News</Typography.Title>
        <Typography.Paragraph>
          Welcome to Space! News, your go-to source for the latest news and
          updates on space exploration, astronomy, and everything in between.
          Our team of experienced journalists and space enthusiasts are
          dedicated to bringing you the most accurate and up-to-date information
          on the latest discoveries, missions, and events happening in the
          cosmos.
        </Typography.Paragraph>
        <Typography.Paragraph>
          From the latest Mars rover missions to the search for extraterrestrial
          life, we cover it all. Our articles are written in an
          easy-to-understand format, so you do not need to be a rocket
          scientist to enjoy them. We also feature stunning images and videos
          from space, so you can experience the beauty and wonder of the
          universe from the comfort of your own home.
        </Typography.Paragraph>
        <Typography.Paragraph>
          So whether you are a space enthusiast, a science buff, or just someone
          who loves to learn new things, Space! News has something for you. Be
          sure to check back often for the latest updates and stories from the
          final frontier.
        </Typography.Paragraph>
        <Divider />
        {isLoading ? (
          <Spin />
        ) : latestArticle ? (
<LatestArticle article={latestArticle} />
        ) : (
          <Alert message="Failed to fetch latest article." type="error" />
        )}
      </div>
    </>
  );
};

export default Home;
