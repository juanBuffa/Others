
$("document").ready(
        function () {
            let divi = document.getElementById("divis");
            $("#footer-button").click(
                    function () {
                        divi.style.visibility = "visible";
                        this.style.visibility = "hidden";
                    }
            );
        }
);



function salir() {
    document.getElementById("divis").style.visibility = "hidden";
    document.getElementById("footer-button").style.visibility = "visible";
}
