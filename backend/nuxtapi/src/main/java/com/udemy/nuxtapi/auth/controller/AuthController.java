package com.udemy.nuxtapi.auth.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

  @PostMapping("/api/auth/sign-up")
  public ResponseEntity signUp(@RequestBody String requestBody, @RequestHeader HttpHeaders header) {
    String authorization = header.getFirst(HttpHeaders.AUTHORIZATION);
    System.out.println("requestBody = " + requestBody);
    System.out.println("authorization = " + authorization);
    return ResponseEntity.ok().headers(httpHeaders -> {
        httpHeaders.add("authorization", "123123123");
      })
      .body(requestBody);
  }
}
