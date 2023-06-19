//Accion de pequena ventana desplegada, al dar clic en el boton de usuario
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let indice = 0;

function next() {
    slides[indice].classList.remove('active');
    indice = (indice + 1) % slides.length;
    slides[indice].classList.add('active');
}

function prev() {
    slides[indice].classList.remove('active');
    indice = (indice - 1 + slides.length) % slides.length;
    slides[indice].classList.add('active');
}

function actionLogin() {
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if (email == "francisco@poli.com" && password == "poli") {
        alert("Ha ingresado correctamente");
        return false;
    } else {
        alert("Error de ingreso, vuelva a intentar");
    }
}

//"busqueda" basica
sb.onclick = function() {
    var search_box = document.getElementById("search-box").value;
    if (search_box == 'indian') {
        result.innerHTML = '<a href=motos.html>Motos Indian</a>';
    } if (search_box == 'motos') {
        result.innerHTML = '<a href=motos.html>Ver motos</a>';
    } if (search_box == 'suzuki') {
        result.innerHTML = '<a href=motos.html>Motos Suzuki</a>';
    } if (search_box == 'kawasaki') {
        result.innerHTML = '<a href=motos.html>Motos Kawasaki</a>';
    } else {
        result.innerHTML = '<p>No hay resultados</p>';
    }
}

//filtro por marcas -- tome como guia un ejemplo de w3
    //mostrar todas las marcas de motos
    filterSelection("todo")
    function filterSelection(t) {
        var filter_bike, i;
        filter_bike = document.getElementsByClassName("filter-bike");
        if (t == 'todo') t = "";
        for (i = 0; i < filter_bike.length; i++) {
            RemoveClass(filter_bike[i], 'show');
            if (filter_bike[i].className.indexOf(t) > -1) AddClass(filter_bike[i], 'show');
        }
    }

    //mostrar motos filtradas por marca
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(' ');
        arr2 = name.split(' ');
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += ' ' + arr2[i];
            }
        }
    }

    //Ocultar marcas no seleccionadas
    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(' ');
        arr2 = name.split(' ');
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1)
            }
        }
        element.className = arr1.join(' ');
    }

    //Pasar de un boton a otro(filtro)
    var f_container = document.getElementsByClassName('f-container');
    var btn = f_container.getElementsByClassName('btn');
    for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function() {
            var current = document.getElementsByClassName('active-two');
            current[0].className = current[0].className.replace(' active-two', '');
            this.className += ' active-two';
        }); 
    }
