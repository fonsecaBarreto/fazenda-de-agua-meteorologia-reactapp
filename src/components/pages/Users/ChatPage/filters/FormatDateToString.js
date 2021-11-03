
 function concatZero(numero){
     if (numero <= 9) return "0" + numero;
     return numero; 
}

export function formatDateToString (date_entry) {
     var date_object = typeof date_entry === "string" ? new Date(date_entry) : date_entry;
     return ( date_object.getFullYear() + "-" + (concatZero(date_object.getMonth()+1).toString()) + "-" + concatZero(date_object.getDate().toString()) ) ;   
}

export function getDateHourToString(date_entry) {
     var date_object = typeof date_entry === "string" ? new Date(date_entry) : date_entry;
     return ( concatZero(date_object.getHours().toString()) + ":" + concatZero(date_object.getMinutes().toString()) ) ;   
}

export function getWeekDayToString(date_entry) {
     var date_object = typeof date_entry === "string" ? new Date(date_entry) : date_entry;
     return ` ${date_object.toLocaleDateString('pt-BR', { weekday: 'long' })} (${formatDateToString(date_object)})`;
}


export function getMonthToString(date_entry) {
     var date_object = typeof date_entry === "string" ? new Date(date_entry) : date_entry;
     return ` ${date_object.toLocaleDateString('pt-BR', { month: 'long' })}`;
}


