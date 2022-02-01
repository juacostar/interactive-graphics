function ResetVideo(){ // Funtion to reset video status
    document.getElementById("info_video").style.display = "none";
    document.getElementById("info_video").src = "none";
}

const resources = { // Object containing the information of the different places or sections in the map
    "Home" : { // Object containing the image url and text of the section
        "info_img" : "images/welcome.jpg",
        "text_info": "<b>Interactive map</b> <br> If you click on some of the buttons you will be able to visit different palces in Munich, have a lot of fun! Plese click on the home button in case you want to return here."
    },
    "Olympiapark": { // Object containing the video url and text of the section
        "video_url" : "https://www.youtube.com/embed/DnzoGBwfMzk",
        "text_info": "<b>Olympiapark</b> <br> Home to the 1972 Summer Olympics, Munich's spectacular Olympic Park covers an area of some 2.7 million square meters on the Oberwiesenfeld, a former training ground for the Royal Bavarian army. Now a major recreational center, this huge facility hosts a variety of major concerts and events, including the summer Tollwood Festival (the winter Tollwood is held at Theresienhöhe, home of the Oktoberfest). It's not just a place for locals to buy items for the night's dinner. Fresh breads and pastries, wheels of cheese, and cured meats are good picnic makings, and tables and benches provide a place for shoppers and visitors to sit while they eat sizzling sausages, hot pretzels, and other foods prepared in mobile kitchens. Above the market stands a colorful maypole, with traditionally dressed figures representing the various crafts and trades that were practiced in this part of town."
    },
    "BMW_Museum": {
        "info_img" : "images/bmw.jpg",
        "text_info": "<b>BMW Museum</b> <br> Next to BMW's soaring headquarters and factories at the Olympic Park is a round contemporary building with a metal shell, housing BMW's museum. Here, car fans will find examples of nearly all the models the company has made, including sports cars, racing models, and motorcycles. You can see current models and learn about the technology of modern automobile construction, as well as get glimpses of future propulsion technologies and designs the company is exploring. Those who think cars are just for getting from point A to point B might want to skip this one, but for fans of things automotive, it's a must."
    },
    "Tierpark": {
        "video_url": "https://www.youtube.com/embed/VTOVjGJPgfY",
        "text_info": "<b>Tierpark Hellabrunn (Hellabrunn Zoo)</b> <br> Spread across 89 acres, Hellabrunn Zoo is consistently ranked among the best zoos in Europe. Laid out in 1911, it was the first zoo in the world to have animals grouped according to where they came from. Today, more than 19,000 animals from 757 species are held in open enclosures meant to replicate the conditions of the wild, with animals that normally share habitats kept together wherever possible. Popular features include the Elephant House (now a listed building), the enormous 5,000-square-meter free-flight aviary, the Polarium, and ape houses. Located adjacent to the Isar River in a designated conservation area, the zoo has many delightful footpaths, playgrounds, and picnic spots."
    },
    "Peterskirche": {
        "info_img" : "images/Peterskirche.jpg",
        "text_info": "<b>Peterskirche (St. Peter's Church)</b> <br> Known affectionately as Old Peter, St. Peter's Church (Peterskirche) is Munich's oldest parish church and stands on Petersberg, a small hill originally settled by monks. Built in Gothic style in 1386, the church was altered with the addition of a Baroque choir with three apses in 1636, while the tower was given a lantern dome in place of its earlier Gothic spires. Interior highlights include the font by Hans Krumper, the red marble monuments by Erasmus Grasser, and the 15th-century Schrenk Altar with its sculptures of the Crucifixion and the Last Judgment. Also of note is the 20-meter-tall 18th-century high altar with its figures of the Four Fathers of the Church and St. Peter.The panel-paintings on the choir walls by Jan Polack are also worth seeing, as is the highly regarded Altar of the Virgin of Mercy (Mariahilf-Altar) from 1756."
    },
    "Residenz": {
        "info_img" : "images/Residenz.jpg",
        "text_info": "<b>Munich Residenz</b> <br> For centuries the seat of the dukes, electors, and kings of Bavaria, the Munich Residenz is one of Europe's most spectacular palaces. Laid out around seven large courts, the vast Residenz complex comprises three main sections: the Königsbau, fronting onto Max-Joseph-Platz; the Alte Residenz, facing Residenzstrasse; and the Festsaalbau (Banqueting Hall), overlooking the Hofgarten. The earliest section of this huge complex was the magnificent Antiquarium, built in 1579 and now part of the outstanding Residenz Museum. The Alte Residenz, a masterpiece of the late Renaissance and testimony to the growing power of Bavaria, followed soon after, and the final components - the Neoclassical Königsbau, the Festsaalbau, and the Court Church - were completed in 1848. Today, the Residenz houses a number of monuments and museums, including the Residenz Museum, the Treasury, the Court Church of All Saints (Allerheiligen-Hofkirche), and Cuvilliés-Theater."
    }
}

function displayImgText(section){ // Generic function to set the value of a img + text section
    ResetVideo(); // Reset video status
    document.getElementById("info_img").style.display = "block"; // Display the image in case the display value is none
    document.getElementById("info_img").src = resources[section]["info_img"]; // Set the corresponding img url value
    document.getElementById("text_info").innerHTML = resources[section]["text_info"]; // Set the corresponding text value
    document.getElementById("Info").scrollIntoView(); // Scroll the page at the beginning of the info map section 
}

function displayVideoText(section) { // Generic function to set the value of a video + text section
    document.getElementById("info_img").style.display = "none"; // Set display image to none
    document.getElementById("info_video").style.display = "block"; // Display the video in case its value is set to none
    document.getElementById("info_video").src = resources[section]["video_url"]; // Set the corresponding video url
    document.getElementById("text_info").innerHTML = resources[section]["text_info"]; // Set the corresponding text value
    document.getElementById("Info").scrollIntoView(); // Scroll the page at the beginning of the info map section 
}