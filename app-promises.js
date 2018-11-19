const users = [{
    id: 1,
    name: "Marc",
    schoolID: 101,
},{
    id: 2,
    name: "Jess",
    schoolID: 202,
}];


const grades = [];


const getUser = (id) => {
    return new Promise((resolve,reject) => {
        const user = users.find((user) => {
            return user.id === id;
        });
        if (user) {
            resolve(user);
        }
        else {
            reject(`User with id: ${id} not found!`);
        }
    });
}

getUser(22).then((user) => {
    console.log("User found: ", user);
}).catch((err) => {
    console.log(err);
});

