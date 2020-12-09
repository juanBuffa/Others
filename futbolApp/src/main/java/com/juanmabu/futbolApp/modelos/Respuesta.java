package com.juanmabu.futbolApp.modelos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author juanc
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Respuesta {

    private List<Posiciones> standings = new ArrayList<>();

    public List<Posiciones> getStandings() {
        return standings;
    }

    public void setStandings(List<Posiciones> standings) {
        this.standings = standings;
    }

    @Override
    public String toString() {
        return "Tabla{" + "standings=" + standings + '}';
    }

}
