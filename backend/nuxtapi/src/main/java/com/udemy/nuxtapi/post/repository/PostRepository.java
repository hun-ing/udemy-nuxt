package com.udemy.nuxtapi.post.repository;

import com.udemy.nuxtapi.post.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<PostEntity, Long> {

}
