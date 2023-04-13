package vttp.nus.iss.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import vttp.nus.iss.server.models.Inspire;
import vttp.nus.iss.server.services.InspireService;

@Controller
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class InspireController {

    @Autowired
    InspireService inspireSvc;

    @GetMapping("/poem")
    @ResponseBody
    public ResponseEntity<List<Inspire>> getPoem() {
        
        List<Inspire> poem = inspireSvc.getPoem();

        return new ResponseEntity<List<Inspire>>(poem, HttpStatus.OK);
    }
    
    @GetMapping("/quote")
    @ResponseBody
    public ResponseEntity<List<Inspire>> getQuote() {
        
        List<Inspire> quote = inspireSvc.getQuote();

        return new ResponseEntity<List<Inspire>>(quote, HttpStatus.OK);
    }
}
