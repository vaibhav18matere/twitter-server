import { initialiseServer } from "./app";

async function init() {
  const app = await initialiseServer();
  app.listen(8000, () => console.log("server started at PORT 8000"));
}


init();