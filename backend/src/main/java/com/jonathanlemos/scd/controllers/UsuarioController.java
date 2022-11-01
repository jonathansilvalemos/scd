package com.jonathanlemos.scd.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jonathanlemos.scd.dto.UsuarioDTO;
import com.jonathanlemos.scd.services.UsuarioService;



@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@GetMapping
	public Page<UsuarioDTO> findAll(Pageable pageable) {
		return usuarioService.buscarTodos(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public UsuarioDTO findById(@PathVariable Long id) {
		return usuarioService.findById(id);
	}
	
	@PutMapping(value = "/editar")
	public UsuarioDTO atualizarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
		return usuarioService.atualizarUsuario(usuarioDTO);
	}
	
	@GetMapping(value = "/diaria")
	public void diaria(@RequestParam(value="codigo") Long codigo, 
			@RequestParam(value="matricula") Long matricula) {
		System.out.println("codigo: " + codigo + " matricula: " + matricula);
	}
	
	@GetMapping(value = "/cadastrardiaria/{matricula}")
	public void cadastrardiaria(@PathVariable Long matricula) {
		
	}
	
	@PostMapping
	public ResponseEntity<UsuarioDTO> salvarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
		UsuarioDTO result = usuarioService.salvarUsuario(usuarioDTO);
		if (result != null)	return ResponseEntity.ok(result);
		return ResponseEntity.badRequest().body(result);
	}
	
	@PostMapping(value = "/login")
	@ResponseBody
	public ResponseEntity<UsuarioDTO> validarSenha(@RequestParam("matricula") Long matricula, 
												@RequestParam("senha") String senha) {
		System.out.println("Login e senha: " + matricula + "-" + senha);
		Long numero = matricula;
		System.out.println("Número: " + numero);
		Optional<UsuarioDTO> usuario = usuarioService.findByMatricula(numero);
		if (usuario.isEmpty()) {
			System.out.println("Usuário em branco!");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		} else {
			System.out.println("usuário existe");
		}
		
		
		
		UsuarioDTO usuarioBanco = usuario.get();
		boolean valid = encoder.matches(senha, usuarioBanco.getSenha());
		
		HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
		
		
		return ResponseEntity.status(status).body(usuarioBanco);
	}
}
