const app = require("./app");

const PORT = process.env.PORT || 5000;

app.get("/", (_req, res) => {
    res.json({ status: "ok", message: "Server is running" });
});

app.use((_req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

