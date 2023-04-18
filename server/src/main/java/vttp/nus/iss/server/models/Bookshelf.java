package vttp.nus.iss.server.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Bookshelf {

    private String userEmail;
    private String bookId;
    private String title;
    private String subtitle;
    private String authors;
    private String categories;
    private String imageUrl;

    

    public String getBookId() {
        return bookId;
    }
    public void setBookId(String bookId) {
        this.bookId = bookId;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getSubtitle() {
        return subtitle;
    }
    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }
    public String getAuthors() {
        return authors;
    }
    public void setAuthors(String authors) {
        this.authors = authors;
    }
    public String getCategories() {
        return categories;
    }
    public void setCategories(String categories) {
        this.categories = categories;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    
    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("email", userEmail)
            .add("bookId", bookId)
            .add("title", title)
            .add("subtitle", subtitle)
            .add("authors", authors)
            .add("categories", categories)
            .add("imageUrl", imageUrl)

            .build();
    }

    public String getUserEmail() {
        return userEmail;
    }
    
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }


    
    
}
