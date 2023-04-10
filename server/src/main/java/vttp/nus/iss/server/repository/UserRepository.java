package vttp.nus.iss.server.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import vttp.nus.iss.server.models.User;

import static vttp.nus.iss.server.repository.Queries.*;

import java.util.Optional;

@Repository
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
        return jdbcTemplate.update(SQL_INSERT_USER, user.getUsername(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword());
    }

    // Checks if the user credentials are correct
    public boolean authenticateUser (User user) {
        final SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_AUTHENTICATE_USER, user.getEmail(), user.getPassword());
        if (rs.next())
            return rs.getBoolean("auth_state");
        return false;
    }

    //? Find user
    public Optional<User> getUser(String email) {

        SqlRowSet rs = jdbcTemplate.queryForRowSet(SQL_FIND_USER_BY_EMAIL, email);

        if (!rs.next())
            return Optional.empty();
        return Optional.of(User.create(rs));

    }



}
