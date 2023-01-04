package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.User;
import com.example.salesbicycle.salesbicycle.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUser(){return userService.getAllUser();}

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id")String id){
        System.out.println("userId" +id);
        return userService.getUserById(id);}

    @PostMapping
    public User createUser(@RequestBody User user){return userService.saveUser(user);}

    @PutMapping
    public User updateUser (@RequestBody User user) {return userService.saveUser(user);}

    @DeleteMapping("/{id}")
    public void deleteUser (@PathVariable("id")String id){userService.deleteUser(id);}
}

