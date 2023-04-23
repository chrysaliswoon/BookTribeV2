package vttp.nus.iss.server.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Reviews {
    private String userEmail;
    private String bookId;
    private String comments;
    
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

    
}
