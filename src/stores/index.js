import { writable } from 'svelte/store'


const isMenu = writable()
const screen = writable()


export {
  screen,
  isMenu
}