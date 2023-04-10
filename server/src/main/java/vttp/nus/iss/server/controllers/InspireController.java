package vttp.nus.iss.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
import vttp.nus.iss.server.models.Inspire;
import vttp.nus.iss.server.models.User;
import vttp.nus.iss.server.services.InspireService;

@Controller
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class InspireController {

    @Autowired
    InspireService inspireSvc;

    @GetMapping("/inspire")
    public String getInspires(Model model, HttpSession session) {
        List<Inspire> poem = inspireSvc.getPoem();
        List<Inspire> quote = inspireSvc.getQuote();

        Inspire inspireAPI = new Inspire();
                
        return "inspire";
    }
    
}
