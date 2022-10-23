package com.jonathanlemos.scd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jonathanlemos.scd.entities.Diaria;

@Repository
public interface DiariaRepository extends JpaRepository<Diaria, Long>{

}
