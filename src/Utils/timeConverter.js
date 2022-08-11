export default function TimeConverter(unix, isTime = false) {
    let a = new Date(unix * 1000);
    let months = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr",
        "Oktabr",
        "Noyabr",
        "Dekabr",
    ];
    let month = months[a.getMonth()];
    let day = a.getDay();
    let hour = a.getHours() >= 10 ? a.getHours() : '0' + a.getHours();
    let min = a.getMinutes() >= 10 ? a.getMinutes() : '0' + a.getMinutes();
    let date = day + "-" + month + " " + hour + ":" + min;
    if (isTime) {
        date = hour + ":" + min;
    }
    return date;
}