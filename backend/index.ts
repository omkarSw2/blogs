import app from "./src/app";
import { config } from "./src/config/config";

const startServer = () => {
  const port = config.port || 8080;

  app.listen(port, () => {
    console.log(`server started on the port ${port}`);
  });
};

startServer();
