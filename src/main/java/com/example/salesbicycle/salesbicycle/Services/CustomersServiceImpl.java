package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Customers;
import com.example.salesbicycle.salesbicycle.Respositories.CustomersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomersServiceImpl implements CustomerService {

    @Autowired
    private CustomersRepo customerRepository;
    @Override
    public Customers saveCustomers(Customers customers) {
        return customerRepository.save(customers);
    }

    @Override
    public Customers getCustomersById(String id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteCustomers(String id) {
        Customers customers = customerRepository.findById(id).orElse(null);
        customerRepository.delete(customers);
    }

    @Override
    public List<Customers> getAllCustomers() {
        return customerRepository.findAll();
    }
}
