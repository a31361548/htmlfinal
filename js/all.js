
// 小球跟隨
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
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

setInterval(changeBorderColor, 1000);


// swiper
const swiper = new Swiper("#home", {
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
    // 也可以 set 用來設定樣式的初始值
    gsap.set(cloud, {
      opacity: 0.6,
      position: 'absolute',
      x: function () {
        return index % 2 === 0 ? -$(window).width() : $(window).width()
      }
    })
    // to 是做補間動畫
    gsap.to(cloud, {
      x: function () {
        return index % 2 === 0 ? $(window).width() : -$(window).width()
      },
      // 動畫重複撥放時執行的函式
      onRepeat() {
        // 將霧的 top 設定為隨機值
        $(cloud).css({
          bottom:0
        })
      },
      repeat: -1,
      duration: 15,
      ease: 'none'
    })
  })