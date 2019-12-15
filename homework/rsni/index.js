let beauty;
let now = new Date();
let del = '/';
let 
    year = now.getFullYear();
    month = now.getMonth() +1 ;
    day = now.getDate();
    hours = now.getHours();
    mins = now.getMinutes();
    sec = now.getSeconds();

beauty = `${day}${del}${month}${del}${year} ${hours}:${ mins}:${sec}`;


console.log(beauty);