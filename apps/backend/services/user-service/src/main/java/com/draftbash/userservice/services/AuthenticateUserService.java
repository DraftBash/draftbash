package com.draftbash.userservice.services;

import com.draftbash.userservice.dtos.UserCreationDTO;
import com.draftbash.userservice.dtos.UserCredentialsDTO;
import com.draftbash.userservice.interfaces.IAuthenticationTokenService;
import com.draftbash.userservice.interfaces.IPasswordEncryptionService;
import com.draftbash.userservice.interfaces.IUserRepository;
import java.util.Optional;
import org.springframework.stereotype.Service;

/**
 * This class is responsible for authenticating the user.

 * @param authenticationTokenService The authentication token service.
 * @param userRepository The user repository.
 * @param passwordEncryptionService The password encryption service.
 */
@Service
public class AuthenticateUserService {

    private final IAuthenticationTokenService authenticationTokenService;

    private final IUserRepository userRepository;

    private final IPasswordEncryptionService passwordEncryptionService;

    /**
     * Constructor for the AuthenticateUserService class.
     */
    public AuthenticateUserService(IAuthenticationTokenService authenticationTokenService,
                                    IUserRepository userRepository,
                                    IPasswordEncryptionService passwordEncryptionService) {
        this.authenticationTokenService = authenticationTokenService;
        this.userRepository = userRepository;
        this.passwordEncryptionService = passwordEncryptionService;
    }

    /**
     * Authenticates the user.

     * @param user The user to authenticate.
     * @return the authentication token
     */
    public String authenticate(UserCreationDTO user) {

        boolean isUsernameMatching = userRepository.getUserByUsername(user.username()).isPresent();
        boolean isEmailMatching = userRepository.getUserByEmail(user.email()).isPresent();
        
        // Check if the username or email exists
        if (!isUsernameMatching && !isEmailMatching) {
            throw new IllegalArgumentException("Invalid username/email or password");
        }

        // Get the matched user.
        Optional<UserCredentialsDTO> matchedUser = userRepository.getUserByUsername(
            user.username());
        if (!matchedUser.isPresent()) {
            matchedUser = userRepository.getUserByEmail(user.email());
        }

        // Check if the password is correct
        if (!passwordEncryptionService.verify(user.password(), matchedUser.get().password())) {
            throw new IllegalArgumentException("Invalid username/email or password");
        }
        return authenticationTokenService.generateToken(matchedUser.get());
    }
}