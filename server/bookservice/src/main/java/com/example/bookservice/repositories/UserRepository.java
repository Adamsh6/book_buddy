package com.example.bookservice.repositories;

import com.example.bookservice.models.User;
import com.example.bookservice.projections.EmbedBooks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

@RepositoryRestResource(excerptProjection = EmbedBooks.class)
public interface UserRepository extends JpaRepository<User, Long> {
}



