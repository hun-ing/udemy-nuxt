package com.udemy.nuxtapi.post.controller;

import com.udemy.nuxtapi.post.domain.PostDomain;
import com.udemy.nuxtapi.post.dto.PostDTO;
import com.udemy.nuxtapi.post.entity.PostEntity;
import com.udemy.nuxtapi.post.repository.PostRepository;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PostController {

  private final PostRepository postRepository;

  @PostMapping("/api/post")
  public ResponseEntity createPost(@RequestBody PostDTO requestBody) {
    PostEntity postEntity = postRepository.save(PostDomain.of(requestBody).toCreateEntity());
    return ResponseEntity.status(HttpStatus.OK).body(postEntity);
  }

  @PutMapping("/api/post")
  public ResponseEntity updatePost(@RequestBody PostDTO requestBody) {
    PostEntity postEntity = postRepository.save(PostDomain.of(requestBody).toCreateEntity());
    return ResponseEntity.status(HttpStatus.OK).body(postEntity);
  }

  @GetMapping("/api/post")
  public ResponseEntity getPost() {
    List<PostEntity> postEntityList = postRepository.findAll();
    return ResponseEntity.status(HttpStatus.OK).body(postEntityList);
  }

  @GetMapping("/api/post/{id}")
  public ResponseEntity getPostById(@PathVariable(name = "id") Long id) {
    Optional<PostEntity> postEntityOptional = postRepository.findById(id);
    PostEntity postEntity = postEntityOptional.get();
    return ResponseEntity.status(HttpStatus.OK).body(postEntity);
  }
}
