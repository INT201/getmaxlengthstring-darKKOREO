const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === null || arrayOfString=== undefined){
    return undefined
  }else{
     let arr = arrayOfString.map(len =>len.length)
     let lenMax = Math.max(...arr)
     return arrayOfString.filter(len =>len.length ===lenMax)
  }

}
module.exports = getMaxLengthString
