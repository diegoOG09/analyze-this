document.addEventListener('DOMContentLoaded', () => {

  // VARIALBES
  const textarea1 = document.querySelector('#textarea-1')
  const textarea2 = document.querySelector('#textarea-2')
  const button = document.getElementById('button')
  const resultsDiv = document.getElementById('results')
  const words_1 = document.getElementById('words-1')
  const words_2 = document.getElementById('words-2')
  const p_1 = document.getElementById('result-1')
  const p_2 = document.getElementById('result-2')


  // hiding the results p
  p_1.style.display = "none"
  p_2.style.display = "none"

  const calculateResults = () => {
    // get the text from textarea and trim it
    let content_1 = textarea1.value.trim()
    // get the length from the array created with split method
    let splitContent_1 = content_1.split(' ').length
    let content_2 = textarea2.value.trim()
    let splitContent_2 = content_2.split(' ').length

    if (splitContent_1 > 1) {
      p_1.style.display = "block"
      words_1.textContent = `${splitContent_1}`
    }
    if (splitContent_2 > 1) {
      p_2.style.display = "block"
      words_2.textContent = `${splitContent_2}`
    }
  }

  button.onclick = calculateResults;



})
