var icon = document.getElementById('icon');

if(localStorage.getItem('theme') == null){
    localStorage.setItem('theme', 'dark');
}

let localData = localStorage.getItem('theme');

if(localData == 'dark'){
    icon.src = "img/sun.png";
    document.body.classList.remove('withe-theme');
}else if(localData == 'light'){
    icon.src = "img/moon.png";
    document.body.classList.add('withe-theme');
}

icon.onclick = function(){
    document.body.classList.toggle("withe-theme");
    if(document.body.classList.contains("withe-theme")){
        icon.src = "img/moon.png";
        localStorage.setItem('theme', 'light');
    }else{
        icon.src = "img/sun.png";
        localStorage.setItem('theme', 'dark');
    }
}