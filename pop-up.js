document.addEventListener("DOMContentLoaded", docReady);
function docReady()
{
    sessionStorage.setItem('is_reloaded', 'no');
    if(sessionStorage.getItem('is_reloaded') == 'no')
    {
        sessionStorage.setItem('is_reloaded', 'yes');
        setTimeout(showPop, 4000);
    }
}
function showPop()
{
    document.getElementById("myForm").style.display = "block";
    sessionStorage.setItem('is_reloaded', 'no');
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
 }










       