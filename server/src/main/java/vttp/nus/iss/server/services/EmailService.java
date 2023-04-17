package vttp.nus.iss.server.services;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp.nus.iss.server.models.SendGridEmail;
import vttp.nus.iss.server.repository.EmailRepository;

@Service
public class EmailService {

    @Autowired 
    EmailRepository emailRepo;

    public String sendVerificationEmail(SendGridEmail email) throws IOException {

        System.out.println(">>> Sent Verification Email");

        String verifyEmail = emailRepo.sendVerificationEmail(email);
        
        return verifyEmail;
    }
    
}
