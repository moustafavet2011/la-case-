//check the availabilty of colors in the local storage
let mainColors = localStorage.getItem("color_option");
if (mainColors!==null){
    //console.log("the loc storage is empty and you can set the value of the color");
    document.documentElement.style.setProperty('--main-color', mainColors);

//remove class active from the list item
document.querySelectorAll(".active").forEach(element =>{
    element.classList.remove("active");

    //add active class on the element if the color === the color in local storage
    if (element.dataset.color===mainColors){
        //add the active class
        element.classList.add("active");
    }
});


}
let backgroundInterval;

// random background option
let backgroundOption = true;

//check in the local storage if there is  a background item
let bacgroundLocalItem = localStorage.getItem("background_option");
// check for item 
if (bacgroundLocalItem !== null) {
    
    if (bacgroundLocalItem==='true') {
        backgroundOption=true;


    }else{
        backgroundOption=false;
    }
}
//remove class active from the spans
document.querySelectorAll(".random_backgrounds span").forEach(element =>{
    element.classList.remove("active");
    

});
if (bacgroundLocalItem='true') {
    document.querySelector(".random_backgrounds .yes").classList.add("active");
}else{
    document.querySelector(".random_backgrounds .no").classList.add("active");
}


// toggle setting box
document.querySelector(".icon_spin i").onclick =function(){
   //toggle for rqtation of icon
    this.classList.toggle("fa-spin");
    //toggle for showing the setting box
    document.querySelector(".setting_box").classList.toggle("open");
};
//switch colors of the siteweb
const colorsLi = document.querySelectorAll(".color_list li");
//make loop for each of the colors

colorsLi.forEach( li =>{
    li.addEventListener("click", (e) =>{
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        //set the color on the local storage
        localStorage.setItem("color_option",e.target.dataset.color);


        //remove active class from all chiderns
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        //add active class on the item itself
        e.target.classList.add("active");

    });

});

//switch background of the siteweb
const randomBackElement = document.querySelectorAll(".random_backgrounds span");
//make loop for each of the spans

randomBackElement.forEach( span =>{
    span.addEventListener("click", (e) =>{
    

        //remove active class from all chiderns
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        //add active class on the item itself
        e.target.classList.add("active");

        if (e.target.dataset.background==="yes") {
            backgroundOption=true;

            randomizeImgs();
            localStorage.setItem("background_option",true);
        }
        else{
            backgroundOption=false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option",false);
        }

    });

});



// select landing page element
let landingPage =document.querySelector(".landing_page");
//get array of imgs
let imgsArray =["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
//change background url randomly

//control the interval of background 

//randomize the background imgs
function randomizeImgs() {
    if(backgroundOption===true){
        let backgroundInterval = setInterval(()=>{
            //get random number
            let randomNumer =Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage ='url("../images/'+imgsArray[randomNumer] +'")';
        
        },2000);
        

    }
    
}
// creat popup with the image
let ourGallary= document.querySelectorAll(".service .galary img");

ourGallary.forEach(img =>{
img.addEventListener('click', (e) =>{

    //creat overlay element
    let overlay= document.createElement("div");
    //add class to the overlay
    overlay.className = "popup_overlay";
    //append overlay to the body
    document.body.appendChild(overlay);
    
    
    //creat the popup box
    
    let popupBox = document.createElement("div");
    
    //add class to the popup box
    
    popupBox.className = ("popup_Box");
    
      //add the alterinate text 
    if(img.alt !== null){
        //create heading
        let imgHeading = document.createElement("h3");
        
        //create the text of the heading
        
        let imgText = document.createTextNode(img.alt);
        
        //append the text to the heading
        
        imgHeading.appendChild(imgText);
        
        //append the heading to the popup box
        
        popupBox.appendChild(imgHeading);
       
       }
    
    
    // creat the image inside the popup box
    
    let popupImage = document.createElement("img");
     
 //set image source
     
    
     popupImage.src = img.src;
    
    //add the image inside the popup box
    
    popupBox.appendChild(popupImage);
    
    //append the popup box to the body
    
   document.body.appendChild(popupBox);
    
    //creat the close span
    let closeSpan = document.createElement("span");
    
    //create the close span text
    let closeSpanText = document.createTextNode("X");
    
    // append the text to the close span
    
    closeSpan.appendChild(closeSpanText);
    // add a class to the close span
    closeSpan.className = ("close_button");
    //add close span to the popup box
    
    popupBox.appendChild(closeSpan);
    
    

    
});




});


//close the popup

document.addEventListener('click', function (e){
    
    if(e.target.className=="close_button"){
        // remove the current popup
        e.target.parentNode.remove();
        
        //remove the overlay
        document.querySelector(".popup_overlay").remove();
    }
    
});

// toggle the menu links
let toggleButton = document.querySelector(".toggle_menu");
let tLinks = document.querySelector(".links");

toggleButton.onclick = function (e) {
    //stop the propagation
    e.stopPropagation();
//toogle the menu active classe on the button
    this.classList.toggle("menu_active");
    //toggle the open class on the button 
    tLinks.classList.toggle("open");   
};
// click anywhere to close the toggle button
document.addEventListener("click",(e) =>{
    if (e.target !==toggleButton && e.target!==tLinks) {
        //check if the menu is open or not
        if (tLinks.classList.contains("open")) {
            //toogle the menu active classe on the button
            toggleButton.classList.toggle("menu_active");
            //toggle the open class on the button 
            tLinks.classList.toggle("open"); 
        }
    };

});
//stop propagation on the menu
tLinks.onclick=function(e) {
    e.stopPropagation();
}