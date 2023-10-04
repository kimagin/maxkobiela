//ToolBox
import {
  delay, // Asynchronus delay function : delay(time)
  log, // shorthand console.log : log()
  select, //Custom querrySelector : select(element, ?all[true:false])
  event, // Custom event listener : event(element,event,callback)
  classlist, // Class manipulator : classlist(element,action["+"(add),"-"(remove),"x"(toggle)],class(string or [])),
  debounce, // Debounce ( runs the function only after the specified delay ) : debounce(function,delay)
  throttle, // Throttle ( runs the function n times per specified amount time ) : throttle(function,interval)
  random, // Random number generator : random(min,max)
} from './utils'

import Alpine from 'alpinejs'
import heroSlideShow from './heroSlideShow'
import logic from './logic'
import intersect from '@alpinejs/intersect'
import { animate, scroll } from 'motion'

Alpine.plugin(intersect)

Alpine.data('HSlide', heroSlideShow)
Alpine.data('Logic', logic)

window.Alpine = Alpine

const initApp = async () => {
  // 🚩 Global JavaScript ...

  // Dom Elements
  const mainLogo = document.querySelector('#main-logo')
  const navigation = document.querySelector('#navigation')
  const heroImage = document.querySelector('#heroImage')
  animate(
    heroImage.childNodes[1],
    { opacity: [0, 1], scale: [1.2, 1] },
    { delay: 0.2, duration: 0.8 }
  )
  scroll(animate(heroImage, { scale: [1, 1.4] }))
  animate(
    mainLogo,
    { opacity: [0, 1], y: [-10, 0] },
    { delay: 1.5, duration: 0.5, easing: 'ease-in-out' }
  )
  animate(
    navigation,
    { opacity: [0, 1], y: [-10, 0] },
    { delay: 1.8, duration: 0.5, easing: 'ease-in-out' }
  )
  log('⚡ DOM successfully Loaded')
}

event(document, 'DOMContentLoaded', initApp)
