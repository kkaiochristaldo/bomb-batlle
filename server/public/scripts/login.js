

     const socket = io.connect("http://localhost:3000");


    socket.on("tokens", data => {
        let {id, IsCrowded, codeRoom} = data;
        console.log(data)
        if(IsCrowded) {
            alert("A sala esta cheia")
        }
    })

    const CreateRoom = () => {
        let btn = document.querySelector("#create-room .btn-form");
        btn.addEventListener("click", () => {
            let name = document.querySelector("input[name='name-one']").value;
            let amount = document.querySelector("input[name='amount']").value;
            let data = {
                id: 1,
                name: name,
                amount: amount,
            }
            socket.emit("createRoom", data)
            document.querySelector("input[name='name-one']").value = "";
            document.querySelector("input[name='amount']").value = "";
        })

        document.querySelector("#create-room").className = "visible"
        let close_create = document.querySelector("#create-room>h1");

        close_create.addEventListener("mouseover", () => {
            close_create.classList.add("active");
        
            setTimeout(() => {
                close_create.classList.remove("active");
            }, 2000)
        })

    }

    const SearchRoom = () => {

        document.querySelector("#search-room").className = "visible"

        let btn = document.querySelector("#search-room .btn-form");
        btn.addEventListener("click", () => {
            let name = document.querySelector("input[name='name-two']").value;
            let code = document.querySelector("input[name='code']").value;
            let data = {
                name: name,
                code: code,
            }
            socket.emit("searchRoom", data)
            document.querySelector("input[name='name-two']").value = "";
            document.querySelector("input[name='code']").value = "";
        })

        let close_create = document.querySelector("#search-room>h1");
        
        close_create.addEventListener("mouseover", () => {
            close_create.classList.add("active");
        
            setTimeout(() => {
                close_create.classList.remove("active");
            }, 2000)
        })
    }

    const CloseForms = () => {
        document.querySelector("#create-room").className = "invisible"
        document.querySelector("#search-room").className = "invisible"
    }

