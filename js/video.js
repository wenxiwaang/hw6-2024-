var video;

window.addEventListener('load', function() {
	console.log('Good job opening the window');
	video=document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log('Auto play is set to ' + video.autoplay);
	console.log('Loop is set to ' + video.loop);
});

console.log('Play Video');
let vid = document.getElementById('player1'); 
let play = document.querySelector('#play');
play.addEventListener('click', playVid);

function playVid() { 
  vid.play(); 
}


console.log('Pause Video');
let pause = document.querySelector('#pause');
pause.addEventListener('click', pauseVid);

function pauseVid() { 
	vid.pause(); 
}



console.log('Slow down video');
let slow = document.querySelector('#slower');
slow.addEventListener('click',setPlaySpeed);
let currentSpeed = 1;
function setPlaySpeed() {
	vid.playbackRate = currentSpeed - 0.1*currentSpeed;
	currentSpeed = vid.playbackRate;
	console.log('New Speed: ' + currentSpeed);
} 

console.log('Speed up video');
let fast = document.querySelector('#faster');
fast.addEventListener('click',setSpeedfaster);

function setSpeedfaster() {
	currentSpeed = vid.playbackRate / (1 - 0.1);
	vid.playbackRate = currentSpeed;
	console.log('New Speed: ' + currentSpeed);
}


console.log('Advance video by 10 seconds');
let skipping = document.querySelector('#skip');
skip.addEventListener('click', advanceVideo);

function advanceVideo() {
	if ((vid.currentTime + 10) > vid.duration) {
		vid.currentTime = 0;
	} else {
		vid.currentTime += 10;
	}
	console.log('Current time after skipping: ' + vid.currentTime + ' seconds');
}

console.log('Muting the video');
let muting = document.querySelector('#mute');
mute.addEventListener('click',soundVideo);

function soundVideo() {
	if (vid.muted) {
		vid.muted = false;
		mute.textContent = 'Mute';
	} else {
		vid.muted = true;
		mute.textContent = 'Unmate';
	}
} 

let volumeSlider = document.getElementById('slider');

volumeSlider.addEventListener('change', function(){

	currentValue = volumeSlider.value;
	console.log('Current value is ', currentValue);
	vid.volume = currentValue / 100; 
	document.getElementById('volume').innerHTML= (vid.volume * 100) + '%';
})

let style = document.querySelector('#vintage');
style.addEventListener('click',function(){
	video.classList.add('oldSchool');
})

let noStyle = document.querySelector('#orig');
noStyle.addEventListener('click', function(){
	video.classList.remove('oldSchool');
})
