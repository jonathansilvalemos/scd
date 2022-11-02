package com.jonathanlemos.scd.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jonathanlemos.scd.dto.UsuarioDTO;
import com.jonathanlemos.scd.entities.Usuario;
import com.jonathanlemos.scd.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Transactional(readOnly = true)
	public Page<UsuarioDTO> buscarTodos(Pageable pageable) {
		Page<Usuario> usuario = usuarioRepository.findAll(PageRequest.of(0,30,Sort.by(Sort.Direction.ASC, "codigo"))); 
		Page<UsuarioDTO> page = usuario.map(x -> new UsuarioDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public UsuarioDTO findById(Long id) {
		Usuario result = usuarioRepository.findById(id).get(); 
		UsuarioDTO dto = new UsuarioDTO(result);
		return dto;
	}
	
	@Transactional
	public UsuarioDTO atualizarUsuario(UsuarioDTO usuarioDTO) {
		Usuario user = new Usuario();
		user.setCodigo(usuarioDTO.getCodigo());
		user.setNome(usuarioDTO.getNome());
		user.setMatricula(usuarioDTO.getMatricula());
		user.setSenha(encoder.encode(usuarioDTO.getSenha()));
		user.setTipo(usuarioDTO.getTipo());
		user = usuarioRepository.saveAndFlush(user);
		return new UsuarioDTO(user);
	}
	
	
	@Transactional
	public Optional<UsuarioDTO> findByMatricula(Long matricula) {
		Optional<Usuario> usuario = usuarioRepository.findByMatricula(matricula);
		UsuarioDTO user = new UsuarioDTO();
		user.setCodigo(usuario.get().getCodigo());
		user.setMatricula(usuario.get().getMatricula());
		user.setNome(usuario.get().getNome());
		user.setSenha(usuario.get().getSenha());
		user.setTipo(usuario.get().getTipo());
		
		return Optional.of(user);
	}
	
	@Transactional
	public UsuarioDTO salvarUsuario(UsuarioDTO usuarioDTO) {
		Optional<Usuario> usuario = usuarioRepository.findByMatricula(usuarioDTO.getMatricula());
		
		if (usuario.isEmpty()) {
			System.out.println("eh vazio");
			Usuario usuarioCodificado = new Usuario();
			usuarioCodificado.setMatricula(usuarioDTO.getMatricula());
			usuarioCodificado.setNome(usuarioDTO.getNome());
			usuarioCodificado.setSenha(encoder.encode(usuarioDTO.getSenha()));
			usuarioCodificado.setTipo(usuarioDTO.getTipo());
			usuarioCodificado = usuarioRepository.saveAndFlush(usuarioCodificado);
			return new UsuarioDTO(usuarioCodificado);
		}
		
		return null;
	}
}
