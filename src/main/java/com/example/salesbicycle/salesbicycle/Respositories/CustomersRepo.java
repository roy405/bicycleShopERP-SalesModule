package com.example.salesbicycle.salesbicycle.Respositories;

import com.example.salesbicycle.salesbicycle.Models.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomersRepo extends JpaRepository<Customers, String> {

}
