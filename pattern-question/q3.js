 // X pattern
 /*
 *   *
  * *
   * 
 *   *
*     *
 */
 /*
 let prompt = require('prompt-sync')(); 
 let number = Number(prompt("enter the number"));
 for(let i=1; i<=number; i++ ){
   for(let j=1;j<=number; j++){
    if(i==j || (i+j)==(number+1)){
       process.stdout.write("*"); 
    }else{
       process.stdout.write(" ");  
    }
   }
    console.log();
}
    */

 // V pattern
   /*
 *       * 
  *     *  
   *   *   
    * *    
     *  
*/ 
 let prompt = require('prompt-sync')(); 
 let number = Number(prompt("enter the number"));
 for(let i=1; i<=number; i++ ){
   for(let j=1; j<=(2*number-1); j++){
    if(i==j || i+j==(2*number) ){
       process.stdout.write("*"); 
    }else{
       process.stdout.write(" ");  
    }
   }
    console.log();
}
