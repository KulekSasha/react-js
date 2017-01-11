package com.nix.repository;

import com.nix.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface RoleRepository extends CrudRepository<Role, Long> {
}
