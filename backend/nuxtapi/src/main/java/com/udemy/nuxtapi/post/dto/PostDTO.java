package com.udemy.nuxtapi.post.dto;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class PostDTO {

  private Long id;
  private String author;
  private String content;
  private String thumbnail;
  private String title;
  private String previewText;
  private LocalDateTime updatedDate;
}
