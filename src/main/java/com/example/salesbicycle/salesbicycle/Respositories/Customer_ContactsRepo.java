package com.example.salesbicycle.salesbicycle.Respositories;

import com.example.salesbicycle.salesbicycle.Models.Customer_Contacts;
import org.springframework.data.jpa.repository.JpaRepository;


public interface Customer_ContactsRepo extends JpaRepository<Customer_Contacts, String> {
}
