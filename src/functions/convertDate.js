const convertDate = function(number){
     var myDate = new Date(number);
     return myDate.getDate() +"/"+(myDate.getMonth()+1);
}

export default convertDate;