package com.udemy.nuxtapi.post.domain;

import com.udemy.nuxtapi.post.dto.PostDTO;
import com.udemy.nuxtapi.post.entity.PostEntity;
import java.time.LocalDateTime;
import lombok.Getter;


@Getter
public class PostDomain {

  private Long id;
  private String author;
  private String content;
  private String thumbnail;
  private String title;
  private String previewText;
  private LocalDateTime updatedDate;

  private PostDomain(PostDTO dto) {
    this.id = dto.getId();
    this.author = dto.getAuthor();
    this.content = dto.getContent();
    this.thumbnail = dto.getThumbnail();
    this.title = dto.getTitle();
    this.previewText = dto.getPreviewText();
    this.updatedDate = dto.getUpdatedDate();
  }

  public static PostDomain of(PostDTO dto) {
    return new PostDomain(dto);
  }

  public PostEntity toCreateEntity() {
    return PostEntity.builder()
      .id(id)
      .author(author)
      .content(content)
      .thumbnail(thumbnail)
      .title(title)
      .previewText(previewText)
      .updatedDate(updatedDate)
      .build();
  }
}
