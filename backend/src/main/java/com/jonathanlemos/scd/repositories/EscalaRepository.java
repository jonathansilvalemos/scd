package com.jonathanlemos.scd.repositories;

import java.time.LocalDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jonathanlemos.scd.entities.Escala;

@Repository
public interface EscalaRepository extends JpaRepository<Escala, Long>{
		
	@Query("SELECT obj FROM Escala obj WHERE obj.data = :data")
	public Page<Escala> findByData(LocalDate data, Pageable pageable);
}
