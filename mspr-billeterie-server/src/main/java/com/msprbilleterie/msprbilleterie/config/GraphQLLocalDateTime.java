package com.msprbilleterie.msprbilleterie.config;

import graphql.language.StringValue;
import graphql.schema.Coercing;
import graphql.schema.CoercingParseLiteralException;
import graphql.schema.CoercingParseValueException;
import graphql.schema.CoercingSerializeException;
import graphql.schema.GraphQLScalarType;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class GraphQLLocalDateTime {
    public static final GraphQLScalarType INSTANCE = GraphQLScalarType.newScalar()
            .name("LocalDateTime")
            .description("A local date-time without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30.")
            .coercing(new Coercing<LocalDateTime, String>() {
                @Override
                public String serialize(Object dataFetcherResult) {
                    if (dataFetcherResult instanceof LocalDateTime) {
                        return ((LocalDateTime) dataFetcherResult).format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
                    }
                    throw new CoercingSerializeException("Expected a LocalDateTime object.");
                }

                @Override
                public LocalDateTime parseValue(Object input) {
                    try {
                        return LocalDateTime.parse(input.toString(), DateTimeFormatter.ISO_LOCAL_DATE_TIME);
                    } catch (DateTimeParseException e) {
                        throw new CoercingParseValueException("Invalid LocalDateTime value: " + input);
                    }
                }

                @Override
                public LocalDateTime parseLiteral(Object input) {
                    if (input instanceof StringValue) {
                        try {
                            return LocalDateTime.parse(((StringValue) input).getValue(), DateTimeFormatter.ISO_LOCAL_DATE_TIME);
                        } catch (DateTimeParseException e) {
                            throw new CoercingParseLiteralException("Invalid LocalDateTime literal: " + input);
                        }
                    }
                    throw new CoercingParseLiteralException("Expected a StringValue.");
                }
            })
            .build();
}

