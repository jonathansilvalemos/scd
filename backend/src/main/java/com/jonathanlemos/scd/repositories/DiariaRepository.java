package com.jonathanlemos.scd.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jonathanlemos.scd.entities.Diaria;

@Repository
public interface DiariaRepository extends JpaRepository<Diaria, Long>{
	
	@Query(nativeQuery = true,  value = "SELECT * FROM tb_diaria WHERE usuario_codigo = :id and data BETWEEN :minDate AND :maxDate ORDER BY data")
	Page<Diaria> diariaPorUsuario(Long id, LocalDate minDate, LocalDate maxDate, Pageable pageable);
	
	/*@Query(nativeQuery = true, value="SELECT * FROM tb_diaria WHERE usuario_codigo = :id and data BETWEEN :minDate AND :maxDate ORDER BY data")
	Page<Diaria> findDespesaById(Long id, LocalDate minDate, LocalDate maxDate, Pageable pageable);*/
	
	@Query(nativeQuery = true, value="SELECT * FROM tb_diaria WHERE usuario_codigo = :id and data BETWEEN :minDate AND :maxDate ORDER BY data")
	List<Diaria> findDespesaById(Long id, LocalDate minDate, LocalDate maxDate);
	
	
	

}
