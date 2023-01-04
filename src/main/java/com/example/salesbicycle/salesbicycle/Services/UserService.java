package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);

    User getUserById(String id);

    void deleteUser(String id);

    List<User> getAllUser();

    User getUserByCredentials(String username, String password);
}
