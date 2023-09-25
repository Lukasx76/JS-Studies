function getHoursAndMinute(date) {
    if (date && !(date instanceof Date)) {
        throw("Expecting a Date object");
    }
    if (!date){
        date = new Date()
    }

    return date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12 : false
    })
}

try {
    console.log(getHoursAndMinute(new Date("10-18-2002 05:00")));
    console.log(getHoursAndMinute(12));
} catch(err) {
    console.log(err);
} finally {
    console.log("Finishing the script...");
}