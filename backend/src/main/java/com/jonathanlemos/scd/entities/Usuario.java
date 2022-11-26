package com.jonathanlemos.scd.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.jonathanlemos.scd.dto.UsuarioDTO;

@Entity
@Table(name = "tb_usuario")
public class Usuario {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long codigo;
	@Column(unique = true)
	private Long matricula;
	private String nome;
	private String senha;
	private String tipo;
	
	@OnDelete(action = OnDeleteAction.CASCADE)
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = false)
	@JoinColumn(name="usuario_codigo", referencedColumnName = "codigo")
	private List<Diaria> diaria;
	
	public Usuario() {
		
	}
	
	public Usuario(UsuarioDTO usuario) {
		codigo = usuario.getCodigo();
		nome = usuario.getNome();
		matricula = usuario.getMatricula();
		tipo = usuario.getTipo();
		senha = usuario.getSenha();
	}
	
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
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
