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
window.Alpine = Alpine

function Data() {
  return {
    init() {
      console.log('We have AlpineJS')
    },
    message: "This is an Alpine text"
  }
}

Alpine.data('Data', Data)


const initApp = async () => {
  // 🚩 Global JavaScript ...
  log('⚡ DOM successfully Loaded')
}

event(document, 'DOMContentLoaded', initApp)

