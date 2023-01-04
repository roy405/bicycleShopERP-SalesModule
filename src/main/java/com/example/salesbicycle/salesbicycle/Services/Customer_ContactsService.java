package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Customer_Contacts;

import java.util.List;

public interface Customer_ContactsService {

    Customer_Contacts saveCustomerContacts(Customer_Contacts customerContacts);

    Customer_Contacts getCustomerContactsById (String id);

    void deleteCustomerContacts (String id);

    List<Customer_Contacts> getAllCustomerContacts();

}


