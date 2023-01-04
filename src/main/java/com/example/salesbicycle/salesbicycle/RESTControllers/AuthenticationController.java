package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.User;
import com.example.salesbicycle.salesbicycle.Services.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/login")
public class AuthenticationController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<String> authentication(@RequestParam Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        if (username.isEmpty() || password.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } else {

            User user = userService.getUserByCredentials(username, password);

            System.out.println("user : " + user);

            ObjectMapper objectmapper = new ObjectMapper();
            String userId = "";
            if (user != null) {

                try {
                    userId = objectmapper.writeValueAsString(user.getId());
                    return new ResponseEntity<>(userId, HttpStatus.OK);
                } catch (JsonProcessingException e) {
                    e.printStackTrace();
                }
            }
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        }
    }
}
