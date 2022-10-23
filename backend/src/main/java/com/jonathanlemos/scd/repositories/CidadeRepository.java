package com.jonathanlemos.scd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jonathanlemos.scd.entities.Cidade;

@Repository
public interface CidadeRepository extends JpaRepository<Cidade, Long>{

}
