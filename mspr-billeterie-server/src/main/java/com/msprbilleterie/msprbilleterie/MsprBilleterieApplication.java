package com.msprbilleterie.msprbilleterie;

import lombok.SneakyThrows;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class MsprBilleterieApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsprBilleterieApplication.class, args);
	}

	/**
	 * Configuration de la sécurité de l'application.
	 *
	 * @param http la configuration de la sécurité
	 *
	 * @return la configuration de la sécurité
	 */
	@Bean
	@SneakyThrows
	public SecurityFilterChain securityFilterChain(HttpSecurity http) {
		http.authorizeHttpRequests(conf -> conf.anyRequest().permitAll());
		http.csrf(AbstractHttpConfigurer::disable);
		http.cors(conf -> conf.configurationSource(this.corsConfiguration()));
		return http.build();
	}

	/**
	 * Configuration de la source de configuration CORS.
	 *
	 * @return la source de configuration CORS
	 */
	@SneakyThrows
	public CorsConfigurationSource corsConfiguration() {
		var configuration = new CorsConfiguration();
		configuration.setAllowCredentials(true);
		configuration.setAllowedOriginPatterns(Arrays.asList("http://localhost:[4200,9090]", "*"));
		configuration.setAllowedHeaders(List.of("*"));
		configuration.setAllowedMethods(List.of("*"));
		var source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

}
