  //Function messUp;
 //Rotate script-tag you want,or all with astric(*)
let R = 0;//intilyze variable (R).

// Define the variables used in the animation
let x1 = 1, x2 = 2, x3 = 3, x4 = 100, x5 = 150;
let y1 = 1, y2 = 2, y3 = 3, y4 = 100, y5 = 150;

// messUp() is called by button click here:
function messUp() {
    // Get all elements (images or others)
    let DI = document.getElementsByTagName("*");//Expriment with ,h1,h2,img,/*. 
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

    // Stop the animation after 5 seconds
    setTimeout(function() {
        clearInterval(intervalID); // Stop animation,
        location.reload();         
    }, 5000);                      //rotate time.
}   
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
        
 //Function:Spinn page faste-and-faster 
 function spinnPage () {
document.documentElement.style.transitionDuration="5s";
document.documentElement.style.transitionTimingFunction="ease-in";
document.documentElement.style.transform="rotate(3600deg)";
  }                
    
//Function:Turn smootly 180dgs to rigth.Images change,and turnRigth pop up("resetImg").
     function turnLeft() {
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
function go_empty () {      //change a few key variables when txt start run.
  alert("Was that smart ? \n When finish just reload for start-page:)")
  document.body.style.backgroundColor="black"
  h1.innerHTML="EMPTY HARD DISK"
  h1.style.color="white"
  img1.style.display="none"
  img2.style.display="none"   
  buttons.style.display="none"  
  h3.style.display="none"
//Set up needs & speeds for running text.    
    let timePerLetter = 40,
    text = document.createTextNode('');

    document.getElementById("text").appendChild(text);
    document.getElementById("text").style.color="white"

function printOut(str) {
   var i = 0;
   (function main() {
    var char = str[i++];
    text.nodeValue += char;
if(i < str.length)
   setTimeout(main, timePerLetter);
 else 
   setTimeout(function() { //chang background again & remove runner-text 2 secound after it finish.
     text.nodeValue = ""
     h1.innerHTML = ""
     document.body.style.backgroundColor="grey"
  }, 2000);  
  })();
}
printOut("...The hardisk is empty.Please install a OS before you can use this unit.All Coyrihgts reserved by: Fed.11/99-ADv/SACR.USA Dist.of.Alabm 047/.HP Internactional,Sacramento,California USA.")
}
      
//Function Freez is tested on Andriod phone & tablets from version 8 to 16.[11/03-2025] 
//'wiew' try open a 2'nd script,a infinity-loop,while storages fills up and 'wiew's image freez unit..
    function freeze () { 
 window.location.href="https://codeandpranks.github.io/wiew";
    }