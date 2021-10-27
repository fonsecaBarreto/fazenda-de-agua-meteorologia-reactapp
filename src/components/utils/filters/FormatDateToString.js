
export function formatDateToString (data) {

     function concatZero(numero){
          if (numero <= 9) return "0" + numero;
          return numero; 
     }

     return ( data.getFullYear() + "-" + (concatZero(data.getMonth()+1).toString()) + "-" + concatZero(data.getDate().toString()) ) ;   

}

