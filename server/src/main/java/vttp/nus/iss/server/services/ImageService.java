package vttp.nus.iss.server.services;

import java.util.Optional;

import javax.swing.text.html.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import vttp.nus.iss.server.models.User;
import vttp.nus.iss.server.repository.ImageRepository;
import vttp.nus.iss.server.repository.UserRepository;

@Service
public class ImageService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ImageRepository imageRepo;

    public Optional<String> uploadImage(User user, MultipartFile file) {

        Optional<User> opt = userRepo.findUserByEmail(user.getEmail());
        if (opt.isEmpty())
            return Optional.empty();

        imageRepo.upload(user, file);

        return Optional.of(user.getUsername());
        
    }
    


}
