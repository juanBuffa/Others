package com.juanmabu.futbolApp.servicios;

import com.sun.mail.smtp.SMTPTransport;
import java.util.Date;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
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
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(prop, null);
        Message msg = new MimeMessage(session);

        try {

            msg.setFrom(new InternetAddress("cuentaparaprobarjava@gmail.com"));

            msg.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse("cuentaparaprobarjava@gmail.com", false));
            
            msg.setSubject("Feedback sobre la pagina futbolApp");

            msg.setText("Opinion sobre futbolAPP: " + feedback);

            msg.setSentDate(new Date());

            SMTPTransport t = (SMTPTransport) session.getTransport("smtp");
            
            t.connect("smtp.gmail.com", "cuentaparaprobarjava@gmail.com", System.getenv("futbol_pass"));

            t.sendMessage(msg, msg.getAllRecipients());

            System.out.println("Response: " + t.getLastServerResponse());

            t.close();

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
