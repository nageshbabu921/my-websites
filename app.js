document.onreadystatechange=()=>{
    if(document.readyState==='complete'){
        const testDiv=document.getElementById('test');
        testDiv.style.color='lightblue';
        testDiv.onclick=()=>{
            testDiv.style.backgroundColor='orange';
        }
        setInterval(()=>{
          testDiv.style.color='lightgreen';
        },2000)
        setInterval(()=>{
          testDiv.style.color='yellow';

        },3000)
        const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

            
    }
}

