package com.camaratek.certificats.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Category implements Serializable {

    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column( length = 1800 )
    private String description;
    private String photo;
    @OneToMany( mappedBy = "category")
    private Collection<Certificat> produits;

    public Category() {}

    public Category(Long id, String name, String description, Collection<Certificat> produits) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.produits = produits;
    }

    public Category(Long id, String name, String description, String photo, Collection<Certificat> produits) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photo = photo;
        this.produits = produits;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Collection<Certificat> getProduits() {
        return produits;
    }

    public void setProduits(Collection<Certificat> produits) {
        this.produits = produits;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}