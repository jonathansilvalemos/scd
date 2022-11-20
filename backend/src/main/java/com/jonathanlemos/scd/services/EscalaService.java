package com.jonathanlemos.scd.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.jonathanlemos.scd.dto.EscalaDTO;
import com.jonathanlemos.scd.entities.Escala;
import com.jonathanlemos.scd.repositories.EscalaRepository;

@Service
public class EscalaService {
	@Autowired
	private EscalaRepository escalaRepository;
	
	@Transactional
	public EscalaDTO cadastrarEscala(EscalaDTO escalaDTO) {
		Escala escala = new Escala(escalaDTO);
		Escala result = escalaRepository.saveAndFlush(escala);
		return new EscalaDTO(result);		
	}	
	
	public Page<EscalaDTO> listarEscala(Pageable pageable) {
		Page<Escala> escala = escalaRepository.findAll(pageable);
		Page<EscalaDTO> page = escala.map(x -> new EscalaDTO(x));
		return page;
	}	
	
	public EscalaDTO buscarId(Long id) {
		Escala result = escalaRepository.findById(id).get();
		return new EscalaDTO(result);
	}
}
