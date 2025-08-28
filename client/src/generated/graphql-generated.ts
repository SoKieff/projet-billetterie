import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A local date-time without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30. */
  LocalDateTime: { input: any; output: any; }
};

/**
 *  ====================
 *  TYPES
 *  ====================
 */
export type Artiste = {
  __typename?: 'Artiste';
  biographieComplete?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
  urlArtistImage?: Maybe<Scalars['String']['output']>;
  urlSocialMedia?: Maybe<Scalars['String']['output']>;
};

/**
 *  ====================
 *  INPUTS
 *  ====================
 */
export type ArtisteInput = {
  biographieComplete?: InputMaybe<Scalars['String']['input']>;
  nom: Scalars['String']['input'];
  urlArtistImage?: InputMaybe<Scalars['String']['input']>;
  urlSocialMedia?: InputMaybe<Scalars['String']['input']>;
};

export enum CategorieEvenement {
  ANIMATION = 'ANIMATION',
  ATELIER = 'ATELIER',
  CEREMONIE = 'CEREMONIE',
  CONCERT = 'CONCERT',
  DJ_SET = 'DJ_SET',
  FOOD = 'FOOD',
  RENCONTRE = 'RENCONTRE',
  SHOPPING = 'SHOPPING'
}

export type Evenement = {
  __typename?: 'Evenement';
  artiste: Artiste;
  categorie: CategorieEvenement;
  description: Scalars['String']['output'];
  endTime: Scalars['LocalDateTime']['output'];
  eventId: Scalars['Int']['output'];
  eventName?: Maybe<Scalars['String']['output']>;
  longDescription: Scalars['String']['output'];
  scene: Scene;
  startTime: Scalars['LocalDateTime']['output'];
};

export type EvenementInput = {
  artisteId: Scalars['Int']['input'];
  categorie: CategorieEvenement;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['LocalDateTime']['input'];
  eventName: Scalars['String']['input'];
  longDescription?: InputMaybe<Scalars['String']['input']>;
  sceneId: Scalars['Int']['input'];
  startTime: Scalars['LocalDateTime']['input'];
};

/**
 *  ====================
 *  QUERIES
 *  ====================
 */
export type Query = {
  __typename?: 'Query';
  /**  Evenements */
  getAllEvent: Array<Evenement>;
};

export type Scene = {
  __typename?: 'Scene';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type SceneInput = {
  name: Scalars['String']['input'];
};

export type QueryEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryEventsQuery = { __typename?: 'Query', getAllEvent: Array<{ __typename?: 'Evenement', categorie: CategorieEvenement, description: string, endTime: any, eventName?: string | null, longDescription: string, startTime: any, artiste: { __typename?: 'Artiste', nom: string, urlArtistImage?: string | null, urlSocialMedia?: string | null }, scene: { __typename?: 'Scene', name: string } }> };

export const QueryEventsDocument = gql`
    query queryEvents {
  getAllEvent {
    artiste {
      nom
      urlArtistImage
      urlSocialMedia
    }
    categorie
    description
    endTime
    eventName
    longDescription
    startTime
    scene {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryEventsQueryGQL extends Apollo.Query<QueryEventsQuery, QueryEventsQueryVariables> {
    override document = QueryEventsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }