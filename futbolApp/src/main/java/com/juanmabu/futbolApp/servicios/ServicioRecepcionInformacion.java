package com.juanmabu.futbolApp.servicios;

import com.juanmabu.futbolApp.modelos.Respuesta;
import java.util.Collections;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author juanc
 */
@Service
public class ServicioRecepcionInformacion {

    public Respuesta recibir(String liga) {

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.set("X-Auth-Token", "143acaa915284513ad107d4585e49459");
        HttpEntity req = new HttpEntity(headers);
        ResponseEntity<Respuesta> resp = restTemplate.exchange(
                "https://api.football-data.org/v2/competitions/"+liga+"/standings?standingType=TOTAL",
                HttpMethod.GET,
                req,
                Respuesta.class
        );
        Respuesta respuesta = null;
        if (resp.getStatusCode() == HttpStatus.OK) {
            respuesta = resp.getBody();
        } else {
            System.out.println("Request Failed");
            System.out.println(resp.getStatusCode());
        }
        return respuesta;
    }

}
