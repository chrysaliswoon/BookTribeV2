package vttp.nus.iss.server.controllers;

import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import vttp.nus.iss.server.models.User;
import vttp.nus.iss.server.services.ImageService;

@Controller
@RequestMapping(path = "/api/upload")
@CrossOrigin(origins = "*")
public class ImageController {

    @Autowired
    private ImageService imageSvc;

    private Logger logger = Logger.getLogger(ImageController.class.getName());
    
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@ResponseBody
    public ResponseEntity<String> uploadImage(@RequestPart MultipartFile image, @RequestPart String email) {
        logger.log(Level.INFO, "File name: %s\n".formatted(image.getOriginalFilename()));

        User user = new User();
        user.setEmail(email);

        Optional<String> opt = imageSvc.uploadImage(user, image);
        String userId = opt.get();

        logger.log(Level.INFO, "New userId: %s".formatted(userId));

        return ResponseEntity.ok("Image has been uploaded");

    }
    
}
