const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});