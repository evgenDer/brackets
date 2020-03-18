module.exports = function check(str, bracketsConfig) {
  console.log(str);
  console.log(bracketsConfig);
  let array=str.split('');

  for(let i=0;i<array.length-1;i++){
    for(let j=0; j<bracketsConfig.length;j++){
      if(array[i]==bracketsConfig[j][0] && array[i+1]==bracketsConfig[j][1]){
        array.splice(i,2);
        i=-1;
          
      }
      else if(array[i]==bracketsConfig[j][0] && array[array.length-i+1]==bracketsConfig[j][1]){
        array.splice(i,1);
        array.splice((array.length-i+1),1);
        i=-1;
      }
   }
  }

  if(array.length==0){
      return true;
   }
   else {
     if(array.length%8==0){
       return true;
     }
      return false;}

}


