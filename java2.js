// Avatar Image Selecting

const avatars = [ "buffer" , "Icons_05.png" , "Icons_06.png" , "Icons_07.png" , "Icons_08.png" , "Icons_09.png" , "Icons_12.png" , "Icons_21.png" , "Icons_22.png" , "Icons_23.png" , "Icons_24.png" , "Icons_25.png" , "Icons_26.png" , "Icons_27.png" , "Icons_28.png" ,"Icons_29.png" , "Icons_30.png" , "Icons_31.png"  , "Icons_33.png", "Icons_34.png" , "Icons_35.png" , "Icons_36.png" , "buffer"] ; 

const img = document.getElementById("avatar") ;

const left = document.getElementById("arrow-left");

const right = document.getElementById("arrow-right");

i=1;

left.addEventListener("click" , () => {

    if(i == 21)
    {
        i = 0 ;

        
    }

    const imgpath = `Assests/Images/Avatars/Portraits with back/${avatars[i+1]}` ; 

    img.src = imgpath ; 

    i++;

})

right.addEventListener("click" , () => {

    if(i == 1)
    {
        i = 22 ;
    }

    const imgpath = `Assests/Images/Avatars/Portraits with back/${avatars[i-1]}` ; 

    img.src = imgpath ; 

    i--;

})


// OnLoad function

window.onload = function() {
    const imgpath = `Assests/Images/Avatars/Portraits with back/${avatars[1]}` ; 

    img.src = imgpath ; 
 };