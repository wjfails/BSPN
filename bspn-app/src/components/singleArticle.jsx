import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "../styling/body.css";
import "../styling/article.css";
import { Line } from "./line";

export default function SingleArticle() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/articles/id=" + path);
        setArticle(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchArticle();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h1 className="web-title">BSPN</h1>
          <div
            className="main-body"
            style={{
              width: "1300px",
              position: "absolute",
              left: "250px",
              textAlign: "center",
            }}
          >
            <h2 id="article-title">{article.title}</h2>
            <div id="article-content">
              <ul className="list-inline">
                <li className="list-inline-item">By: {article.author}</li>
                <li className="list-inline-item">Date: Example</li>
              </ul>
              <Line />
              <p className="paragraph-text">{article.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
