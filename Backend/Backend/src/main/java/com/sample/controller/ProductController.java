package com.sample.controller;

import com.sample.dto.AuthRequest;
import com.sample.dto.AuthResponse;
import com.sample.dto.AuthResponse.AuthResponseBuilder;
import com.sample.dto.Product;
import com.sample.entity.UserInfo;
import com.sample.repository.UserInfoRepository;
import com.sample.service.JwtService;
import com.sample.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin(origins="*")

@RestController
@RequestMapping("/jobs")
public class ProductController {

    @Autowired
    private ProductService service;
    
    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserInfoRepository userInfoRepository;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }

    @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        return service.addUser(userInfo);
    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Product> getAllTheProducts() {
        return service.getProducts();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Product getProductById(@PathVariable int id) {
        return service.getProduct(id);
    }

    @DeleteMapping("/delete/{id}")
    public String removeUser(@PathVariable int id){
        return service.deleteUser(id);
    }

    @PutMapping("/edit/{id}")
    public String editUser(@PathVariable int id, @RequestBody UserInfo userInfo) {
        
        return service.editUser(id, userInfo.getEmail(), userInfo.getName(), userInfo.getQualification());
    }

    @PostMapping("/authenticate")
    public AuthResponse authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            String token= jwtService.generateToken(authRequest.getUsername());
            var user= userInfoRepository.findByName(authRequest.getUsername());
            UserInfo userInfo= user.get();

            AuthResponseBuilder at= AuthResponse.builder()
            .token(token)
            .user(userInfo) ;
            return at.build();
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }

    @GetMapping("/getuser")
    public List<UserInfo> showUser() {
        return service.getUser();
    }
}
 