package com.breathtakingbicycles.controller;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

@ControllerAdvice
@RestController
public class GlobalExceptionHandler {

    @ExceptionHandler(EmptyResultDataAccessException.class)
    public ResponseEntity<String> handleEmptyResultSetDataAccessException(EmptyResultDataAccessException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    @ExceptionHandler(GeenBenodigdhedenException.class)
    public ResponseEntity<String> handleGeenBenodigdhedenException(GeenBenodigdhedenException gbe) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(gbe.getMessage());
    }

    @ExceptionHandler(GeenKleurenPalettenException.class)
    public ResponseEntity<String> handleGeenKleurenPalettenException(GeenKleurenPalettenException gkpe) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(gkpe.getMessage());
    }

    @ExceptionHandler(GeenTalenException.class)
    public ResponseEntity<String> handleGeenTalenException(GeenTalenException gte) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(gte.getMessage());
    }
}
