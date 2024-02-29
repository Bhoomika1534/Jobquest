package com.example.demo.Dto;

public class UserDto {
    private Long id;
    private String username;
    private String emailid;
    private String password;
    private String qualification;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail_id() {
        return emailid;
    }

    public void setEmail_id(String email_id) {
        this.emailid = email_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public UserDto(Long id, String username, String email,String password,String qualification) {
        this.id = id;
        this.username = username;
        this.emailid = email;
        this.password = password;
        this.qualification = qualification;
    }
}