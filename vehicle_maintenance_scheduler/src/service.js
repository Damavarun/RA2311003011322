const axios = require("axios");
const Log = require("./logger");

const getTasks = async () => {
  await Log("backend", "info", "service", "Fetching tasks");

  try {
    const res = await axios.get(
      "http://20.207.122.201/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    );
    return res.data;
  } catch (err) {
    // Fallback to mock data for testing
    console.log("Using mock data for testing");
    return {
      tasks: [
        { Duration: 2, Impact: 5 },
        { Duration: 3, Impact: 7 },
        { Duration: 4, Impact: 8 },
        { Duration: 5, Impact: 10 }
      ],
      maxHours: 10
    };
  }
};

const optimizeTasks = (tasks, maxHours) => {
  const n = tasks.length;

  const dp = Array.from({ length: n + 1 }, () =>
    Array(maxHours + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    let { Duration, Impact } = tasks[i - 1];

    for (let w = 0; w <= maxHours; w++) {
      if (Duration <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - Duration] + Impact
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][maxHours];
};

module.exports = { getTasks, optimizeTasks };
