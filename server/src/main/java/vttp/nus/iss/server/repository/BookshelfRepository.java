package vttp.nus.iss.server.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;
import static vttp.nus.iss.server.repository.Queries.*;

import java.util.LinkedList;
import java.util.List;

import vttp.nus.iss.server.models.Bookshelf;

@Repository
public class BookshelfRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    //? Creates a new book in the bookshelf for the user
    public Integer createBook(Bookshelf book) throws Exception {
        return jdbcTemplate.update(SQL_INSERT_BOOK, book.getUserEmail(),book.getBookId(), book.getTitle(), book.getSubtitle(), book.getAuthors(), book.getCategories(), book.getImageUrl());
    }

    public List<Bookshelf> getAllBooks(String email) {
        List<Bookshelf> result = new LinkedList<>();
        SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_FIND_ALL_BOOKS_BY_USER, email);

        while(rs.next()) {
            Bookshelf book = new Bookshelf();
            book.setUserEmail(rs.getString("EMAIL"));
            book.setBookId(rs.getString("BOOK_ID"));
            book.setCategories(rs.getString("CATEGORIES"));
            book.setAuthors(rs.getString("AUTHORS"));
            book.setTitle(rs.getString("TITLE"));
            book.setImageUrl(rs.getString("IMAGEURL"));

            result.add(book);
        }

        return result;
    }

        //? Delete Book
        public boolean deleteBookById(String bookId, String email) throws Exception {

            int deleted = jdbcTemplate.update(SQL_DELETE_BOOKS_BY_ID, bookId, email);

            System.out.println("Book has been deleted");
    
            return deleted > 0;
            
        }

    
}
