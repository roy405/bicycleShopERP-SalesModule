package com.example.salesbicycle.salesbicycle.Respositories;

import com.example.salesbicycle.salesbicycle.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, String> {
    User findByUsernameAndPassword(String username, String password);
}
