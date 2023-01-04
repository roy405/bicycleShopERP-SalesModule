package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.*;
import com.example.salesbicycle.salesbicycle.Services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomersController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<Customers> getAllCustomers(){

        List<Customers> customersList = customerService.getAllCustomers();
        List<Customers> tempCustomersList = new ArrayList<>();
        for(Customers customer: customersList){
            tempCustomersList.add(customerFilter(customer));
        }
        return tempCustomersList;

    }

    @GetMapping("/{id}")
    public Customers getCustomers (@PathVariable("id")String id){ return customerService.getCustomersById(id);}

    @PostMapping
    public Customers createCustomer(@RequestBody Customers customers){return customerService.saveCustomers(customers);}

    @PutMapping
    public Customers updateCustomers(@RequestBody Customers customers){
        customerService.saveCustomers(customers);

        customers = customerFilter(customers);
        return customers;
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable("id")String id){customerService.deleteCustomers(id);}

    public Customers customerFilter(Customers customers){

        List<Orders> orders = customers.getOrders();
        List<Orders> tempOrders = new ArrayList<>();
        for(Orders order: orders){
            order.setCustomers(null);
            order.setItems(null);
            order.setDeliveryDetails(null);

            tempOrders.add(order);
        }
        customers.setOrders(tempOrders);

        List<Delivery_Details> delivery_details = customers.getDeliveryDetails();
        List<Delivery_Details> tempDeliver_details = new ArrayList<>();
        for(Delivery_Details deliveryDetails: delivery_details){
            deliveryDetails.setCustomers(null);
            tempDeliver_details.add(deliveryDetails);
        }
        customers.setDeliveryDetails(tempDeliver_details);

        List<Customer_Contacts> customer_contacts = customers.getCustomerContacts();
        List<Customer_Contacts> tempCustomer_Contacts = new ArrayList<>();
        for(Customer_Contacts customerContacts: customer_contacts){
            customerContacts.setCustomers(null);
            tempCustomer_Contacts.add(customerContacts);
        }
        customers.setCustomerContacts(tempCustomer_Contacts);

        List<Promotions> promotions = customers.getPromotions();
        List<Promotions> tempPromotions = new ArrayList<>();
        for(Promotions promotion: promotions){
            promotion.setCustomers(null);
            tempPromotions.add(promotion);
        }
        customers.setPromotions(tempPromotions);

        return customers;
    }

}
