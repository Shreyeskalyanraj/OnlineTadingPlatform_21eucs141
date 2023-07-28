package com.example.demo.Controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.User;
import com.example.demo.StService.UserService;

@CrossOrigin(origins = "http://localhost:3006")
@RestController
public class UserController {

	@Autowired
	private UserService Sserv;
	
	@GetMapping("/showuser")
	public  List<User> showStocks(){
		return Sserv.getUser();
	}  
	@GetMapping("/showuser/{id}")
	public Optional<User> findById(@PathVariable Long id) {
		return Sserv.findById(id);
	}
	
	@PostMapping("/adduser") 
	public User addStocks(@RequestBody User obj) {
		return Sserv.addUser(obj);
	}		

}
