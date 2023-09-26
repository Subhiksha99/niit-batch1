package com.example.RestDemo.exception;

import com.example.RestDemo.entity.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class CustomerExceptionHandler {
    @ExceptionHandler(CustomerNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleException(CustomerNotFoundException exception) {
        ErrorResponse error = new ErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value()); // 404 not found
        error.setMessage(exception.getMessage()); //get message from exception
        error.setTimeStamp(LocalDateTime.now()); // system time

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);  //404 Not found
    }
}
