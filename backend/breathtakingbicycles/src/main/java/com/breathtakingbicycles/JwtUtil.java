package com.breathtakingbicycles;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import java.security.Key;
import java.util.Date;


// Deze klasse is voor valideren van JWT tokens.

@Component
public class JwtUtil {

    // sleutel die wordt gebruikt om het token te ondertekenen
    private final Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // hoe lang de token actief is (24 uur)
    private final long expirationMs = 86400000;

    /**
     * Genereert een JWT token op basis van de gebruikersnaam.
     * @param username de gebruikersnaam die in het token wordt opgeslagen
     * @return een JWT token als string
     */
    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationMs)) // verval datum
                .signWith(secretKey)
                .compact();
    }

    /**
     * Haalt de gebruikersnaam (subject) uit het JWT token.
     * @param token het JWT token
     * @return de gebruikersnaam die in het token staat
     */
    public String getUsernameFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey) // Gebruik dezelfde geheime sleutel om het token te parsen
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject(); // Haal de "subject" claim op (de gebruikersnaam)
    }

    //kijkt of de token actief is
    public boolean isTokenValid(String token) {
        try {
            getUsernameFromToken(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
