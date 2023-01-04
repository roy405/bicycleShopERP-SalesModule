package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Customers;

import java.util.List;

public interface CustomerService {


        Customers saveCustomers(Customers customers);

        Customers getCustomersById(String id);

        void deleteCustomers(String id);

        List<Customers> getAllCustomers();

}
