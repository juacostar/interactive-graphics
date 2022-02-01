const resources = {
    "Lago_Sochagota": {
       "img_resource": "imagenes/sochagota.jpg" ,
       "text":"<b>Lago Sochagota</b> <br> El Lago de Sochagota es uno de los atractivos más interesantes del municipio de Paipa. Es un cuerpo de agua que cuenta con un sendero ecológico a su alrededor que brinda un bello paisaje y la posibilidad de realizar actividades deportivas con tranquilidad."
    }
}


function displayImgText(index){
    document.getElementById("img_resource").style.display = "block";
    if(index == "Lago_Sochagota"){
        document.getElementById("img_resource").style.width = "25%";
    }
    document.getElementById("img_resource").src =  resources[index]["img_resource"];
    document.getElementById("text").innerHTML = resources[index]["text"];
    document.getElementById("info_map").scrollIntoView();
}