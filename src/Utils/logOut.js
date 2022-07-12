function LogOut(e) {
    e.preventDefault();
    localStorage.removeItem("Token");
    window.location.href = '/';
}
export default LogOut