package com.juanmabu.futbolApp.controllers;

import com.juanmabu.futbolApp.modelos.Estadisticas;
import com.juanmabu.futbolApp.modelos.Respuesta;
import com.juanmabu.futbolApp.servicios.ServicioMailFeedback;
import com.juanmabu.futbolApp.servicios.ServicioRecepcionInformacion;
import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author juanc
 */
@Controller
public class MainController {

    @Autowired
    ServicioRecepcionInformacion servicioRecepcion;

    @Autowired
    ServicioMailFeedback servicioMailfeedback;

    @GetMapping("/")
    public String getHome(Model model, HttpServletResponse response) {
        return "home";
    }
    
    @GetMapping("/tabla/{liga}")
    public String getStandingsPage(@PathVariable("liga") String liga, Model model, HttpServletRequest request, HttpSession session) throws IOException {
        Respuesta tabla = servicioRecepcion.recibir(liga);
        session.setAttribute("tablaDeLigaSeleccionada", tabla);
        session.setAttribute("ligaSeleccionada", liga);
        model.addAttribute("tabla", tabla.getStandings().stream().findFirst().orElse(null).getTable());
        model.addAttribute("texto", new String());
        return "standingsPage";

    }

    @GetMapping("/infoDeEquipo/{name}")
    public String getTeamPage(@PathVariable("name") String name, Model model, HttpSession session) throws IOException {
        Estadisticas estadisticas = ((Respuesta) session.getAttribute("tablaDeLigaSeleccionada")).getStandings().get(0)
                .getTable().stream().filter(p -> p.getTeam().getName().equals(name)).findFirst().orElse(null);

        model.addAttribute("equipo", estadisticas);
        return "equipo";
    }

    @PostMapping("/feedback")
    public String feedback(@RequestParam("texto") String texto, Model model, HttpSession session) {
        new Thread(
                () -> {
                    servicioMailfeedback.send(texto);
                }
        ).start();

        return "redirect:/tabla/" + session.getAttribute("ligaSeleccionada");

    }

}



