import React from 'react';
import { AuthProvider } from './modules/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { LoginPage } from './modules/login';
import { SignupPage } from './modules/signup';
import { MockDraftsPage } from './modules/mock-drafts/MockDraftsPage';

export const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/*" element={<ProtectedRoute path="/" element={<MockDraftsPage />} />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};