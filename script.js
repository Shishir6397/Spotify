console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs=[
    {songName:"Let Me Love You",filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Closer",filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Hey Jude by Beatles",filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Love Me Like You Do",filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Lover",filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Blank Space",filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Perfect",filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"November Rain-guns N Roses",filePath:"songs/8.mp3", coverPath:"covers/8.jpg"}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})



audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})







