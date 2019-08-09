package com.example.bookservice.repositories;


import com.example.bookservice.models.Book;
import com.example.bookservice.projections.EmbedBooks;
import com.example.bookservice.projections.EmbedUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedUsers.class)
public interface BookRepository extends JpaRepository<Book, Long> {
}
