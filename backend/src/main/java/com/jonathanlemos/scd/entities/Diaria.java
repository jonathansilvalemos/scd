package com.jonathanlemos.scd.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="tb_diaria")
public class Diaria {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate data;
	private Double valorGasto;
	private int portaria;
	private Boolean status;
	private String compDespesa;
	private String compDesloca;
	
	@OneToOne
	private Usuario usuario;
	@ManyToOne
	@JoinColumn(name = "cidade_id")
	private Cidade cidade;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getPortaria() {
		return portaria;
	}
	public void setPortaria(int portaria) {
		this.portaria = portaria;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public Cidade getCidade() {
		return cidade;
	}
	public void setCidade(Cidade cidade) {
		this.cidade = cidade;
	}
	public LocalDate getData() {
		return data;
	}
	public void setData(LocalDate data) {
		this.data = data;
	}
	public Double getValorGasto() {
		return valorGasto;
	}
	public void setValorGasto(Double valorGasto) {
		this.valorGasto = valorGasto;
	}
	public String getCompDespesa() {
		return compDespesa;
	}
	public void setCompDespesa(String compDespesa) {
		this.compDespesa = compDespesa;
	}
	public String getCompDesloca() {
		return compDesloca;
	}
	public void setCompDesloca(String compDesloca) {
		this.compDesloca = compDesloca;
	}
	
	
}
