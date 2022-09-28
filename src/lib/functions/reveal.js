
const initObserver = (type) => {
  const observer = new IntersectionObserver(enteries => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal')
      } else if (type === 'multiple') {
        entry.target.classList.remove('reveal')
      }
    })
  })

  return observer
}

const multiple = () => {
  const observer = initObserver('multiple')
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach(el => observer.observe(el))
}

const once = () => {
  const observer = initObserver()
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach(el => observer.observe(el))
}

export { 
  multiple,
  once
}