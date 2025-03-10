const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/God-war.mp4','videos/Mortel-comport.webm', 'videos/The lost of us.mp4','videos/Unstand.mp4',];

let index = 0;
 nextButton.addEventListener('click', function() {
    index += 1 ;
    video.src = movieList[index]

    if (index === 3){
        index = -1;
    }

 });
