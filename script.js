document.getElementById('button').addEventListener('click', movie)

let age = 18
let day = ''

function movie () {
  age = document.getElementById('input').value
  age = parseInt(age)
  day = document.getElementById('day').value

  if ((age < 19) && (day === 'monday' || day === 'friday')) {
    document.getElementById('answer').innerHTML = 'time for school'
    } else if (( age >= 18) && (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'friday' || day === 'thursday')) {

  document.getElementById('answer').innerHTML = 'time for work'
  } else if ((age >= 19) && (day === 'sunday' || day === 'saturday')) {

    } else if ((age <= 19) && (day === 'sunday' || day === 'saturday')) {
    document.getElementById('answer').innerHTML = 'yay weekend, no school!!'
  }
  document.getElementById('movie').innerHTML = 'thank you for verifying your age and todays date'
}
