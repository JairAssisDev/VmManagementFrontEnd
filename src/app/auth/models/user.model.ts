export interface UserCredentials {
    email: string;
    password: string;
}

export interface SignInResponse {
    username: string;
    userId: string;
    token: string;
}