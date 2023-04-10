package vttp.nus.iss.server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import vttp.nus.iss.server.models.User;
import vttp.nus.iss.server.services.UserService;


@Controller
@RequestMapping(path = "/api/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class UserAuthController {

    @Autowired
    private UserService userSvc;


    @PostMapping(path = "/signup", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    @ResponseBody
    public ResponseEntity<String> createUser(@RequestBody MultiValueMap<String, String> form) throws Exception {

        User user = new User();
        // SendGridEmail verifyEmail = new SendGridEmail();

        String username = form.getFirst("username");
        String firstName = form.getFirst("firstName");
        String lastName = form.getFirst("lastName");
        String email = form.getFirst("email");
        String password = form.getFirst("password");

        user.setUsername(username);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);

        // verifyEmail.setFirst_name(firstName);
        // verifyEmail.setLast_name(lastName);
        // verifyEmail.setRecipient(email);
        // verifyEmail.setSubject("Welcome to Worksheet Quest");
        // verifyEmail.setContent("This is a test email");

        Boolean profileExists = userSvc.createUser(user);

        try {
            if (profileExists == true) {
                System.out.println(">>>> Error! User not created");
                System.out.println(">>>> User already exists in Database");

            } else {
                // mailSvc.sendVerificationEmail(verifyEmail);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return new ResponseEntity<String>(user.toJson().toString(), HttpStatus.OK);
    }

    @PostMapping(path="/signin", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    @ResponseBody
    public ResponseEntity<String> authenticateUser(@RequestBody MultiValueMap<String, String> form) throws Exception{
        User user = new User();
        user.setEmail(form.getFirst("email"));
        user.setPassword(form.getFirst("password"));


        try {
            if (!userSvc.authenticateUser(user)) {
                return new ResponseEntity<String>("User login failed!", HttpStatus.NOT_FOUND);
        } else {
            System.out.println(">>> Successfully Logged In!");
        }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        
    
        return new ResponseEntity<String>(user.userJson().toString(), HttpStatus.OK);
    }







}
