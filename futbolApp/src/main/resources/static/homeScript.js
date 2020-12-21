$("document").ready(
        function () {
            $("button").hover(
                                //cuando se pasa por encima del boton
                                function () {
                                    $("body").css("background-color", "green");
                                    this.style["background-color"] = "red";
                                    this.style["font-size"] = "20px";
                                },
                                //cuando se sale de encima del boton
                                function () {
                                    $("body").css("background-color", "darkgreen");
                                    this.style["background-color"] = "goldenrod";
                                    this.style["font-size"] = "";
                                }

                            );
            $("body").css("background-color", "darkgreen");
            $("button").each(function () {
                let form = document.createElement("form");
                form.action = "/tabla/" + this.id;
                form.append(this);
                $("#BloqueDeBotones").append(form);

            }
            );

        },
     );


