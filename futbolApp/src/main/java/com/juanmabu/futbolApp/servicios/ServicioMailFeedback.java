package com.juanmabu.futbolApp.servicios;

import java.util.Date;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.stereotype.Service;

/**
 *
 * @author juanc
 */
@Service
public class ServicioMailFeedback {

    public void send(String feedback) {

        Properties prop = System.getProperties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.port", "465");
        prop.put("mail.smtp.ssl.enable", "true");

        Session session = Session.getInstance(prop, new javax.mail.Authenticator() {

            protected PasswordAuthentication getPasswordAuthentication() {

                return new PasswordAuthentication("cuentaparaprobarjava@gmail.com", System.getenv("futbol_pass"));

            }

        });
        Message msg = new MimeMessage(session);
        session.setDebug(true);
        try {

            msg.setFrom(new InternetAddress("cuentaparaprobarjava@gmail.com"));

            msg.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse("cuentaparaprobarjava@gmail.com", false));

            msg.setSubject("Feedback sobre la pagina futbolApp");

            msg.setText("Opinion sobre futbolAPP: " + feedback);

            msg.setSentDate(new Date());

            Transport.send(msg);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
