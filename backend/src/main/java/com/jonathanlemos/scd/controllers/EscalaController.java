package com.jonathanlemos.scd.controllers;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jonathanlemos.scd.dto.EscalaDTO;
import com.jonathanlemos.scd.services.EscalaService;

@RestController
@RequestMapping(value = "/escala")
public class EscalaController{
	
	@Autowired
	private EscalaService escalaService;
	
	@PostMapping
	public ResponseEntity<EscalaDTO> cadastrarEscala(@RequestParam("diaescala") String data, @RequestParam("arq") MultipartFile file) throws Exception{
		EscalaDTO escala = new EscalaDTO();
		LocalDate dataNova = LocalDate.parse(data);
		escala.setData(dataNova.plusDays(1));
		escala.setEscala(file.getBytes());
		EscalaDTO result = escalaService.cadastrarEscala(escala);
		if (result == null) {
			return ResponseEntity.status(404).body(result);
		}
		return ResponseEntity.ok(result);
	}
	
	@GetMapping
	@ResponseBody
	public Page<EscalaDTO> listarEscala(Pageable pageable) {
		return escalaService.listarEscala(pageable);		
	}
	
	@GetMapping(value = "/{id}")
	@ResponseBody
	public EscalaDTO buscarId(@PathVariable Long id) {
		return escalaService.buscarId(id);
	}
	
	@GetMapping(value = "/dia")
	@ResponseBody
	public Page<EscalaDTO> buscarData(@RequestParam("data") String data, Pageable pageable) {
		return escalaService.findByData(data, pageable);
	}
}
