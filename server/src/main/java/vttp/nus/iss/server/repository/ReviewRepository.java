package vttp.nus.iss.server.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import vttp.nus.iss.server.models.Reviews;

import static vttp.nus.iss.server.repository.Queries.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;


@Repository
@Transactional
public class ReviewRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    // ? Creates a new review for a book linked to a specific user
    public Integer createReview(Reviews review) throws Exception {
        System.out.println("Creating review in database");
        return jdbcTemplate.update(SQL_INSERT_REVIEW, review.getUserEmail(), review.getBookId(), review.getComments());
    }

        //? Find review by User
        public List<Reviews> findReviewByEmail(String email) {

            List<Reviews> result = new LinkedList<>();
            SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_FIND_ALL_REVIEWS_BY_USER, email);
    
            while(rs.next()) {
                Reviews reviews = new Reviews();
                reviews.setBookId(rs.getString("BOOK_ID"));
                reviews.setUserEmail(rs.getString("EMAIL"));
                reviews.setTitle(rs.getString("TITLE"));
                reviews.setImageUrl(rs.getString("IMAGEURL"));
                reviews.setComments(rs.getString("COMMENTS"));
    
                result.add(reviews);
            }
    
            return result;
        }



}
