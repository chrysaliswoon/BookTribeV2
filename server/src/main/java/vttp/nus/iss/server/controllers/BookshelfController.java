package vttp.nus.iss.server.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import vttp.nus.iss.server.models.Bookshelf;
import vttp.nus.iss.server.services.BookshelfService;

import java.util.List;

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

    @PostMapping(path= "/addBook")
    @ResponseBody
    public ResponseEntity<String> createBook(@RequestBody MultiValueMap<String, String> form) throws Exception {

        Bookshelf shelf = new Bookshelf();

        String email = form.getFirst("email");
        String bookId = form.getFirst("bookId");
        String title = form.getFirst("title");
        String imageUrl = form.getFirst("imageUrl");

        shelf.setUserEmail(email);
        shelf.setBookId(bookId);
        shelf.setTitle(title);
        shelf.setImageUrl(imageUrl);

        shelfSvc.createBook(shelf);

        System.out.println(">>>> Adding book to shelf");

        return new ResponseEntity<String>(shelf.toJson().toString(), HttpStatus.OK);

    }

    // @PostMapping(path="/addBook/{bookId}/{email}")
    // @ResponseBody
    // public ResponseEntity<String> addBook (@RequestParam String bookId, String email) throws Exception {

    //     shelfSvc.createBook(bookId, email);
        
    //     return new ResponseEntity<String>("Book has been removed from Shelf!", HttpStatus.OK);
    // }

    @GetMapping(path="shelf/{email}")
    @ResponseBody
    public List<Bookshelf> getUserBooks(@PathVariable String email) {

        List<Bookshelf> allBooks = shelfSvc.getUserBooks(email);

        System.out.println(">>> Getting All Books in Database");

        return allBooks;

    }
    
    @DeleteMapping(path="/delete/{bookId}/{email}")
    @ResponseBody
    public ResponseEntity<String> deleteUser (@PathVariable String bookId, @PathVariable String email) throws Exception {

        shelfSvc.deleteBook(bookId, email);
        
        return new ResponseEntity<String>("Book has been removed from Shelf!", HttpStatus.OK);
    }


    
    
}
