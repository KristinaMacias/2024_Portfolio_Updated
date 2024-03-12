import React, { useState, useEffect } from "react";
import { Octokit } from "@octokit/core";
import circlesSVG from "../assets/circles-black.svg";

const MyComponent = () => {
  const [commitCount, setCommitCount] = useState(null);
  const owner = "KristinaMacias";
  const repo = "CodingChallenges";

  useEffect(() => {
    const fetchCommitCount = async () => {
      const octokit = new Octokit(); // access token not needed

      try {
        const response = await octokit.request(
          "GET /repos/{owner}/{repo}/commits",
          {
            owner: owner,
            repo: repo,
          }
        );
        setCommitCount(response.data.length);
      } catch (error) {
        console.error("Error fetching commit count:", error);
      }
    };

    fetchCommitCount();
  }, [owner, repo]);

  return (
    <div>
      <div className="stats web-section">
        <div className="stats-container">
          <img
            className="svg-background"
            src={circlesSVG}
            alt="svg pattern background"
          />
          <h1>Code Challenge Stats</h1>
          <h2>Code Challenges Solved to Date:</h2>
          <div className="paragraph-container">
            <div className="stats">
              {commitCount !== null ? (
                <p className="color-primary">
                  {commitCount + 84} code challenges solved! 🥳
                </p>
              ) : (
                <p>Loading... 🚀</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
