package com.camaratek.certificats.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class Certificat implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private Long id;
	private String numCert;
	private String titre;
	@Column( length = 1800 )
	private String description;
	private String auteur;
	 @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date dateCertif;
	private String url;
	private String universite;
	private String urlpng;
	
	@ManyToOne
	private Category category;

	
	public Certificat() {
		// TODO Auto-generated constructor stub
	}

	public Certificat(Long id, String numCert, String titre, String description, String auteur, Date dateCertif,
			String url, String universite, String urlpng) {
		super();
		this.id = id;
		this.numCert = numCert;
		this.titre = titre;
		this.description = description;
		this.auteur = auteur;
		this.dateCertif = dateCertif;
		this.url = url;
		this.universite = universite;
		this.urlpng = urlpng;
	}
	
	
	

	public Certificat(Long id, String numCert, String titre, String description, String auteur, Date dateCertif,
			String url, String universite, String urlpng, Category category) {
		super();
		this.id = id;
		this.numCert = numCert;
		this.titre = titre;
		this.description = description;
		this.auteur = auteur;
		this.dateCertif = dateCertif;
		this.url = url;
		this.universite = universite;
		this.urlpng = urlpng;
		this.category = category;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumCert() {
		return numCert;
	}

	public void setNumCert(String numCert) {
		this.numCert = numCert;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAuteur() {
		return auteur;
	}

	public void setAuteur(String auteur) {
		this.auteur = auteur;
	}

	public Date getDateCertif() {
		return dateCertif;
	}

	public void setDateCertif(Date dateCertif) {
		this.dateCertif = dateCertif;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUniversite() {
		return universite;
	}

	public void setUniversite(String universite) {
		this.universite = universite;
	}

	public String getUrlpng() {
		return urlpng;
	}

	public void setUrlpng(String urlpng) {
		this.urlpng = urlpng;
	}
	
	
}
