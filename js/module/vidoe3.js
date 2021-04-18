const button = document.querySelectorAll('.show-controls button'),
    speedplayy = document.querySelector('.colonia');

const playyy = document.querySelector('.playanddpause'),
      mute = document.querySelector('#mutee'),
      caption = document.querySelector('.captain'),
      
      timeLabel = document.querySelector('.time2'),
      proggress = document.getElementById('.progress2'),
      progressBar = document.getElementById('progress-bar2');

function videocontrols(){


    if(this.dataset.media == 6){
        if(speedplayy.paused) {
            speedplayy.load();
            speedplayy.play();
            playyy.innerHTML = '<i class="pause circle icon"></i>';

          } 
          else {
            speedplayy.pause();
            playyy.innerHTML = '<i class="play circle icon"></i>';
        }
    }


    else if(this.dataset.media == 7){
        speedplayy.pause();
        speedplayy.currentTime = 0;
        playyy.innerHTML = '<i class="play circle icon"></i>';
    }

    
    else if(this.dataset.media == 8){
        speedplayy.currentTime -= 3;
    }

    else if(this.dataset.media == 9){
        speedplayy.currentTime += 3;
        if(speedplayy.currentTime >= speedplayy.duration || speedplayy.paused) {
            speedplayy.pause();
            speedplayy.currentTime = 0;
            playyy.innerHTML = '<i class="play circle icon"></i>';
        }
    }

    else if (this.dataset.media == 11) {
        if (speedplayy.muted) {
            speedplayy.muted = !speedplayy.muted;
            mute.innerHTML = '<i class="volume up icon"></i>';
        } else {
            speedplayy.muted = !speedplayy.muted;
            mute.innerHTML = '<i class="volume off icon"></i>';
        }
    }

    else if(this.dataset.media == 10){
        if(speedplayy.textTracks[0].mode == 'hidden'){
            speedplayy.textTracks[0].mode = 'showing';
            caption.innerHTML = '<i class="closed captioning icon"></i>';
        }
        else{
           
            speedplayy.textTracks[0].mode = 'hidden';
            caption.innerHTML = '<i class="closed captioning outline icon"></i>';
        }
    }
   
}


function progressTime(){
    let minutes = Math.floor(speedplayy.currentTime / 60);
    let seconds = Math.floor(speedplayy.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;
  
    if (minutes<10) {
      minuteValue = "0" + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds<10) {
      secondValue = "0" + seconds;
    } else {
      secondValue = seconds;
    }
  
    let mediaTime = minuteValue + ":" + secondValue;
    timeLabel.textContent = mediaTime;
}

speedplayy.textTracks[0].mode = 'hidden';


speedplayy.addEventListener("timeupdate", progressTime);

button.forEach(show=>show.addEventListener("click", videocontrols));
