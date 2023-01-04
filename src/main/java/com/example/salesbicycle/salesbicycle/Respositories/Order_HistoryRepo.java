package com.example.salesbicycle.salesbicycle.Respositories;

import com.example.salesbicycle.salesbicycle.Models.Order_History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Order_HistoryRepo extends JpaRepository<Order_History, String> {
}
