package com.msprbilleterie.msprbilleterie.repository;

import com.msprbilleterie.msprbilleterie.Entity.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvenementRepository extends JpaRepository<Evenement,Long> {
}
