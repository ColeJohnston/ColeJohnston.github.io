

// Make clicking anywhere inside a .card navigate to its primary .card-link,
// but allow native clicks on anchors/buttons/inputs to work normally
document.querySelectorAll(".card").forEach((card) =>
{
    const link = card.querySelector(".card-link");
    if (!link) return;

    card.addEventListener("click", (e) =>
    {
        if (
            e.target.tagName !== "A" &&
            !["BUTTON", "INPUT"].includes(e.target.tagName)
        )
        {
            e.preventDefault();
            link.click();
        }
    });
});


function myFunction()
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || x.className === "topnavIcon")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "topnav";
    }
}
