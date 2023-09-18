 
//// INPUT CONDITIONS NEEDED
var inputWord1 = document.getElementById('input_1')
var inputWord2 = document.getElementById('input_2')
var inputWord3 = document.getElementById('input_3')
var inputWord4 = document.getElementById('input_4')
var inputWord5 = document.getElementById('input_5')
var inputWord6 = document.getElementById('input_6')
var inputWord7 = document.getElementById('input_7')
var inputWord8 = document.getElementById('input_8')

var outputWord1 = document.getElementById('word_1')

var inputVertific = document.getElementById('input_1', 'input_2', 'input_3', 'input_4', 'input_5', 'input_6', 'input_7', 'input_8' )
alertText = document.getElementsByClassName('not-letters')


function inputVertification() {
if (inputVertific !== 'text'){
 
}

}






function output1(){
 
  var output1 = inputWord1.value
  fruit_1.textContent = output1
  fruit_2.textContent = output1
  fruit_3.textContent = output1
  fruit_4.textContent = output1
  fruit_5.textContent = output1
 
  return output1

}

function output2(){

  var output2 = inputWord2.value
  profession_1.textContent = output2

  return output2
}

function output3(){

  var output3 = inputWord3.value

  person_1.textContent = output3
  person_2.textContent = output3
  person_3.textContent = output3
  return output3
}

function output4(){

  var output4 = inputWord4.value
  animal_1.textContent = output4
  animal_2.textContent = output4

  return output4
}

function output5(){

  var output5 = inputWord5.value
  aName_1.textContent = output5
  aName_2.textContent = output5
  aName_3.textContent = output5
  return output5
}

function output6(){

  var output6 = inputWord6.value
  place.textContent = output6
   return output6
}

function output7(){

  var output7 = inputWord7.value
  clothing.textContent = output7
  return output7
}

function output8(){
  var output8 = inputWord8.value
  adjective.textContent = output8
   return output8
}

document.getElementById('story_button').onclick = function() { myFunction() };

function myFunction() {
  output1()
  output2()
  output3()
  output4()
  output5()
  output6()
  output7()
  output8()
}

