const { getTasks, optimizeTasks } = require("./service");
const Log = require("./logger");

const handleOptimize = async (req, res) => {
  try {
    await Log("backend", "info", "controller", "Optimize called");

    const data = await getTasks();

    const tasks = data.tasks;
    const maxHours = data.maxHours || 10;

    const result = optimizeTasks(tasks, maxHours);

    res.json({
      totalImpact: result
    });

  } catch (err) {
    await Log("backend", "error", "controller", "Error in optimize");
    res.status(500).json({ error: "failed" });
  }
};

module.exports = { handleOptimize };
