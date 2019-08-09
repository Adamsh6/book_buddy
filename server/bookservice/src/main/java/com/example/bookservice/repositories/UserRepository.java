package com.example.bookservice.repositories;

import com.example.bookservice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}



