package vttp.nus.iss.server.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vttp.nus.iss.server.services.EmailService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class MailController {

    @Autowired
    EmailService mailSvc;
    
    @PostMapping("/verify-email")
    public String sendVerificationEmail() throws IOException {
        return mailSvc.sendVerificationEmail(null);
    }
}
