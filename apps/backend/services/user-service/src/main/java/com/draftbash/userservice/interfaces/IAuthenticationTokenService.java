package com.draftbash.userservice.interfaces;

import com.draftbash.userservice.dtos.UserCredentialsDTO;
import org.springframework.stereotype.Service;

/**
 * This interface represents the contract for an authentication token service.
 */
@Service
public interface IAuthenticationTokenService {

    public String generateToken(UserCredentialsDTO user);

    public UserCredentialsDTO verify(String authenticationToken);
}
