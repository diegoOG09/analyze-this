document.addEventListener('DOMContentLoaded', () => {

  const textarea1 = document.querySelector('#textarea-1')
  const textarea2 = document.querySelector('#textarea-2')
  const button = document.getElementById('button')
  const countedWords1 = document.getElementById('words-1')
  const countedWords2 = document.getElementById('words-2')
  const resultsDiv1 = document.querySelector('.results-text-1')
  const resultsDiv2 = document.querySelector('.results-text-2')
  const palindromes1 = document.querySelector('.palindromes-1')
  const palindromes2 = document.querySelector('.palindromes-2')


  resultsDiv1.style.display = "none"
  resultsDiv2.style.display = "none"

  function calculateText1() {
    let content_1 = textarea1.value.trim()
    let splitContent_1 = content_1.split(' ').length

    if (splitContent_1 > 1) {
      resultsDiv1.style.display = "block"
      countedWords1.textContent = `${splitContent_1}`
    }
  }

  function calculateText2() {
    let content_2 = textarea2.value.trim()
    let splitContent_2 = content_2.split(' ').length

    if (splitContent_2 > 1) {
      resultsDiv2.style.display = "block"
      countedWords2.textContent = `${splitContent_2}`
    }
  }

  function checkPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if (string === reverseString) {
      return true
    }
    else {
      return false
    }
  }

  function palindrome() {
    let count1 = 0
    let count2 = 0
    let content_1 = textarea1.value.trim().split(' ')
    let content_2 = textarea2.value.trim().split(' ')
    content_1.forEach(element => {
      if (checkPalindrome(element)) {
        count1 += 1
      }
    });
    content_2.forEach(element => {
      if (checkPalindrome(element)) {
        count2 += 1
      }
    })
    palindromes1.textContent = `El texto tiene ${count1} palindromos`
    palindromes2.textContent = `El texto tiene ${count2} palindromos`
  }

  function calculateResults() {
    calculateText1()
    calculateText2()
    palindrome()

    const upper1 = document.getElementById('upper-1')
    const upper2 = document.getElementById('upper-2')
    const lower1 = document.getElementById('lower-1')
    const lower2 = document.getElementById('lower-2')
    upper1.onclick = function() {
      textarea1.value = textarea1.value.toUpperCase()
    }
    upper2.onclick = function() {
      textarea2.value = textarea2.value.toUpperCase()
    }
    lower1.onclick = function() {
      textarea1.value = textarea1.value.toLowerCase()
    }
    lower2.onclick = function() {
      textarea2.value = textarea2.value.toLowerCase()
    }
  }
  

  button.onclick = calculateResults


})
