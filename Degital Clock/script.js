function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let sec = "AM";
    if(h>12){
        h = h-12
    }
    if(h<=12){
        sec = "PM"
    }
    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;

    let time = `${h} : ${m} : ${s}  ${sec}`;
    document.getElementsByTagName('h1')[0].innerText = time;
    setTimeout(showTime,1000);
}