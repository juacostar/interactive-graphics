const resources = {
    "home":{
        "img_resource": "imagenes/Paipa_Boyaca.jpg" ,
       "text":"<b>Home</b> <br> El mapa interactivo de Paipa es un resumen sobre la gran cantidad de lugares turísticos que contiene el municipio, dada us gran riqueza ambiental en cuanto a biodiversidad, histórica, agrónoma, entre otros lo que la hace ser la capital turística del departamento de Boyacá."
    },
    "Lago_Sochagota": {
       "img_resource": "imagenes/sochagota.jpg" ,
       "text":"<b>Lago Sochagota</b> <br> El Lago de Sochagota es uno de los atractivos más interesantes del municipio de Paipa. Es un cuerpo de agua que cuenta con un sendero ecológico a su alrededor que brinda un bello paisaje y la posibilidad de realizar actividades deportivas con tranquilidad."
    },
    "Termales": {
        "img_resource": "imagenes/paipa-termales.jpg" ,
        "text":"<b>Instituto termal de Paipa</b> <br> El instituto termal de Paipa es uno de los lugares turísticos mas atractivos del municipio, es un parque acuático que cuenta con aguas termominerales que contienen varios nutrientes importantes para el cuerpo humano, por ello es un gran atractivo turístico además de sus servicios de lodoterapia, algaterapia, sauna, spa, entre otros."
    },
    "Laguna_Seca": {
        "img_resource": "imagenes/laguna_Seca.jpg" ,
        "text":"<b>Laguna Seca</b> <br> La laguna seca es una laguna que contiene un bello sendero ecológico, funciona como fuente hídrica de los municipios de Santa Rosa y de Paipa, es un lugar muy importane debido a la biodiversidad que alberga, dentro de los que destacan los frailejones que son entes muy importantes para la conservación del agua en el área. Un lugar con un paisaje increíble y para concocer las disitntas especies que la habitan."
    },
    "Palermo": {
        "img_resource": "imagenes/palermo.jpg" ,
        "text":"<b>Palermo</b> <br> El corregimiento de Palermo es un corregimiento a las afueras del municipio de Paipa, el cuál además de ser un atractivo turístico cuenta con cosechas de mora, agras, papa, entre otros y es un canal comercial entre los departamentos de Boyacá y Santander. Cuenta con un parque central y un recorrido para diversos eventos deportivos, dentro de los que se destaca el ciclismo."
    }
}


function displayImgText(index){
    document.getElementById("img_resource").style.display = "block";
    if(index == "Lago_Sochagota" || index == "Termales"){
        document.getElementById("img_resource").style.width = "25%";
    }
    document.getElementById("img_resource").src =  resources[index]["img_resource"];
    document.getElementById("text").innerHTML = resources[index]["text"];
    document.getElementById("info_map").scrollIntoView();
}

function displayVideoText(index){

}