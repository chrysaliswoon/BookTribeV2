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
import org.springframework.web.bind.annotation.RequestParam;

import vttp.nus.iss.server.models.Book;
import vttp.nus.iss.server.services.BookService;

@Controller
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService bookSvc;

    @GetMapping(path="/search")
    public ResponseEntity <List<Book>> getBookResults(@RequestParam String book) { 
        List<Book> bookResults = bookSvc.exploreBooks(book);

        return new ResponseEntity<List<Book>>(bookResults, HttpStatus.OK);
    }

    
}
