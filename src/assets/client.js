console.log("Samaritans Prototyping Kit. Try not to use this code in production.")


document.addEventListener("DOMContentLoaded", function(){




    let avatar = document.querySelector(".site-header__user-avatar")
    let popup = document.querySelector(".site-header__user-popup")
    
    avatar.addEventListener('click', function(){
        if(popup.classList[1] === "visible"){
            popup.classList.remove("visible")
        } else {
            popup.classList.add("visible")
        }
    })

})
