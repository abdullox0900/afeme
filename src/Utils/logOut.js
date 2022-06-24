function LogOut() {

    localStorage.removeItem("Token");
    window.location.href = '/Afeme';
}
export default LogOut