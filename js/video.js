let video = document.querySelector(".video")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("In play")
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("In pause")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate /= 1.1; 
	console.log("slowing down by " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1; 
	console.log("speeding up by " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("skipping " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	let btn = document.querySelector("#mute");
	video.muted = !video.muted;
	if (video.muted) {
		btn.textContent = "Unmute";
	}
	else {
		btn.textContent = "Mute";
	}
	console.log("Muted: ", video.muted);
});

document.querySelector("#slider").addEventListener("input", function() {
	const volSlider = document.querySelector("#slider");
	const volDisplay = document.querySelector("#volume");

	video.volume = volSlider.value / 100;
	volDisplay.textContent = (video.volume*100) + "%";

	console.log("Volume: ", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Applying Vintage Style");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Remove Vintage Style");
});
// function play(){
// 	console.log("In play")
// 	video.play();
// }

// function pause(){
// 	console.log("In pause")
// 	video.pause();
// }

// function slower() {
// 	video.playbackRate /= 1.2; 
// 	console.log("slowing down by " + video.playbackRate)
// 	// curr rate / 1.2
// }

// function faster() {
// 	video.playbackRate *= 1.2; 
// 	console.log("speeding up by " + video.playbackRate)
// }

// function skip() {
// 	video.currentTime += 15;
// 	// video.duration
// 	// video.currenetTime != 15
// 	console.log("skipping" + video.currentTime)
// }