    function logar(){
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;
    
        if(login === "wlawla" && senha === "bancootario157"){   
            
            window.location.href = "cards.html";
    }  
    else if(login === "nepo" && senha === "juju"){
            window.location.href = "cards.html";
    }
    else if(login === "pedrinm" && senha === "pagodinho"){
        window.location.href = "cards.html";
    }
    else if(login === "nico" && senha === "123157"){
        window.location.href = "cards.html";
    }
    else if(login === "malvadezas" && senha === "reidelas"){
        window.location.href = "cards.html";
    }
    else { 
            alert('Login desconhecido');
        }
    }


    function home(){

        const list = document.querySelectorAll('.list')
        function activeLink(){
            list.forEach((item) =>
            item.classList.remove('active'));
            this.classList.add('active')
        }
        list.forEach((item) =>
        item.addEventListener('click' , activeLink))


    }

