package vttp.nus.iss.server.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import vttp.nus.iss.server.models.User;

import static vttp.nus.iss.server.repository.Queries.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class UserRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    //? Check if user exists
    public boolean checkIfUserExists (User user) {
        final SqlRowSet rs  = jdbcTemplate.queryForRowSet(SQL_EXISTING_USER, user.getEmail());

        if (rs.next()) 
            return true;
            
        return false;

    }

    //? Creates a new user
    public Integer createUser(User user) throws Exception {
        return jdbcTemplate.update(SQL_INSERT_USER, user.getUsername(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword(), user.getProfileImg());
    }

    // Checks if the user credentials are correct
    public boolean authenticateUser (User user) {
        final SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_AUTHENTICATE_USER, user.getEmail(), user.getPassword());
        if (rs.next())
            return rs.getBoolean("auth_state");
        return false;
    }

    //? Find user
    public Optional<User> findUserByEmail(String email) {

        SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_FIND_USER_BY_EMAIL, email);

        if (!rs.next())
            return Optional.empty();

        return Optional.of(User.create(rs));
    }

    //? Find all users
    public List<User> getAllUsers() {

        List<User> result = new LinkedList<>();
        SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_FIND_ALL_USERS);

        while(rs.next()) {
            User user = new User();
            user.setUserId(rs.getInt("USER_ID"));
            user.setUsername(rs.getString("USERNAME"));
            user.setFirstName(rs.getString("FIRSTNAME"));
            user.setLastName(rs.getString("LASTNAME"));
            user.setProfileImg(rs.getString("PROFILEIMG"));
            user.setEmail(rs.getString("EMAIL"));

            result.add(user);
        }

        return result;
        
    }

    //? Update User
    public Integer updateUserByEmail(String firstName, String lastName, String password, String url, String email) throws Exception {
        // System.out.printf("Updated Name:", user.getFirstName());
        // System.out.printf("Updated Image:", user.getProfileImg());
        // System.out.println("Updating SQL database");

        // System.out.println(email);
        return jdbcTemplate.update(SQL_UPDATE_USER, firstName,lastName, password, url, email);

    }


    //? Delete User
    public boolean deleterUserByEmail(String email) throws Exception {

        int deleted = jdbcTemplate.update(SQL_DELETE_USER, email);

        return deleted > 0;
        
    }





}

