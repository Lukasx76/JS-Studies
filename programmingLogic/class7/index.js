// working with the Date object

function getDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getUTCHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${day}-${month}-${year} ${hour}:${minute}:${second}`
}

console.log(getDate())