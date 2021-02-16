

     const socket = io.connect("http://localhost:3000");

    const CreateRoom = () => {
        let btn = document.querySelector(".btn-form");
        btn.addEventListener("click", () => {
            let name = document.querySelector("input[name='name']").value;
            let amount = document.querySelector("input[name='amount']").value;
            let data = {
                id: 1,
                name: name,
                amount: amount,
            }
            socket.emit("login", data)
            document.querySelector("input[name='name']").value = "";
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

