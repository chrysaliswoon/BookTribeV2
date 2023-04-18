package vttp.nus.iss.server.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import static vttp.nus.iss.server.repository.Queries.*;

import vttp.nus.iss.server.models.Book;
import vttp.nus.iss.server.models.Bookshelf;

@Repository
public class BookshelfRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    //? Creates a new book in the bookshelf for the user
    // public Integer createBook(Bookshelf book) throws Exception {
    //     return jdbcTemplate.update(SQL_INSERT_BOOK, book.getBookId(), book.getUserId());
    // }

    
}
