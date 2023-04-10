package vttp.nus.iss.server.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp.nus.iss.server.models.User;
import vttp.nus.iss.server.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public boolean createUser(final User user) throws Exception {
        boolean userExists = userRepo.checkIfUserExists(user);
        System.out.printf("UserExists: ", userExists);

        if (userExists == true) {
            return true;
        } 
        
        userRepo.createUser(user);
        System.out.println(">>> Successfully Created User");
        return false;

    }

    public boolean authenticateUser(User user) {
        boolean result = userRepo.authenticateUser(user);
        System.out.println(">>> Authenticating User");
        return result;
    }

    
}