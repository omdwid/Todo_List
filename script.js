var form = document.querySelector(".my-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    var input = document.querySelector("input");
    if(input.value !== ""){
        let text = input.value;
        newdiv = document.createElement("div");
        newdiv.className = "items";
        newdiv.innerHTML = `<h5>${text}</h5> <i class="ri-delete-bin-line"></i>`;
        
        var box = document.querySelector("#box");
        var firstdiv = document.querySelector(".items");
        
        var icon = newdiv.querySelector("i");
        icon.addEventListener("click", (e) => {
            var parent = icon.parentElement.parentElement
            parent.removeChild(icon.parentElement);
        });

        box.insertBefore(newdiv, firstdiv);
    }
});

let deleteicons = document.querySelectorAll("i");
deleteicons.forEach(function (icon) {
    icon.addEventListener("click", (e) => {
        var parent = icon.parentElement.parentElement;
        parent.removeChild(icon.parentElement);
    });
})

