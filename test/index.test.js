const app = require("../src/app");
const request = require("supertest");

describe("register", () => {
    //success test case
    it("returns 200", async () => {
        const res = await request(app).post("/api/register").send({
            email:"hp9@g.com",
            firstname:"ben",
            lastname:"ten",
            password:"hp123"
        });

        expect(200);
    });

    //error test case 
    it("returns error if any info is missing", async () => {
        const res = await request(app).post("/api/register").send({
            firstname:"ben",
            lastname:"ten",
            password:"hp123"
        });

        expect(400);
    });
});


describe("login", () => {
    //true test case
    it("returns 200 if successful", async () => {
        const res = await request(app).post("/api/login").send({
            email:"hp9@g.com",
            password:"hp123"
        });

        expect(200);
    });

    // error test case 
    it("returns error if user not found", async () => {
        const res = await request(app).post("/api/login").send({
            email:"hp9@g.com",
            password:"hp1"
        });

        expect(401);
    });
});