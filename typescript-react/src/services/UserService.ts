import { UserList } from "../Model/UserList";

export class UserService {
    private static users: UserList[] = [ //yaha users ka type userList interface se hoga
        { sno: 1, name: "Devendra", age: 22 },
        { sno: 2, name: "Devendra2", age: 22 },
        { sno: 3, name: "Devendra3", age: 32 },
    ];

    public static getAllUser() {
        return this.users;
    }
} 