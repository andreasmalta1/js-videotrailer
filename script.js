const btnEl = document.querySelector('.btn')
const closeBtn = document.querySelector('.close-icon')
const videoEl = document.querySelector('.trailer-container')
const video = document.querySelector('video')
console.log(videoEl)

btnEl.addEventListener('click', () => {
    videoEl.classList.remove('active')
})

closeBtn.addEventListener('click', () => {
    videoEl.classList.add('active')
    video.pause();
    video.currentTime = 0;
})