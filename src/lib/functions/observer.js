

const reveal = () => {
  const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal')
      }
    })
  })
  
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach(el => observer.observe(el))
}

export default reveal