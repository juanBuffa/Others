package com.juanmabu.futbolApp.modelos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author juanc
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Posiciones {

    private List<Estadisticas> table= new ArrayList<>();   

    public List<Estadisticas> getTable() {
        return table;
    }

    public void setTable(List<Estadisticas> table) {
        this.table = table;
    }

    @Override
    public String toString() {
        String s="";
        for (Estadisticas statistic : table) {
            s+=statistic+ "\n";
        }
        return s;
    }

    


    
}
