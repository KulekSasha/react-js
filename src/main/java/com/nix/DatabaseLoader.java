package com.nix;

import com.nix.model.Role;
import com.nix.model.User;
import com.nix.repository.RoleRepository;
import com.nix.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public DatabaseLoader(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Role admin = new Role(1L, "Admin");
        Role user = new Role(2L, "User");
        this.roleRepository.save(admin);
        this.roleRepository.save(user);

        DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        this.userRepository.save(new User(1L, "login", "password", "email@email",
                "firstName", "lastName", sdf.parse("1990-05-01"), admin));
        this.userRepository.save(new User(2L, "login2", "password2", "email2@email",
                "firstName2", "lastName2", sdf.parse("2000-01-01"), user));
    }
}
// end::code[]