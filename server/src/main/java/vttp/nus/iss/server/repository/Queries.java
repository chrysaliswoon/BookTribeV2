package vttp.nus.iss.server.repository;

public interface Queries {

    //? USER QUERIES
    //? CREATE
    public static String SQL_INSERT_USER = "INSERT INTO users(username, firstName, lastName, email, password) values(?, ?, ?, ?, sha2(?, 256))";

    //? READ
    public static String SQL_EXISTING_USER="SELECT * FROM users WHERE email = ?";
    public static String SQL_AUTHENTICATE_USER = "SELECT count(*) AS auth_state FROM users WHERE email = ? and password = sha2(?, 256)";
    public static String SQL_FIND_USER_BY_EMAIL = "SELECT * FROM users WHERE email = ?";
    public static String SQL_FIND_ALL_USERS = "SELECT * FROM users";

    //? UPDATE
    public static String SQL_UPDATE_USER_FIRSTNAME = "UPDATE users SET FIRSTNAME = ? WHERE email = ?";

    //? DELETE
    public static String SQL_DELETE_USER = "DELETE FROM users WHERE email=?";
    
}
