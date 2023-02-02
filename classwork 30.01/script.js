let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }



function addingKeyToObj (){
    let result = 0
 for (let i in salaries){
result += salaries[i]
 }
 console.log (result)
}
