package com.jonathanlemos.scd.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.jonathanlemos.scd.dto.DiariaDTO;

@Entity
@Table(name="tb_diaria")
public class Diaria implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate data;
	private String cidade;
	private Double valorDiaria;
	private Double valorGasto;
	private int portaria;
	private int status;
	@Lob
	private byte[] compDespesa;
	@Lob
	private byte[] compDesloca;
	
	@OneToOne
	private Usuario usuario;
	
	public Diaria() {
		
	}
	
	public Diaria (DiariaDTO diaria) {
		data = diaria.getData();
		cidade = diaria.getCidade();
		valorDiaria = diaria.getValorDiaria();
		valorGasto = diaria.getValorGasto();
		portaria = diaria.getPortaria();
		status = diaria.getStatus();
		compDespesa = diaria.getCompDespesa();
		compDesloca = diaria.getCompDesloca();
		usuario = new Usuario(diaria.getUsuario());
	}
	
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
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	public LocalDate getData() {
		return data;
	}
	public void setData(LocalDate data) {
		this.data = data;
	}
	
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public Double getValorDiaria() {
		return valorDiaria;
	}
	public void setValorDiaria(Double valorDiaria) {
		this.valorDiaria = valorDiaria;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public Double getValorGasto() {
		return valorGasto;
	}
	public void setValorGasto(Double valorGasto) {
		this.valorGasto = valorGasto;
	}
	public byte[] getCompDespesa() {
		return compDespesa;
	}
	public void setCompDespesa(byte[] compDespesa) {
		this.compDespesa = compDespesa;
	}
	public byte[] getCompDesloca() {
		return compDesloca;
	}
	public void setCompDesloca(byte[] compDesloca) {
		this.compDesloca = compDesloca;
	}
	
	
}
