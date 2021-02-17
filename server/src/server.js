const express = require("express");
const path = require("path");
const http = require("http");
const ejs = require("ejs");
const crypto = require("crypto");
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

    var Memory = [];

    class Room {
        create(idRoom, codeRoom, amount) {
            this.room = {
                id: idRoom,
                code: codeRoom,
                amount: amount,
                users: [],
            }
            Memory.push(this.room);
        }

        searchCode(codeRoom) {

            for(let i = 0; i < Memory.length; i++) {
                if(Memory[i].code === codeRoom) {
                    this.origin = Memory[i];
                }
            }
            return this.origin;

        }

        addPlayer(idPlayer, name, idRoom) {
            this.player = {
                id: idPlayer,
                name: name,
            }

            Memory[idRoom].users.push(this.player);

        }
    }

    io.on("connect", socket => {
        
        var Class = new Room();

        socket.on("createRoom", data => {
            let codeRoom = crypto.randomBytes(3).toString('hex');
            socket.join(codeRoom);

            let {id, name, amount} = data;
            let idRoom = (Memory.length);
            Class.create(idRoom, codeRoom, amount);
            Class.addPlayer(id, name, idRoom);

            let IsCrowded = false;

            socket.emit("tokens", {id, codeRoom, IsCrowded})
            console.log(Memory[idRoom])
        });

        socket.on("searchRoom", data => {
            let IsCrowded = false;
            let {code, name} = data;
            socket.join(code);

            let roomOrigem = Class.searchCode(code);

            console.log(roomOrigem)
            let id = (roomOrigem.users.length);
            id++;
            let idRoom = roomOrigem.id;
            if (id <= roomOrigem.amount) {
                Class.addPlayer(id, name, idRoom);
            }
            else {
                IsCrowded = true;
            }
            let codeRoom = code;
            socket.emit("tokens", {id, codeRoom, IsCrowded})
        })

    } )
  

    server.listen(port, () => {
        console.log("listing in port", port)
    });