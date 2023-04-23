package vttp.nus.iss.server.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import vttp.nus.iss.server.models.Reviews;

import static vttp.nus.iss.server.repository.Queries.*;


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

}
