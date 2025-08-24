package com.msprbilleterie.msprbilleterie.config;

import graphql.scalars.ExtendedScalars;
import org.springframework.boot.autoconfigure.graphql.GraphQlSourceBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GraphQLConfig {

    @Bean
    public GraphQlSourceBuilderCustomizer sourceBuilderCustomizer() {
        return (graphQlSourceBuilder) -> graphQlSourceBuilder
                .configureRuntimeWiring((wiringBuilder) -> wiringBuilder
                        .scalar(ExtendedScalars.DateTime));
    }
}
