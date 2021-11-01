const units = document.getElementById('units')
const weightUnit = document.querySelector('.weightUnit')
const heightUnit = document.querySelector('.heightUnit')
const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const getBMI = document.getElementById('getBMI')

let isStandard = true;
const result = document.querySelector('.result')



units.addEventListener('change',function(){
  if(units.value === 'english'){
    weightUnit.textContent = 'in pounds/lbs'
    heightUnit.textContent = 'in foot & inches (separate them via period)'
    isStandard = false
  }else{
    weightUnit.textContent = 'in kilograms'
    heightUnit.textContent = 'in meters'
    isStandard = true

  }
})


function GetBMI(weight,height){
  let bmiScore;
  let realHeight;
  let inchHeight = height
  inchHeight = inchHeight.toString()
  inchHeight = inchHeight.split('.')
  if (inchHeight.length >= 2){
  realHeight = parseInt(inchHeight[0]) + parseFloat(inchHeight[1]/12)}
  else{
  realHeight = height}




  if (!isStandard){
    this.weight = weight * 0.453592
    this.height = realHeight * 0.3048
  }else{
    this.weight = weight
    this.height = height
  }
  this.getIndex = ()=>{
    console.log(this.weight)
    console.log(this.height)
    bmiScore = this.weight/(this.height * this.height)
    bmiScore = bmiScore.toFixed(1)
    console.log(bmiScore)

  }

  Object.defineProperty(this,'bmiScore',{
    get:function(){
      return bmiScore
    }
  })

}


getBMI.addEventListener('click',()=>{
  if (!weight.value || !height.value){
    alert('Make sure to input all fields before submitting')
  }else{
    let bmi = new GetBMI(weight.value, height.value)
    bmi.getIndex()
    result.innerHTML = `Your BMI:  ${bmi.bmiScore}`
  }
})
