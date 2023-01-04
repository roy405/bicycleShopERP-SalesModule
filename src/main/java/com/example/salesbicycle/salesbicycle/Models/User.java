package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
public class User {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String first_name;
    private String last_name;
    private String username;
    private String password;
    private String departmentID;
    private String email;
    private String dOB;

    public User() {
    }

}
