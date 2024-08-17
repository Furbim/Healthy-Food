var btn = document.getElementById("btn_carrinho");

var btn_fechar = document.getElementById("btn_fechar");

var carrinho = document.getElementById("carrinho");

btn_fechar.addEventListener("click", function(){

    carrinho.classList.remove("flex");

    carrinho.classList.add("hidden");

});

btn.addEventListener("click", function(){

    carrinho.classList.remove("hidden");

    carrinho.classList.add("flex");

});



/*Página login*/

var btn_login = document.getElementById("btn_login");

var btn_fechar_login = document.getElementById("btn_fechar_login");

var login = document.getElementById("login");

btn_fechar_login.addEventListener("click", function(){

    login.classList.remove("flex");

    login.classList.add("hidden");

});

btn_login.addEventListener("click", function(){

    login.classList.remove("hidden");

    login.classList.add("flex");

});