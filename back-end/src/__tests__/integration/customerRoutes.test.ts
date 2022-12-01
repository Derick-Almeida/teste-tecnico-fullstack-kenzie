import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../app";
import { customerData, customerLogin } from "../mocks";

describe("teste das rotas de usuário", () => {
  let connection: DataSource;
  let token: string = "";
  let customerId: string = "";
  let expectedKeys: string[] = [
    "id",
    "fullName",
    "createdAt",
    "updatedAt",
    "emails",
    "phones",
    "contacts",
  ];

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /register - Should not be able to create a customer with invalid data", async () => {
    const response = await request(app).post("/register").send({});

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("message");
  });

  test("POST /register - Must be able to create a new customer", async () => {
    const response = await request(app).post("/register").send(customerData);

    expect(response.status).toEqual(201);
    expect(Object.keys(response.body)).toEqual(expectedKeys);
    customerId = response.body.id;
  });

  test("POST /login - Must not be able to start a client session with invalid data", async () => {
    const response = await request(app).post("/login").send({});

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("message");
  });

  test("POST /login - Must be able to log into the client", async () => {
    const response = await request(app).post("/login").send(customerLogin);

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("token");
    token = response.body.token;
  });

  test("GET /profile - Must not be able to fetch a client without authorization token", async () => {
    const response = await request(app).get("/profile");

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("GET /profile - Must be able to fetch customer data", async () => {
    const response = await request(app).get("/profile").set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(customerId);
    expect(Object.keys(response.body)).toEqual(expectedKeys);
  });

  test("PATCH /profile - Must not be able to update a client without authorization token", async () => {
    const response = await request(app).patch("/profile").send({ fullName: "Jorge João jr" });

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("PATCH /profile - Must be able to update customer data", async () => {
    const response = await request(app)
      .patch("/profile")
      .set("Authorization", `Bearer ${token}`)
      .send({ fullName: "Jorge João jr" });

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(customerId);
    expect(response.body.fullName).toEqual("Jorge João jr");
    expect(Object.keys(response.body)).toEqual(expectedKeys);
  });

  test("DELETE /profile - Must not be able to delete a client without authorization token", async () => {
    const response = await request(app).delete("/profile");

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE /profile - Must be able to delete the client", async () => {
    const response = await request(app).delete("/profile").set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(204);
  });
});
