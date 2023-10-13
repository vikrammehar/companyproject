const arr = ["white", "orange", "yellow", "green", "purple", "olive"];
let i = 0;

function changeBackgroundColor() {
   
    let ram=document.querySelectorAll(".ram");

  ram[0].style.background = arr[i];
  ram[1].style.background = arr[i];
 
  i = (i + 1) % arr.length;
}

// Call the function every (1 second)
setInterval(changeBackgroundColor, 2000);
