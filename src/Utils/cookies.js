export function setCookie(name, value, years) {
    var expires = "";
    if (years) {
        var CookieDate = new Date();
        CookieDate.setFullYear(CookieDate.getFullYear() + years);
        expires = "; expires=" + CookieDate;
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function getCookie(cName) {
    let name = cName + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
}

export function checkCookie(name) {
    let cName = getCookie(name);
    if (cName != '' && cName != undefined) {
        return true;
    } else{
        return false;
    }
}