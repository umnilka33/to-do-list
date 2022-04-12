import { Server } from "miragejs";

new Server({
    routes() {
        this.namespace = "api";
        this.post("/auth/login/", (schema, request) => {
            const data = JSON.parse(request.requestBody)
            var isAuthUser = false;
            var name;
            const fakeUsers = [
                { email: "admin@fakemail.com", password: "admin", name: "Admin" },
                { email: "chris@fakemail.com", password: "12345", name: "Chris"  },
                { email: "helloworld@fakemail.com", password: "qwerty", name: "TestUser"  }
            ]
            
            fakeUsers.forEach(user => {
                if (data.email == user.email) {
                    if (data.password == user.password)
                        isAuthUser = true;
                        name = user.name;
                }
            });

            if (isAuthUser) {
                return [{
                    code: 0,
                    message: "success", 
                    name: name
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