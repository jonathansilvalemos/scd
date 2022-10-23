package com.jonathanlemos.scd.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jonathanlemos.scd.dto.UsuarioDTO;
import com.jonathanlemos.scd.services.UsuarioService;

@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
	@Autowired
	private UsuarioService usuarioService;

	@GetMapping
	public Page<UsuarioDTO> findAll(Pageable pageable) {
		return usuarioService.buscarTodos(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public UsuarioDTO findById(@PathVariable Long id) {
		return usuarioService.findById(id);
	}
	
	@PostMapping
	public UsuarioDTO salvarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
		UsuarioDTO result = usuarioService.salvarUsuario(usuarioDTO);
		return result;
	}
}
