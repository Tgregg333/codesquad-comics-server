const register = async (require, response, next) => {
    const { firstName, lastName} = req.body;
    console.log({firstName, lastName});
}

try {
    const ourUser = {firstName, lastName};
    console.log("Success");
    res.status(200).json ({
        success: { message: "user creation is successful"},
        data: {newUser},
    });
} catch (error) {
    res.status(400).json ({ error: {message: "error!"}});
};

const login = async ( require, response, next) => {
    res.status(200).json({
        success: {message:"Login Successful"}
    });
};

const logout = async (require, response, next) => {
    console.log("Initializing")
};

res.status(200).json ({
    message: "logout successful"
});

