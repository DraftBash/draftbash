package com.draftbash.userservice.services;

import com.draftbash.userservice.dtos.UserDTO;
import com.draftbash.userservice.interfaces.IUserRepository;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 * Service for retrieving users.
 */
@Service
public class GetUsersService {

    private final IUserRepository userRepository;

    public GetUsersService(IUserRepository appUsersRepository) {
        this.userRepository = appUsersRepository;
    }

    public List<UserDTO> getUsersByUsername(String username, int excludeUserId) {
        return userRepository.getUsersByUsername(username, excludeUserId);
    }
}
