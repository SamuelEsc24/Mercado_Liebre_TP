const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

/* ruta */

app.listen(PORT, () => console.log(`
Server listen in port ${PORT}
http://localhost:${PORT}
`))
