package com.example.salesbicycle.salesbicycle.Respositories;

import com.example.salesbicycle.salesbicycle.Models.Items;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemsRepo extends JpaRepository<Items, String> {
}
