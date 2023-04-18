package vttp.nus.iss.server.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Bookshelf {

    private String bookId;
    private Integer userId;

    public String getBookId() {
        return bookId;
    }
    public void setBookId(String bookId) {
        this.bookId = bookId;
    }
    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    // public JsonObject toJson() {
    //     return Json.createObjectBuilder()
    //         .add("bookId", bookId)
    //         .add("userId", userId)
    //         .build();
    // }

    
    
}
