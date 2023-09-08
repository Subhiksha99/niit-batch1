export class UserService {
    users = []; // [{u1}, {u2}, {u3}]
    // map - [{u1}, {uu2}, {u3}]




    // Registration
    addUser(user) {

        user.role = 'customer';
        user.isLogin = false;

        // add user to users array
        this.users.push(user);

        // return response
        const res = {
            fullName: user.fullName,
            email: user.email,
            contactNo: user.contactNo,
            role: user.role,
            isLogin: user.isLogin
        }

        return res;

    }

    // Login
    login(user) {
        console.log("user", user);
        console.log("Users: ", this.users);
        const dbUser = this.users.find(u => u.email === user.email);
        console.log("dbUser", dbUser);
        let res = {
            email: user.email,
            role: user.role,
            isLogin: false
        }
        // update login status if user credentials matches with db
        if (dbUser.password === user.password && dbUser.role === user.role) {
            console.log("inside if loop")
            // update isLogin as true
            dbUser.isLogin = true;
            // update db
            this.users = this.users.map(u => u.email === user.email ? dbUser : u);
            // response to be return
            res = {
                email: dbUser.email,
                isLogin: dbUser.isLogin,
                role: dbUser.role
            }
        }

        return res;
    }
}

export default new UserService();