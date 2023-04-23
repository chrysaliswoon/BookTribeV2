package vttp.nus.iss.server.models;

import org.springframework.jdbc.support.rowset.SqlRowSet;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Reviews {
    private String bookId;
    private String userEmail;
    private String title;
    private String imageUrl;
    private String comments;

    
    
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getUserEmail() {
        return userEmail;
    }
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
    public String getBookId() {
        return bookId;
    }
    public void setBookId(String bookId) {
        this.bookId = bookId;
    }
    public String getComments() {
        return comments;
    }
    public void setComments(String comments) {
        this.comments = comments;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("email", userEmail)
            .add("bookId", bookId)
            .add("comments", comments)

            .build();
    }

    public static Reviews create(SqlRowSet rs) {
        Reviews reviews = new Reviews();

        reviews.setBookId(rs.getString("BOOK_ID"));
        reviews.setUserEmail(rs.getString("EMAIL"));
        reviews.setTitle(rs.getString("TITLE"));
        reviews.setImageUrl(rs.getString("IMAGEURL"));
        reviews.setComments(rs.getString("COMMENTS"));

        return reviews;
    }

    
}
