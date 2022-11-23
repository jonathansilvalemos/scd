package com.jonathanlemos.scd.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.jonathanlemos.scd.entities.Diaria;

public class DiariaDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private Long id;
	private LocalDate data;
	private String cidade;
	private Double valorDiaria;
	private Double valorGasto;
	private int portaria;
	private int status;
	private byte[] compDespesa;
	private byte[] compDesloca;
	
	private UsuarioDTO usuario;
	
	public DiariaDTO() {
		
	}
	
	public DiariaDTO(Diaria diaria) {
		id = diaria.getId();
		data = diaria.getData();
		cidade = diaria.getCidade();
		valorDiaria = diaria.getValorDiaria();
		valorGasto = diaria.getValorGasto();
		portaria = diaria.getPortaria();
		status = diaria.getStatus();
		compDespesa = diaria.getCompDespesa();
		compDesloca = diaria.getCompDesloca();
	}
	
	public DiariaDTO(Long id, LocalDate data, String cidade, Double valorDiaria, Double valorGasto, int portaria, int status, byte[] compDespesa,
			byte[] compDesloca) {
		
		this.id = id;
		this.data = data;
		this.cidade = cidade;
		this.valorDiaria = valorDiaria;
		this.valorGasto = valorGasto;
		this.portaria = portaria;
		this.status = status;
		this.compDespesa = compDespesa;
		this.compDesloca = compDesloca;
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

	public UsuarioDTO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioDTO usuario) {
		this.usuario = usuario;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
