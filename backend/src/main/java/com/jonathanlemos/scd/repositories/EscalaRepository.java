package com.jonathanlemos.scd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jonathanlemos.scd.entities.Escala;

@Repository
public interface EscalaRepository extends JpaRepository<Escala, Long>{

}
