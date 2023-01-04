package com.example.salesbicycle.salesbicycle.Respositories;

import com.example.salesbicycle.salesbicycle.Models.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepo extends JpaRepository<Orders, String> {
}
