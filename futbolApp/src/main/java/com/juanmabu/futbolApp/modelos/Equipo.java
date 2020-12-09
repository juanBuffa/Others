package com.juanmabu.futbolApp.modelos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author juanc
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Equipo {
    
    private String name;
  
    private String crestUrl;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCrestUrl() {
        return crestUrl;
    }

    public void setCrestUrl(String crestURL) {
        this.crestUrl = crestURL;
    }

    @Override
    public String toString() {
        return "Equipo{" + "name=" + name + '}';
    }

}
