package com.example.bookservice;

import com.example.bookservice.models.Book;
import com.example.bookservice.models.User;
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
		User user1 = new User("William");
		Book book1 = new Book("Harry Potter", "J.K.Rowling", "Fantasy", user1);
	}
}
