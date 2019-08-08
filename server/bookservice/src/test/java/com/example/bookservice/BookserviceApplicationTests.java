package com.example.bookservice;

import com.example.bookservice.models.Book;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookserviceApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Test
	public void createBook() {
		Book book1 = new Book("Harry Potter", "J.K.Rowling", "Fantasy");
	}
}
