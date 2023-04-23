package vttp.nus.iss.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp.nus.iss.server.models.Bookshelf;
import vttp.nus.iss.server.repository.BookshelfRepository;

@Service
public class BookshelfService {

    @Autowired
    private BookshelfRepository bookshelfRepo;

    public boolean createBook(Bookshelf shelf) throws Exception {
        
        bookshelfRepo.createBook(shelf);
        // System.out.println(">>> Added book to the shelf database");

        return true;
    }

    public List<Bookshelf> getUserBooks(String email) {
        List<Bookshelf> allBooks = bookshelfRepo.getAllBooks(email);

        return allBooks;

    }

    public boolean deleteBook(String bookId, String email) throws Exception {
        return bookshelfRepo.deleteBookById(bookId, email);
    }

    
    
}
