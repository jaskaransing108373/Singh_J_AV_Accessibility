import "./module/video.js";
import "./module/vidoe3.js";

const custom = document.querySelector('.videoControls'),
      button = custom.querySelectorAll('img'),
      music = document.querySelector('.content2 audio');


function musicPlayer(){
    console.log("music length", music.currentTime);
  

  if(this.dataset.button == 2)
  {
    music.currentTime = 0;
    music.pause();
  }

  else if(this.dataset.button == 3)
  {
    music.currentTime = 0;
    music.play();
  }

  else if(this.dataset.button == 1)
  {
    music.pause();
  }

  else {
    music.play();
  }
}



button.forEach(data=>data.addEventListener("click",musicPlayer));