package com.msprbilleterie.msprbilleterie.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@Entity
@Table
public class Artiste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy = "artiste")
    private List<Evenement> evenements;

}