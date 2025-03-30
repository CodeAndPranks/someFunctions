 //Function: Mirror & reset page function.
     function mirrorPage () {
            document.body.style.transform = "scaleX(-1)";
            setTimeout(function() {
   // Second mirror
                document.body.style.transform = "scaleX(1)";
            }, 500); 
   // Third mirror
            setTimeout(function() {
                document.body.style.transform = "scaleX(-1)";
            }, 1000);

            // Reload the page after 2 seconds from the start
            setTimeout(function() {
                location.reload(); 
            }, 2000);
        }
 
//Function messUp :
let radius = 100; // Set a fixed radius for the spinning effect
 
// Initialize  variable R
let R = 0;

// Define variables used in  animation
let x1 = 1, x2 = 2, x3 = 3, x4 = 100, x5 = 150;
let y1 = 1, y2 = 2, y3 = 3, y4 = 100, y5 = 150;

//  call function here: [button click]
function messUp () {
     //Rotate any script-tag's you like ,or all tag-name  /*
  
      let DI = document.querySelectorAll( '*');  
    

    let DIL = DI.length;

    //animate the elements
    function A() {
        for (let i = 0; i < DIL; i++) { 
            let DIS = DI[i].style; 
            DIS.position = 'absolute'; 
            DIS.left = (Math.sin(R * x1 + i * x2 + x3) * x4 + x5) + "px"; 
            DIS.top = (Math.cos(R * y1 + i * y2 + y3) * y4 + y5) + "px";
        }
        R++;
    }

    // Start the animation with a 200 ms interval//Try differens speed
    let intervalID = setInterval(A, 200); 

    // Stop the animation after 2 seconds
    setTimeout(function() {
        clearInterval(intervalID); // Stop the animation(4 sec)
        location.reload();         //reload after 4 sec animation(spinn)
    }, 4000);                      //Costumice 
}

 //Function:Spinn page faste-and-faster 
 function spinnPage () {
document.documentElement.style.transitionDuration="5s";
document.documentElement.style.transitionTimingFunction="ease-in";
document.documentElement.style.transform="rotate(3600deg)";
  }                
    
//Function:Turn smootly 180dgs to rigth.Images change,and turnRigth pop up("resetImg").
     function turnRight() {
            // Turn Left transformation
            ['', '-ms-', '-webkit-', '-o-', '-moz-'].forEach(function(prefix) {
                document.body.style[prefix + 'transition'] = 'transform 4s';
                document.body.style[prefix + 'transform'] = 'rotate(180deg)';
            });

            // Timeout to show the reset image ("resetImg") and the old image ("img2")
            setTimeout(function() {
                document.getElementById("resetImg").style.display = "inline"; 
                document.getElementById("img2").style.display = "inline"; 
                document.getElementById("img1").style.display = "none"; 
            }, 5000); 
        }
        //Turn Rigth (reset page) 
        function resetPage() {
            // Reset the transformation
            ['', '-ms-', '-webkit-', '-o-', '-moz-'].forEach(function(prefix) {
                document.body.style[prefix + 'transform'] = 'rotate(0deg)';
            });
            document.getElementById("resetImg").style.display = "none";
            document.getElementById("img2").style.display = "none"; 
            document.getElementById("img1").style.display = "inline"; 
        }

        // Initially hide the images
        document.getElementById("resetImg").style.display = "none";
        document.getElementById("img2").style.display = "none"; 
        document.getElementById("img1").style.display = "inline"; 
 
//Function:A pretty nice CSS color show :    
  function colorFlash () {
 window.location.href="color.html";
 }  
     
 //Function: Rotate 360dgs in 3 steps. 
 function rotate360 () {          
 // First rotation 1/3
            document.body.style.transform = "rotate(0deg)";
            setTimeout(function() {
                document.body.style.transform = "rotate(120deg)"; 
            }, 500); // 500 milliseconds
 // Secound rotation 2/3
            setTimeout(function() {
                document.body.style.transform = "rotate(240deg)"; 
            }, 1000); // 500ms after the first.
 // Third rotation 3/3 =360deg rotated.
            setTimeout(function() {
                document.body.style.transform = "rotate(360deg)";
            }, 1500); // 500ms after the second.

            // Reload the page after 2 seconds from the start
            setTimeout(function() {
                location.reload(); 
            }, 3000);        
         }
  
 //Function:Running-warning text,then after 2 secund empty ugly grey page.
   function go_empty() { // Change a few key variables when txt starts running.

    alert("Was that smart? \nWhen finished, just reload for the start page :)");
    document.body.style.backgroundColor = "black";
    h1.innerHTML = "EMPTY HARD DISK";
    h1.style.color = "white";
    img1.style.display = "none";
    img2.style.display = "none";   
    btns.style.display = "none";  
    h3.style.display = "none";
    // p.style.display = "none";

    // Set up needs & speeds for running text.    
    let timePerLetter = 40;
    let textContainer = document.getElementById("text");
    textContainer.innerHTML = ""; // Clear previous text
    textContainer.style.color = "white";

    function printOut(str) {
        var i = 0;
        (function main() {
            var char = str[i++];
            // Check for newline character and replace it with <br>
            if (char === '\n') {
                textContainer.innerHTML += "<br>"; // Add a line break in HTML
            } else {
                textContainer.innerHTML += char; // Add the character to the text
            }

            if (i < str.length) {
                setTimeout(main, timePerLetter);
            } else {
                setTimeout(function() { //  Timeout give user time to read runner-text before txt disaperas and screen turns ugly grey.
                    textContainer.innerHTML = "";
                    h1.innerHTML = "";
                    document.body.style.backgroundColor = "grey";
                }, 5000);  
            }
        })();
    }

    // Message with newlines
    const message = "The hard disk is empty.\nNo files are possible to recover.\nPlease install an OS before you can use this unit.\nAll copyrights reserved by:\n Fed.11/99-ADv/SACR.USA Dist. of Alabama 047/.HP International, Sacramento, California USA.";
    printOut(message);
}


//Function Freez is tested on Andriod phone & tablets from version 8 to 16.[11/03-2025] 
function  freez () {
    var ok = confirm("This Freez Android Device,and some others,safe way\nDo You Want To Try ? "); 
    if (ok) {
        window.location.href = "faces.html";
    } else {
       
    }
}
