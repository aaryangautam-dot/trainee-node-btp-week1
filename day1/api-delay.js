function simAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data from api");
        }, 2000);
    });
}

async function fetch() {
    console.log("Fetching user data");

    const result = await simAPI();

    console.log(result);
}
fetch();