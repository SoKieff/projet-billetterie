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

    @Column(name = "url_artist_image")
    private String urlArtistImage;

    @Column(name = "url_social_media")
    private String urlSocialMedia;

    @Column(name = "biographie_complete", columnDefinition = "TEXT")
    private String biographieComplete;

    @OneToMany(mappedBy = "artiste", fetch = FetchType.LAZY)
    private List<Evenement> evenements;

}