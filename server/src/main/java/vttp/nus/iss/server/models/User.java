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
    private String profileImg = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
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
    public String setFirstName(String firstName) {
        return this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String setLastName(String lastName) {
        return this.lastName = lastName;
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
    public String setPassword(String password) {
        return this.password = password;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("username", username)
            .add("firstName", firstName)
            .add("lastName", lastName)
            .add("email", email)
            .add("profileImg", profileImg)
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
        user.setUsername(rs.getString("USERNAME"));
        user.setFirstName(rs.getString("FIRSTNAME"));
        user.setLastName(rs.getString("LASTNAME"));
        user.setEmail(rs.getString("EMAIL"));
        user.setProfileImg(rs.getString("PROFILEIMG"));
        user.setPassword(rs.getString("PASSWORD"));
        return user;
    }
    
    public String getProfileImg() {
        return profileImg;
    }
    public String setProfileImg(String profileImg) {
        return this.profileImg = profileImg;
    }


    
    
}
