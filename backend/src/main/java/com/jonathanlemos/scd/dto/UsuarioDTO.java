package com.jonathanlemos.scd.dto;

import com.jonathanlemos.scd.entities.Usuario;

public class UsuarioDTO {
	
	private Long codigo;
	private Long matricula;
	private String nome;
	private String senha;
	
	
	public UsuarioDTO() {
		
	}
	
	public UsuarioDTO(Long codigo, Long matricula, String nome, String senha) {
		this.codigo = codigo;
		this.matricula = matricula;
		this.nome = nome;
		this.senha = senha;
	}
	
	public UsuarioDTO(Usuario usuario) {
		codigo = usuario.getCodigo();
		matricula = usuario.getMatricula();
		nome = usuario.getNome();
		senha = usuario.getSenha();
	}
	
	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	public Long getMatricula() {
		return matricula;
	}
	public void setMatricula(Long matricula) {
		this.matricula = matricula;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	
}
