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
	
	@PostMapping(value = "/cadastrarusuario/{codigo}/{matricula}/{tipo}")
	public UsuarioDTO salvarUsuario(
			@PathVariable Long codigo, @PathVariable Long matricula,
			@PathVariable String tipo,
			@RequestBody UsuarioDTO usuarioDTO) {
		UsuarioDTO result = usuarioService.salvarUsuario(usuarioDTO);
		return result;
	}
	
	@PostMapping(value = "/validarsenha")
	@ResponseBody
	public ResponseEntity<UsuarioDTO> validarSenha(@RequestParam(value = "matricula") Long matricula, 
												@RequestParam(value = "senha") String senha) {
		System.out.println("Login e senha: " + matricula + "-" + senha);
		Optional<UsuarioDTO> usuario = usuarioService.findByMatricula(matricula);
		if (usuario.isEmpty()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
		
		
		UsuarioDTO usuarioBanco = usuario.get();
		boolean valid = encoder.matches(senha, usuarioBanco.getSenha());
		
		HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
		
		
		return ResponseEntity.status(status).body(usuarioBanco);
	}
}
