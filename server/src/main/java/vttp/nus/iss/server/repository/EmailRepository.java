package vttp.nus.iss.server.repository;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sendgrid.Content;
import com.sendgrid.Email;
import com.sendgrid.Mail;
import com.sendgrid.Method;
import com.sendgrid.Personalization;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;

import vttp.nus.iss.server.models.SendGridEmail;

@Repository
public class EmailRepository {

    @Value("${SENDGRID_API_KEY}")
    private String apiKey;

    @Value("${SENDGRID_TEMPLATE_ID}")
    private String templateId;

    @Value("${SENDER_EMAIL}")
    private String senderEmail;

    private static final Logger logger = LoggerFactory.getLogger(EmailRepository.class);

    public String sendVerificationEmail(SendGridEmail email) throws IOException {
        Email sender = new Email(senderEmail);
        Email recipient = new Email(email.recipient);
        Mail mail = new Mail();

        VerificationEmail verifyEmailTemplate = new VerificationEmail();
        verifyEmailTemplate.addTo(recipient);

        mail.setFrom(sender);
        mail.setSubject(email.subject);
        verifyEmailTemplate.addDynamicTemplateData("first_name", email.first_name);
        verifyEmailTemplate.addDynamicTemplateData("verification_code", "www.google.com");
        mail.addPersonalization(verifyEmailTemplate);
        mail.setTemplateId(templateId);

        SendGrid sg = new SendGrid(apiKey);
        Request request = new Request();
        

        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            logger.info(response.getBody());

            return response.getBody();
        } catch (Exception ex) {
            throw ex;
        }
    }

    public class VerificationEmail extends Personalization {

        @JsonProperty(value = "dynamic_template_data")
        private Map<String, String> dynamic_template_data;
    
        @JsonProperty("dynamic_template_data")
        public Map<String, String> getDynamicTemplateData() {
            if (dynamic_template_data == null) {
                return Collections.<String, String>emptyMap();
            }
    
            return dynamic_template_data;
        }
    
        public void addDynamicTemplateData(String key, String value) {
            if (dynamic_template_data == null) {
                dynamic_template_data = new HashMap<String, String>();
                dynamic_template_data.put(key, value);
            } else {
                dynamic_template_data.put(key, value);
            }
        }
    
    }


    


    
}
