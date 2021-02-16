const express = require("express");
const path = require("path");
const http = require("http");
const ejs = require("ejs");
const router = require("./routes");

const app = express();
const port = 3000;
const server = http.createServer(app);

const io = require("socket.io")(server);

    app.use(express.static(path.join(__dirname, "..", "public")));
    app.set("views", path.join(__dirname, "..", "public"));
    app.engine("html", ejs.renderFile);
    app.set("view engine", "html");
    
    app.use(router);

    io.on("connect", socket => {

        socket.on("login", data => {
            console.log(data)
        })

    } )
  



    server.listen(port, () => {
        console.log("listing in port", port)
    });