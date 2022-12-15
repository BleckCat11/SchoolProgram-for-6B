function getWordsWithS(){
let array = ['stop', 'crop', 'top', 'sport', 'post', 'lost', 'port']
let array2
for (let i of array){
 let indexOf = i.indexOf("s")
 if( indexOf != -1){
array2.push(i)
 }
}
alert (array2)
}