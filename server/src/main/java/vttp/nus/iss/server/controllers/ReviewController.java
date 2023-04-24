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

import vttp.nus.iss.server.models.Reviews;
import vttp.nus.iss.server.services.ReviewService;

import java.io.Console;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.support.rowset.SqlRowSet;


@Controller
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class ReviewController {

    @Autowired
    private ReviewService reviewSvc;

    @PostMapping(path="/addReview")
    @ResponseBody
    public ResponseEntity<String> createReview (@RequestBody MultiValueMap<String, String> form) throws Exception {

        Reviews review = new Reviews();

        String email = form.getFirst("email");
        String bookId = form.getFirst("bookId");
        String comments = form.getFirst("comments");

        review.setUserEmail(email);
        review.setBookId(bookId);
        review.setComments(comments);

        reviewSvc.createReview(review);

        // System.out.println(">>>> Adding review to book");

        return new ResponseEntity<String>(review.toJson().toString(), HttpStatus.OK);
    }

    @GetMapping(path = "/reviews/{email}")
    @ResponseBody
    public List<Reviews> getAllReviewsByUser(@PathVariable String email) {
        List<Reviews> reviewDetails = reviewSvc.getAllReviewsByUser(email);

        return reviewDetails;
    }


    @DeleteMapping(path = "/delete/{bookId}")
    @ResponseBody
    public ResponseEntity<String> deleteUser(@PathVariable String bookId, @RequestParam String email) throws Exception {

        reviewSvc.deleteReview(bookId, email);

        return new ResponseEntity<String>("Review has been deleted!", HttpStatus.OK);
    }

    @GetMapping(path = "/userReviews/{bookId}")
    @ResponseBody
    public List<Reviews> getAllReviews(@PathVariable String bookId) {
        // System.out.println("Getting all reviews");
        List<Reviews> allReviews = reviewSvc.getAllReviews(bookId);

        return allReviews;
    }


    
}
