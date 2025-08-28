package com.msprbilleterie.msprbilleterie.config;

import org.springframework.boot.autoconfigure.graphql.GraphQlSourceBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GraphQLConfig {

    @Bean
    public GraphQlSourceBuilderCustomizer sourceBuilderCustomizer() {
        return (graphQlSourceBuilder) -> graphQlSourceBuilder
                .configureRuntimeWiring((wiringBuilder) -> wiringBuilder
                        .scalar(GraphQLLocalDateTime.INSTANCE));
    }
}
