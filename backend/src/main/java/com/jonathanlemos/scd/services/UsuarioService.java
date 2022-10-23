package com.jonathanlemos.scd.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jonathanlemos.scd.dto.UsuarioDTO;
import com.jonathanlemos.scd.entities.Usuario;
import com.jonathanlemos.scd.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Transactional(readOnly = true)
	public Page<UsuarioDTO> buscarTodos(Pageable pageable) {
		Page<Usuario> usuario = usuarioRepository.findAll(pageable); 
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
	public UsuarioDTO salvarUsuario(UsuarioDTO usuarioDTO) {
		Usuario usuario = usuarioRepository.findByMatricula(usuarioDTO.getMatricula());
		if (usuario == null) {
			usuario = new Usuario();
			usuario.setMatricula(usuarioDTO.getMatricula());
			usuario.setNome(usuarioDTO.getNome());
			usuario.setSenha(usuarioDTO.getSenha());
			usuario = usuarioRepository.saveAndFlush(usuario);
			return new UsuarioDTO(usuario);
		}
		return null;
	}
}
