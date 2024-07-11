function openPopup(){
    document.getElementById("popup").style.display = "block";
}
  
  function closePopup(){
    document.getElementById("popup").style.display = "none";
}
  function Alt() {
    var div = document.querySelector('.popup-content');
    var computedStyle = window.getComputedStyle(div); 
    var backgroundImage = computedStyle.getPropertyValue('background-image');
  
      console.log("Background atual:", backgroundImage); 
  
      if(backgroundImage == 'url("https://i.pinimg.com/originals/0d/f6/fa/0df6fa2f3d00cb2c2148cefb82975a49.gif")'){
          div.style.backgroundImage = "url('https://giffiles.alphacoders.com/221/221846.gif')"; 
      }
      if(backgroundImage == 'url("https://giffiles.alphacoders.com/221/221846.gif")'){
          div.style.backgroundImage = "url('https://i.redd.it/bpxxqqvps4h91.gif')"; 
      }
      if(backgroundImage == 'url("https://i.redd.it/bpxxqqvps4h91.gif")'){
        div.style.backgroundImage = "url('https://uploads-ssl.webflow.com/649891a4a675d07f980899e0/649a2f5596a76e5eb3c01f4d_Ocean-Adam-Ayash-4k-Wallpaper.gif')";
      }
      if(backgroundImage == 'url("https://uploads-ssl.webflow.com/649891a4a675d07f980899e0/649a2f5596a76e5eb3c01f4d_Ocean-Adam-Ayash-4k-Wallpaper.gif")'){
          div.style.backgroundImage = "url('https://i.pinimg.com/originals/0d/f6/fa/0df6fa2f3d00cb2c2148cefb82975a49.gif')"; 
      }
}