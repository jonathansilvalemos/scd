package com.jonathanlemos.scd.controllers;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jonathanlemos.scd.dto.DiariaDTO;
import com.jonathanlemos.scd.dto.UsuarioDTO;
import com.jonathanlemos.scd.services.DiariaService;
import com.jonathanlemos.scd.services.UsuarioService;

@RestController
@RequestMapping(value = "/diaria")
public class DiariaController {
	@Autowired
	private DiariaService diariaService;
	
	@Autowired
	private UsuarioService usuarioService;

	@GetMapping
	public Page<DiariaDTO> findAll(Pageable pageable) {
		return diariaService.listarDiarias(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public DiariaDTO findById(@PathVariable Long id) {
		return diariaService.findById(id);
	}	
	
	@GetMapping(value = "/despesa")
	public List<DiariaDTO> findDespesaById(@RequestParam("user") Long id,
			@RequestParam("mindate") String dataMinima,
			@RequestParam("maxdate") String dataMaxima) {
		return diariaService.findDespesaById(id, dataMinima, dataMaxima);
	}	

	@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<DiariaDTO> cadastrarDiaria(
			@RequestParam("dataviagem") String dataViagem,
			@RequestParam("cidadeviagem") String cidadeViagem,
			@RequestParam("valordiariaviagem") String valorDiariaViagem,
			@RequestParam("valorgastoviagem") Double valorGastoViagem,
			@RequestParam("portariaviagem") int portariaViagem, 
			@RequestParam("statusviagem") int statusViagem,
			@RequestPart("deslocamentoviagem") MultipartFile deslocamentoViagem,
			@RequestPart("despesaviagem") MultipartFile despesaViagem,
			@RequestParam("usuarioviagem") Long usuarioViagem) throws IOException {
		DiariaDTO diaria = new DiariaDTO();
		LocalDate dataNova = LocalDate.parse(dataViagem);
		diaria.setData(dataNova.plusDays(1));
		diaria.setCidade(cidadeViagem);
		diaria.setValorDiaria(Double.parseDouble(valorDiariaViagem.substring(3, 5)));
		diaria.setValorGasto(valorGastoViagem);
		diaria.setPortaria(portariaViagem);
		diaria.setStatus(statusViagem);
		diaria.setCompDesloca(deslocamentoViagem.getBytes());
		diaria.setCompDespesa(despesaViagem.getBytes());
		UsuarioDTO usuario = usuarioService.findById(usuarioViagem);
		if (usuario != null) {
			diaria.setUsuario(usuario);
		}else {
			throw new IllegalArgumentException();
		}
		DiariaDTO result = diariaService.cadastrarDiaria(diaria);
		return ResponseEntity.ok(result);
	}
	
	@PutMapping(value = "/atualizar/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<DiariaDTO> atualizarDiaria(
			@PathVariable Long id,
			@RequestParam("dataviagem") String dataViagem,
			@RequestParam("cidadeviagem") String cidadeViagem,
			@RequestParam("valordiariaviagem") String valorDiariaViagem,
			@RequestParam("valorgastoviagem") Double valorGastoViagem,
			@RequestParam("portariaviagem") int portariaViagem, 
			@RequestParam("statusviagem") int statusViagem,
			@RequestPart("deslocamentoviagem") MultipartFile deslocamentoViagem,
			@RequestPart("despesaviagem") MultipartFile despesaViagem,
			@RequestParam("usuarioviagem") Long usuarioViagem) throws IOException {
		DiariaDTO diaria = new DiariaDTO();
		LocalDate dataNova = LocalDate.parse(dataViagem);
		diaria.setId(id);
		diaria.setData(dataNova);
		diaria.setCidade(cidadeViagem);
		diaria.setValorDiaria(Double.parseDouble(valorDiariaViagem.substring(3, 5)));
		diaria.setValorGasto(valorGastoViagem);
		diaria.setPortaria(portariaViagem);
		diaria.setStatus(statusViagem);
		diaria.setCompDesloca(deslocamentoViagem.getBytes());
		diaria.setCompDespesa(despesaViagem.getBytes());
		UsuarioDTO usuario = usuarioService.findById(usuarioViagem);
		if (usuario != null) {
			diaria.setUsuario(usuario);
		}else {
			throw new IllegalArgumentException();
		}
		DiariaDTO result = diariaService.cadastrarDiaria(diaria);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping(value = "/usuario")
	public Page<DiariaDTO> diariaPorUsuario(@RequestParam("user") Long id,
			@RequestParam("mindate") String dataMinima,
			@RequestParam("maxdate") String dataMaxima,
			Pageable pageable){
		return diariaService.diariaPorUsuario(id, dataMinima, dataMaxima, pageable);		
	}	
}
