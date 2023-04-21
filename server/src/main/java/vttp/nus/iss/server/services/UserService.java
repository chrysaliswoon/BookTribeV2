package vttp.nus.iss.server.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import vttp.nus.iss.server.models.User;
import vttp.nus.iss.server.repository.ImageRepository;
import vttp.nus.iss.server.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ImageRepository imageRepo;

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

    public Optional<User> getUserDetails(String email) {
        Optional<User> userDetails = userRepo.findUserByEmail(email);

        if (userDetails.isEmpty())
            return Optional.empty();

        return userDetails;

    }

    public List<User> getAllUsers(){
        List<User> allUsers = userRepo.getAllUsers();

        return allUsers;
        
    }

    public Integer updateUserDetails(User user, MultipartFile file) throws Exception {

        String imageUrl = imageRepo.upload(file);
        user.setImageUrl(imageUrl);
        
        return userRepo.updateUserByEmail(user);
    }


    public boolean deleteUser(String email) throws Exception {
        return userRepo.deleterUserByEmail(email);
    }



    
}
