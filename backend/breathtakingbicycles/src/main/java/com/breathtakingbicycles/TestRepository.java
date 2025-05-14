package com.breathtakingbicycles;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TestRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostConstruct
    public void testConnection() {
        Integer result = jdbcTemplate.queryForObject("SELECT 1", Integer.class);
        System.out.println("Database test result: " + result);
    }
}
