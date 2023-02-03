import { writable } from 'svelte/store'


const isMenu = writable()
const width = writable()
const height = writable()
const scrollY = writable()
const scrollX = writable()


export {
  width,
  isMenu,
  height,
  scrollY,
  scrollX
}