import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../app";
import { contactData, customerData, customerLogin } from "../mocks";

describe("contact route test", () => {
  let connection: DataSource;
  let token: string = "";
  let contactId: string = "";
  let invalidId: string = "4fd0c719-1f9e-4660-bff2-fef0a28bd6d3";
  let expectedKeys: string[] = ["id", "fullName", "emails", "phones"];

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    await request(app).post("/register").send(customerData);
    const response = await request(app).post("/login").send(customerLogin);
    token = response.body.token;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /contacts - Must not be able to create a contact with invalid data", async () => {
    const response = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${token}`)
      .send({});

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("message");
  });

  test("POST /contacts - Must not be able to create a contact with invalid data", async () => {
    const response = await request(app).post("/contacts").send({});

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("POST /contacts - Must be able to create a contact", async () => {
    const response = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${token}`)
      .send(contactData);

    expect(response.status).toEqual(201);
    expect(Object.keys(response.body)).toEqual(expectedKeys);
    contactId = response.body.id;
  });

  test("GET /contacts - Must not be able to list contacts without authorization token", async () => {
    const response = await request(app).get("/contacts");

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("GET /contacts - Must be able to list contacts", async () => {
    const response = await request(app).get("/contacts").set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(200);
    expect(response.body).toHaveLength(1);
    expect(Object.keys(response.body[0])).toEqual(expectedKeys);
  });

  test("GET /contacts/:id - Must not be able to fetch a contact without authorization token", async () => {
    const response = await request(app).get(`/contacts/${contactId}`);

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("GET /contacts/:id - Should not be able to fetch a contact with invalid id", async () => {
    const response = await request(app)
      .get(`/contacts/${invalidId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });

  test("GET /contacts/:id - It must be possible to search for a contact", async () => {
    const response = await request(app)
      .get(`/contacts/${contactId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(contactId);
    expect(Object.keys(response.body)).toEqual(expectedKeys);
  });

  test("PATCH /contacts/:id - It should not be possible to update a contact's data without an authorization token", async () => {
    const response = await request(app)
      .patch(`/contacts/${contactId}`)
      .send({ fullName: "Ambrósio de Amaral Alves" });

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("PATCH /contacts/:id - It must not be possible to update data for a contact with an invalid id", async () => {
    const response = await request(app)
      .patch(`/contacts/${invalidId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ fullName: "Ambrósio de Amaral Alves" });

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });

  test("PATCH /contacts/:id - It must be possible to update a contact's data", async () => {
    const response = await request(app)
      .patch(`/contacts/${contactId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ fullName: "Ambrósio de Amaral Alves" });

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(contactId);
    expect(response.body.fullName).toEqual("Ambrósio de Amaral Alves");
    expect(Object.keys(response.body)).toEqual(expectedKeys);
  });

  test("DELETE /contacts/:id - It should not be possible to delete a contact without authorization token", async () => {
    const response = await request(app).delete(`/contacts/${contactId}`);

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE /contacts/:id - It should not be possible to delete a contact with invalid id", async () => {
    const response = await request(app)
      .delete(`/contacts/${invalidId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE /contacts/:id - It must be possible to delete a contact", async () => {
    const response = await request(app)
      .delete(`/contacts/${contactId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toEqual(204);
  });
});
