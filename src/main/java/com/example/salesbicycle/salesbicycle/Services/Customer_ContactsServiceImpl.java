package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Customer_Contacts;
import com.example.salesbicycle.salesbicycle.Respositories.Customer_ContactsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Customer_ContactsServiceImpl implements Customer_ContactsService{

    @Autowired
    private Customer_ContactsRepo customerContactsRepo;

    @Override
    public Customer_Contacts saveCustomerContacts(Customer_Contacts customerContacts) {
        return customerContactsRepo.save(customerContacts);
    }

    @Override
    public Customer_Contacts getCustomerContactsById(String id) {
        return customerContactsRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteCustomerContacts(String id) {
        Customer_Contacts customer_contacts = customerContactsRepo.findById(id).orElse(null);
        customerContactsRepo.delete(customer_contacts);

    }

    @Override
    public List<Customer_Contacts> getAllCustomerContacts() {
        return customerContactsRepo.findAll();
    }
}
