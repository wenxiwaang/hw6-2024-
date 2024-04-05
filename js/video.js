var video;

window.addEventListener('load', function() {
	console.log('Good job opening the window');
	video=document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log('Auto play is set to ' + video.autoplay);
	console.log('Loop is set to ' + video.loop);
});

let playButton = document.querySelector("#play");
let getVolume = document.querySelector("#volume")
playButton.addEventListener("click",function(){
	// i want the video play
	let video = document.querySelector("#player1");
	console.log(video);
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100+'%';
});

console.log('Pause Video');
let pause = document.querySelector('#pause');
pause.addEventListener('click', pauseVid);

function pauseVid() { 
	video.pause(); 
}



console.log('Slow down video');
let slow = document.querySelector('#slower');
slow.addEventListener('click',setPlaySpeed);
let currentSpeed = 1;
function setPlaySpeed() {
	video.playbackRate = currentSpeed - 0.1*currentSpeed;
	currentSpeed = video.playbackRate;
	console.log('New Speed: ' + currentSpeed);
} 

console.log('Speed up video');
let fast = document.querySelector('#faster');
fast.addEventListener('click',setSpeedfaster);

function setSpeedfaster() {
	currentSpeed = video.playbackRate / (1 - 0.1);
	video.playbackRate = currentSpeed;
	console.log('New Speed: ' + currentSpeed);
}


console.log('Advance video by 10 seconds');
let skipping = document.querySelector('#skip');
skip.addEventListener('click', advanceVideo);

function advanceVideo() {
	if ((video.currentTime + 10) > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log('Current time after skipping: ' + video.currentTime + ' seconds');
}

console.log('Muting the video');
let mute = document.querySelector('#mute');
mute.addEventListener('click',function(){
	let video = document.querySelector('#player1');
	video.muted = !video.muted;
	mute.innerHTML = video.muted ? 'Unmute':'Mute';
})


let volumeSlider = document.querySelector('#slider');
volumeSlider.addEventListener('change', function(){
	currentValue = volumeSlider.value;
	console.log('Current value is ', currentValue);
	console.log(video.volume);
	video.volume = currentValue/100;
	console.log(video.volume);
	document.querySelector('#volume').innerHTML= video.volume*100 + '%';
})

let style = document.querySelector('#vintage');
style.addEventListener('click',function(){
	video.classList.add('oldSchool');
})

let noStyle = document.querySelector('#orig');
noStyle.addEventListener('click', function(){
	video.classList.remove('oldSchool');
})
