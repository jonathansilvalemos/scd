package com.jonathanlemos.scd.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.jonathanlemos.scd.dto.DiariaDTO;
import com.jonathanlemos.scd.entities.Diaria;
import com.jonathanlemos.scd.repositories.DiariaRepository;

@Service
public class DiariaService {
	@Autowired
	private DiariaRepository diariaRepository;
	
	public Page<DiariaDTO> listarDiarias(Pageable pageable){
		Page<Diaria> diaria = diariaRepository.findAll(pageable);
		Page<DiariaDTO> page = diaria.map(x -> new DiariaDTO(x));
		return page;		
	}
	
	public DiariaDTO cadastrarDiaria(DiariaDTO diaria) {
		Diaria novaDiaria = new Diaria(diaria);
		novaDiaria = diariaRepository.save(novaDiaria);
		return new DiariaDTO(novaDiaria);
	}
}
