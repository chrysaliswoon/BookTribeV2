package vttp.nus.iss.server.models;

import org.springframework.jdbc.support.rowset.SqlRowSet;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class User {

    private int userId;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String imageId;
    private String imageUrl = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
    private String role;
    private String verificationCode;
    private boolean verified;

    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    
    public String getVerificationCode() {
        return verificationCode;
    }
    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }
    public boolean isVerified() {
        return verified;
    }
    public void setVerified(boolean verified) {
        this.verified = verified;
    }
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("username", username)
            .add("firstName", firstName)
            .add("lastName", lastName)
            .add("email", email)
            .add("password", password)
            .build();
    }

    public JsonObject userJson() {
        return Json.createObjectBuilder()
        .add("email", email)
        .add("password", password)
        .build();
    }

    public static User create(SqlRowSet rs) {
        User user = new User();
        user.setUsername(rs.getString("username"));
        user.setFirstName(rs.getString("firstName"));
        user.setLastName(rs.getString("lastName"));
        user.setEmail(rs.getString("email"));
        user.setPassword(rs.getString("password"));
        return user;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getImageId() {
        return imageId;
    }
    public void setImageId(String imageId) {
        this.imageId = imageId;
    }

    
    
}
