package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.User;
import com.example.salesbicycle.salesbicycle.Respositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo userRepo;

    @Override
    public User saveUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User getUserById(String id) {
        return userRepo.findById(id).orElse(null);
    }


    @Override
    public void deleteUser(String id) {
        User user = userRepo.findById(id).orElse(null);
        userRepo.delete(user);
    }

    @Override
    public List<User> getAllUser() {
        return userRepo.findAll();
    }

    @Override
    public User getUserByCredentials(String username, String password) {
        return userRepo.findByUsernameAndPassword(username, password);
    }
}
