document.getElementById("toggleText1").addEventListener("click",function(){
    const content1 = document.getElementById("content1");
    toggleVisibility(content1);
});

document.getElementById("toggleText2").addEventListener("click",function(){
    const content2 = document.getElementById("content2");
    toggleVisibility(content2);
});

document.getElementById("toggleText3").addEventListener("click",function(){
    const content3 = document.getElementById("content3");
    toggleVisibility(content3);
});

document.getElementById("toggleText4").addEventListener("click",function(){
    const content4 = document.getElementById("content4");
    toggleVisibility(content4);
});




function toggleVisibility(content) {
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "flex"; 
    } else {
        content.style.display = "none"; 
    } 
}
