package vttp.nus.iss.server.repository;

public interface Queries {

    //////// USER QUERIES ////////
    // ? CREATE
    public static String SQL_INSERT_USER = "INSERT INTO users(username, firstName, lastName, email, password, profileimg) values(?, ?, ?, ?, sha2(?, 256), ?)";

    // ? READ
    public static String SQL_EXISTING_USER = "SELECT * FROM users WHERE email = ?";
    public static String SQL_AUTHENTICATE_USER = "SELECT count(*) AS auth_state FROM users WHERE email = ? and password = sha2(?, 256)";
    public static String SQL_FIND_USER_BY_EMAIL = "SELECT * FROM users WHERE email = ?";
    public static String SQL_FIND_ALL_USERS = "SELECT * FROM users";

    // ? UPDATE
    public static String SQL_UPDATE_USER = "UPDATE users SET FIRSTNAME = ?, LASTNAME = ?, PASSWORD = sha2(?, 256), PROFILEIMG = ? WHERE email = ?";

    // ? DELETE
    public static String SQL_DELETE_USER = "DELETE FROM users WHERE email=?";

    //////// BOOKSHELF QUERIES ////////
    // ? CREATE
    public static String SQL_INSERT_BOOK = "INSERT INTO bookshelf(EMAIL, BOOK_ID, TITLE, IMAGEURL) values( ?, ?, ?, ?)";

    // ? READ
    public static String SQL_FIND_ALL_BOOKS_BY_USER = "SELECT * FROM bookshelf where email = ?";

    // ? DELETE
    public static String SQL_DELETE_BOOKS_BY_ID = "DELETE FROM bookshelf where book_id = ? AND email = ?";

    //////// REVIEWS QUERIES ////////
    // ? CREATE
    public static String SQL_INSERT_REVIEW = "INSERT INTO reviews(EMAIL, BOOK_ID, COMMENTS) values (?,?,?)";

    // ? READ
    public static String SQL_FIND_ALL_REVIEWS_BY_USER = "SELECT reviews.REVIEW_ID, bookshelf.BOOK_ID, reviews.EMAIL, bookshelf.TITLE, bookshelf.IMAGEURL, reviews.COMMENTS FROM bookshelf INNER JOIN reviews ON bookshelf.BOOK_ID=reviews.BOOK_ID WHERE reviews.email = ?";
    public static String SQL_FIND_ALL_REVIEWS_BY_BOOKID = "SELECT reviews.REVIEW_ID, reviews.EMAIL, bookshelf.TITLE, bookshelf.IMAGEURL, reviews.COMMENTS FROM bookshelf INNER JOIN reviews ON bookshelf.BOOK_ID=reviews.BOOK_ID WHERE reviews.book_id = ?";

    //? DELETE
    public static String SQL_DELETE_REVIEW_BY_USER_AND_BOOKID = "DELETE FROM book_reviews where book_id = ? AND email = ?";

}
