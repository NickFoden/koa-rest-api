const app = require("./app");
const cluster = require("cluster");

if (cluster.isMaster) {
  // Keep track of http requests
  let numReqs = 0;
  // setInterval(() => {
  //   console.log(`numReqs = ${numReqs}`);
  // }, 1000);

  // Count requests
  function messageHandler(msg) {
    if (msg.cmd && msg.cmd === "notifyRequest") {
      numReqs += 1;
      console.log(`numReqs = ${numReqs}`);
    }
  }

  const numCPUs = require("os").cpus().length;
  console.log("number of cpus: " + numCPUs);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on("message", messageHandler);
  }
} else {
  app.listen(3000, () => {
    console.log("server started");
  });
}
