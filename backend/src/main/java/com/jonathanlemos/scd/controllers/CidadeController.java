package com.jonathanlemos.scd.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jonathanlemos.scd.dto.CidadeDTO;
import com.jonathanlemos.scd.services.CidadeService;

@RestController
@RequestMapping(value="/cidade")
public class CidadeController {
	@Autowired
	private CidadeService cidadeService;
	
	@GetMapping
	public Page<CidadeDTO> findAll(Pageable pageable) {
		return cidadeService.buscarTodos(pageable);
	}
	
	@GetMapping(value = "/ordenarcidades")
	public Page<CidadeDTO> cidadesOrdenadasNome(Pageable pageable) {
		return cidadeService.cidadesOrdenadasNome(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public CidadeDTO findById(@PathVariable Long id) {
		return cidadeService.findById(id);
	}
	
	@PostMapping(value = "/cadastrarcidade")
	public CidadeDTO salvarUsuario(@RequestBody CidadeDTO cidadeDTO) {
		CidadeDTO result = cidadeService.salvarCidade(cidadeDTO);
		return result;
	}
	
	@PutMapping(value = "/editar")
	public Boolean atulizarCidade(@RequestBody CidadeDTO cidadeDTO) {
		CidadeDTO result = cidadeService.atualizarCidade(cidadeDTO);
		if (result != null) {
			return true;
		}
		return false;
	}
	
}
