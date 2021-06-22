import app from "./app";

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

app.listen(port, () => {
  console.log(`\nServer running at http://${hostname}:${port}`);
});
