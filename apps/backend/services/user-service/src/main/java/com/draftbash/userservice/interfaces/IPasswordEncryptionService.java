package com.draftbash.userservice.interfaces;

import org.springframework.stereotype.Service;

/**
 * Interface for the Password service.
 */
@Service
public interface IPasswordEncryptionService {
    public String encode(String password);

    public boolean verify(String password, String hashedPassword);
}
