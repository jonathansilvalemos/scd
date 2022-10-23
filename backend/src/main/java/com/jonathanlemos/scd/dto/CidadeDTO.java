package com.jonathanlemos.scd.dto;

import com.jonathanlemos.scd.entities.Cidade;

public class CidadeDTO {
	private Long id;
	private String nome;
	private Double valor;
	
	public CidadeDTO() {
		
	}
	
	public CidadeDTO(Cidade cidade) {
		id = cidade.getId();
		nome = cidade.getNome();
		valor = cidade.getValor();
	}
	
	public CidadeDTO(Long id, String nome, Double valor) {
		this.id = id;
		this.nome = nome;
		this.valor = valor;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Double getValor() {
		return valor;
	}
	public void setValor(Double valor) {
		this.valor = valor;
	}
	
	
}
