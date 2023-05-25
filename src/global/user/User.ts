type Roles = "admin" | "user" | "viewer";

type User = {
    id: number,
    name: string,
    surname: string,
    login: string,
    password: string,
    role: Roles,
};

const user: User = {
    id: 4,
    name: "Habibi",
    surname: "Habobs",
    login: "Haribo",
    password: "habib_1234",
    role: "user"
}
const admin: User = {
    id: 20,
    name: "Admin",
    surname: "Admin",
    login: "Admin",
    password: "admin_1111",
    role: "admin"
}
const viewer: User = {
    id: 21,
    name: "",
    surname: "",
    login: "",
    password: "",
    role: "viewer"
}

export const ActualUser = user;
// export const ActualUser = admin;