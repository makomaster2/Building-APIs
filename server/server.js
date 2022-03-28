const express = require('express')
const app = express();
const port = 3000;
const apiRouter = require("./routes");

app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

// Localhost: 3000/api/chirps/
app.use("/api", apiRouter)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})