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
            <p>You're probably wondering what this is about. Let me explain!</p>
            <p>
              Here, you see the number of challenges I've solved since July
              2021.
            </p>
            <p>
              Originally, I planned to create a fullstack app to update these
              numbers. But updating that is a manual task. Instead, I decided to
              let the GitHub API do the heavy lifting. (Thanks, GitHub!)
            </p>
            <p>
              With Octokit and the GitHub API, I can fetch data for this
              repository. Each commit I make adds to my stats. Pretty neat, huh?
            </p>
            <div className="button-container">
              <button>
                <a href="https://www.codewars.com/users/KristinaMacias/">
                  Codewars
                </a>
              </button>
              <button>
                <a href="https://github.com/KristinaMacias/CodingChallenges/blob/main/solutions.js">
                  View Repo
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
