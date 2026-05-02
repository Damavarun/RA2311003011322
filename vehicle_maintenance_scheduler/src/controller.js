const { getTasks, optimizeTasks } = require("./service");
const Log = require("../../logging_middleware/logger");

const handleOptimize = async (req, res) => {
  console.log("handleOptimize called");
  try {
    await Log("backend", "info", "controller", "Optimize called");

    const data = await getTasks();

    const tasks = data.tasks;
    const maxHours = data.maxHours || 10;

    const { totalImpact, selectedTasks } = optimizeTasks(tasks, maxHours);

    console.log("Optimization result:", { totalImpact, selectedTasks });

    res.json({
      totalImpact,
      selectedTasks
    });

  } catch (err) {
    await Log("backend", "error", "controller", err.message);
    res.status(500).json({ error: "failed" });
  }
};

module.exports = { handleOptimize };