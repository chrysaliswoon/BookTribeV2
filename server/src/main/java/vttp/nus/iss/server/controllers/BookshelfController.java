package vttp.nus.iss.server.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import vttp.nus.iss.server.models.Bookshelf;
import vttp.nus.iss.server.services.BookshelfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@Controller
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class BookshelfController {

    @Autowired
    private BookshelfService shelfSvc;

    // @PostMapping(path= "/addBook", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    // @ResponseBody
    // @CrossOrigin(origins = "*")
    // public ResponseEntity<String> createBook() throws Exception {
    //     String bookId = "8NQ2EAAAQBAJ";
    //     // userId = 9;

    //     Bookshelf shelf = new Bookshelf();
    //     shelf.setBookId(bookId);
    //     shelf.setUserId(9);

    //     shelfSvc.createBook(shelf);
        
    //     return new ResponseEntity<String>(shelf.toJson().toString(), HttpStatus.OK);

    // }
    
}
