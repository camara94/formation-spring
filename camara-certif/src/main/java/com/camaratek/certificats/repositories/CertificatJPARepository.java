package com.camaratek.certificats.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.camaratek.certificats.entities.Certificat;

@RepositoryRestResource
public interface CertificatJPARepository extends JpaRepository<Certificat, Long> {

}
