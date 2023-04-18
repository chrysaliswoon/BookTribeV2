package vttp.nus.iss.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp.nus.iss.server.models.Bookshelf;
import vttp.nus.iss.server.repository.BookshelfRepository;

@Service
public class BookshelfService {

    @Autowired
    private BookshelfRepository bookshelfRepo;

    // public boolean createBook(Bookshelf book) throws Exception {
        
    //     bookshelfRepo.createBook(book);

    //     return true;
    // }

    
    
}
