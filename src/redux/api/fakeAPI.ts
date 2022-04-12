import { Server } from "miragejs";

new Server({
    routes() {
        this.namespace = "api";
        this.post("/auth/login/", (schema, request) => {
            const data = JSON.parse(request.requestBody)
            var isAuthUser = false;
            var userInfo;
            const fakeUsers = [
                { email: "1", password: "1", userInfo: {name: "Admin", token: '12341234'} },
                { email: "chris@fakemail.com", password: "12345", userInfo: {name: "Chris", token: '56785678'} },
                { email: "helloworld@fakemail.com", password: "qwerty", userInfo: {name: "TESTUSER", token: '1010101001'}}
            ]
            
            fakeUsers.forEach(user => {
                if (data.email == user.email) {
                    if (data.password == user.password)
                        isAuthUser = true;
                        userInfo = user.userInfo;
                }
            });

            if (isAuthUser) {
                return [{
                    code: 0,
                    message: "success", 
                    userInfo: userInfo
                }];
            }
            else {
                return [{
                    code: 1,
                    message: "error"
                }];
            }
        });
    }
});