const playyy = document.querySelector('.playandpause');
const reversebutt = document.querySelector('.reverse');
const stoppp = document.querySelector('.stop');
const forwardbutt = document.querySelector('.forward');
const caption = document.querySelector('.caption');
const mute = document.querySelector('#mute');

const timeLabel = document.querySelector('.time');
const speedplay = document.querySelector('video');

const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');

speedplay.removeAttribute('controls');


playyy.addEventListener("click", ()=>{

     if(speedplay.paused) {
        speedplay.play();
        playyy.innerHTML = '<i class="pause circle icon"></i>';
      } 
      else {
        speedplay.pause();
        playyy.innerHTML = '<i class="play circle icon"></i>';
        
      }
});


reversebutt.addEventListener("click",()=>{
    speedplay.currentTime -= 3;
});

stoppp.addEventListener("click", () => {
    speedplay.pause();
    speedplay.currentTime = 0;
    playyy.innerHTML = '<i class="play circle icon"></i>';
});


forwardbutt.addEventListener("click",()=>{
    speedplay.currentTime += 3;
    if(speedplay.currentTime >= speedplay.duration || speedplay.paused)
    {
        speedplay.pause();
        speedplay.currentTime = 0;
        playyy.innerHTML = '<i class="play circle icon"></i>';
    }
});

speedplay.addEventListener("timeupdate", durationtime);

function durationtime(){
    let minutes = Math.floor(speedplay.currentTime / 60);
    let seconds = Math.floor(speedplay.currentTime - minutes * 60);
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


caption.addEventListener("click", ()=>{
    speedplay.appendChild = 'src="vtt/arrival.vtt">';
});


mute.addEventListener("click", ()=>{
    
    if(speedplay.muted){
        speedplay.muted = !speedplay.muted;
        mute.innerHTML = '<i class="volume up icon"></i>';
        console.log("");
    }else{
        speedplay.muted = !speedplay.muted;
        mute.innerHTML = '<i class="volume off icon"></i>';
    }
});

speedplay.addEventListener('loadedmetadata', function() {
    progress.setAttribute('max', speedplay.duration);
 });

speedplay.addEventListener('timeupdate', function() {
    if (!progress.getAttribute('max')) progress.setAttribute('max', speedplay.duration);
    progress.value = speedplay.currentTime;
    progressBar.style.width = Math.floor((speedplay.currentTime / speedplay.duration) * 100) + '%';
});


speedplay.textTracks[0].mode = 'hidden';
caption.addEventListener('click', ()=>{

    if(speedplay.textTracks[0].mode == 'hidden'){
        speedplay.textTracks[0].mode = 'showing';
        caption.innerHTML = '<i class="closed captioning icon"></i>';
    }
    else{
        speedplay.textTracks[0].mode = 'hidden';
        caption.innerHTML = '<i class="closed captioning outline icon"></i>';
    }
});