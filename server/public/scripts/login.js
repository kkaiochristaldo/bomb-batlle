

    const CreateRoom = () => {
    
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


    function  animateClose (i) {
    
        

    }