import 'normalize.css'
import './style.scss'

const prt = document.querySelector('#app')

for (let i = 0; i < 10; i++) {
  const slide = document.createElement('div')
  prt.appendChild(slide)
  slide.outerHTML = /*html*/`
  <div class="slide" style="--index: ${i}">
    <div class="slide__card">
      <div class="slide__content">    
        <h2>Slide #${i} (Scroll down)</h2>
      </div>
    </div>
  </div>
  `
}

prt.onscroll = () => {
  const amt = prt.scrollTop / prt.offsetHeight
  document.body.style.setProperty('--scroll', amt)
}