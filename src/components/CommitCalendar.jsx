import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const CommitCalendar = () => {
  const [commitsByDay, setCommitsByDay] = useState([0, 0, 0, 0, 0, 0, 0]);
  const owner = "KristinaMacias";
  const repo = "CodingChallenges";
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    ProcessCommitData(); // process commit data on component mount
  }, [owner, repo]);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous chart instance so we can render a new one
    }
    const ctx = document.getElementById("commitChart").getContext("2d");
    const newChartInstance = renderChart(ctx, commitsByDay);
    setChartInstance(newChartInstance);

    // Cleanup function
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [commitsByDay]);

  const ProcessCommitData = async () => { // process 
    try {
      const commitData = await fetchCommitData();
      const currentWeekCommits = filterCommitsByCurrentWeek(commitData);
      const newCommitsByDay = countCommitsByDay(currentWeekCommits);
      setCommitsByDay(newCommitsByDay); // Update state with new commits count
    } catch (error) {
      console.error("Error fetching and processing commit data:", error);
    }
  };

  const fetchCommitData = async () => {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits`
    );
    return response.json();
  };

  const filterCommitsByCurrentWeek = (commits) => {
    const today = new Date();
    const currentWeekStart = today.getDate() - today.getDay();
    const currentWeekEnd = currentWeekStart + 6;

    return commits.filter((commit) => {
      const commitDate = new Date(commit.commit.author.date);
      const commitDay = commitDate.getDate();
      return commitDay >= currentWeekStart && commitDay <= currentWeekEnd;
    });
  };

  const countCommitsByDay = (commits) => {
    const newCommitsByDay = [0, 0, 0, 0, 0, 0, 0];
    commits.forEach((commit) => {
      const commitDate = new Date(commit.commit.author.date);
      const dayOfWeek = commitDate.getDay();
      newCommitsByDay[dayOfWeek]++;
    });
    return newCommitsByDay;
  };

  const renderChart = (ctx, data) => {
    return new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Completed Challenges",
            data: data,
            backgroundColor: "#6C75DA",
            borderColor: "#6C75DA",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1, // Increment by 1
              precision: 0,
            },
          },
        },
      },
    });
  };

  return (
    <div className="commit-calendar web-section">
      <div className="commit-calendar-container">
        <h2>Code Challenges Solved This Week:</h2>
        <canvas id="commitChart"></canvas> {/* Canvas element for Chart.js */}
      </div>
    </div>
  );
};

export default CommitCalendar;
