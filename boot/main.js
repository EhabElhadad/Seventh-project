
var layer=document.querySelector(".layer")
var imgs=Array.from(document.querySelectorAll(".img-fluid"))
var layerItem=document.getElementById("layer-item")
var currentIndex=0;
for(var i=0;i<imgs.length;i++)
{
imgs[i].addEventListener("click",function(e)
{
layer.style.display="flex"
var imgsSrc=(e.target.src)
layerItem.style.backgroundImage=`url(${imgsSrc})`
currentIndex=(imgs.indexOf(e.target))
})

}


var closeSlider=document.getElementById("close")
var nextSlider=document.getElementById("next")
var prevSlider=document.getElementById("prev")

closeSlider.addEventListener("click",closeSlide)
function closeSlide()
{
    layer.style.display="none"

}



nextSlider.addEventListener("click",getNextSlide);
function getNextSlide()
{
currentIndex++
if(currentIndex==imgs.length)
{
    currentIndex=0
}
var imgsSrc=(imgs[currentIndex].src)
layerItem.style.backgroundImage=`url(${imgsSrc})`
}


prevSlider.addEventListener("click",getPrevSlide)
function getPrevSlide()
{
currentIndex--
if(currentIndex<0)
{
    currentIndex=imgs.length-1
}
var imgsSrc=imgs[currentIndex].src
layerItem.style.backgroundImage=`url(${imgsSrc})`

}


document.addEventListener("keyup",function(e)
{
   if(e.keyCode==27)
   {
       closeSlide()
   } 
   else if(e.keyCode==37||e.keyCode==40)
   {
       getPrevSlide()
   }
   else if(e.keyCode==39||e.keyCode==38)
   {
       getNextSlide()
   }
})






