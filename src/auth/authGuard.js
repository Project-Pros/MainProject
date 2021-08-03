/**
 * This class makes sure that a user is logged in.
 */
import { getInstance } from "./index";

export const authGuard = (to, from, next) => {
    const authService = getInstance();

    /**
     * This function checks to make sure that a user is logged in and if not redirects to login page
     * @returns next() function
     */
    const fn = () => {
        // If the user is authenticated, continue with the route
        if (authService.isAuthenticated) {
            return next();
        }

        // Otherwise, log in
        authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
    };

    // If loading has already finished, check our auth state using `fn()`
    if (!authService.loading) {
        return fn();
    }

    // Watch for the loading property to change before we check isAuthenticated
    authService.$watch("loading", loading => {
        if (loading === false) {
            return fn();
        }
    });
};