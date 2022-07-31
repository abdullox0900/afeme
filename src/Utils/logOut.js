function LogOut(e) {
    e.preventDefault();
    localStorage.removeItem("Token");
    localStorage.removeItem("user_id");
    window.location.href = '/';
}
export default LogOut