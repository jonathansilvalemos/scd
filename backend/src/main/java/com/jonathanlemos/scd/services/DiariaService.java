package com.jonathanlemos.scd.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
	
	public DiariaDTO findById(Long id) {
		Optional<Diaria> diaria = diariaRepository.findById(id);
		if (diaria.isEmpty()) {
			return null;
		}
		return new DiariaDTO(diaria.get());
	}
	
	/*public Page<DiariaDTO> findDespesaById(Long id, String dataMinima, String dataMaxima, Pageable pageable) {
		LocalDate minDate = LocalDate.parse(dataMinima);
		LocalDate maxDate = LocalDate.parse(dataMaxima);
		
		Page<Diaria> diaria = diariaRepository.findDespesaById(id, minDate, maxDate, pageable);
		if (diaria.isEmpty()) {
			return null;
		}
		Page<DiariaDTO> dto = diaria.map(x -> new DiariaDTO(x)); 
		return dto;
	}*/
	
	public List<DiariaDTO> findDespesaById(Long id, String dataMinima, String dataMaxima) {
		LocalDate minDate = LocalDate.parse(dataMinima);
		LocalDate maxDate = LocalDate.parse(dataMaxima);
		
		List<Diaria> diaria = diariaRepository.findDespesaById(id, minDate, maxDate);
		if (diaria == null) {
			return null;
		}
		List<DiariaDTO> dto = new ArrayList<DiariaDTO>();
		diaria.forEach(x -> dto.add(new DiariaDTO(x))); 
		return dto;
	}
	
	public DiariaDTO cadastrarDiaria(DiariaDTO diaria) {
		Diaria novaDiaria = new Diaria(diaria);
		novaDiaria = diariaRepository.save(novaDiaria);
		return new DiariaDTO(novaDiaria);
	}
	
	public Page<DiariaDTO> diariaPorUsuario(Long id, String dataMinima, String dataMaxima, Pageable pageable) {
		LocalDate minDate = LocalDate.parse(dataMinima).plusDays(1);
		LocalDate maxDate = LocalDate.parse(dataMaxima).plusDays(1);
		Page<Diaria> diariaPorUsuario = diariaRepository.diariaPorUsuario(id, minDate, maxDate, pageable);
		Page<DiariaDTO> page = diariaPorUsuario.map(x -> new DiariaDTO(x));
		return page;
	}	
}
