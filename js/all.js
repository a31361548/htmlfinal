
// 小球跟隨
function getRandomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

const ballElement = document.getElementById('myBox');

function changeBorderColor() {
  const newColor = getRandomRGB();
      gsap.to(ballElement, 0.5, { borderColor: newColor });
      // 添加光晕效果（模拟）
      ballElement.style.boxShadow = `0 0 20px ${newColor}`;
}



gsap.set(".ball", {xPercent: -120, yPercent: -50});

let targets = gsap.utils.toArray(".ball"); 

window.addEventListener("mousemove", e => {
  gsap.to(targets, {
    duration: 0.35,
    x: e.pageX,
    y: e.pageY,
    ease: "none",
    overwrite: "auto",
  });
});

setInterval(changeBorderColor, 2000);


// swiper
const swiper1 = new Swiper("#home", {
  loop: true,     // 無限循環
  speed: 1500,    //動畫持續時間
  autoplay: { delay: 3000 }, //自動播放，
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction: "horizontal",
  slidesPerView: 1,
});

// 雲
const float_tl = gsap.timeline({
  ease: 'none'
})

float_tl
  .from('.float-wrap-01', {
  })
  .from(
    '.float-wrap-02',
    {
    },
    '<'
  )
  .from(
    '.float-wrap-03',
    {

    },
    '<'
  )
  .from(
    '.float-wrap-04',
    {

    },
    '<'
  )
  .from(
    '.float-wrap-05',
    {

    },
    '<'
  )

  $('.cloud').each(function (index, cloud) {
    // 設定樣式的初始值
    gsap.set(cloud, {
      opacity: 0.3,
      position: 'absolute',
      x: function () {
        return index % 2 === 0 ? -$(window).width() : $(window).width()
      }
    })
    //補間動畫
    gsap.to(cloud, {
      x: function () {
        return index % 2 === 0 ? $(window).width() : -$(window).width()
      },
      onRepeat() {
        $(cloud).css({
          bottom:0
        })
      },
      repeat: -1,
      duration: 15,
      ease: 'none'
    })
  })

  /* footer swiper */
  const swiper2 = new Swiper(".logo-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,  
  speed: 1000, 
  autoplay: { delay: 1000 },
  });