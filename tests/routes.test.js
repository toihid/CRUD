import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import Product from "../models/productsModel";

let mongoDbAtlus =
  "mongodb+srv://toihid:mongodb24@cluster0.lp0pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/testBD";
let mongoDbLocal = "mongodb://localhost:27017/productsBD";

beforeEach(async function () {
  try {
    await mongoose.connect(mongoDbAtlus);
    await Product.insertMany([
      {
        name: "product 101",
        description: "product 101 des",
        price: 101,
        category: "test cat",
        quantity: 101,
      },
      {
        name: "product 102",
        description: "product 102 des",
        price: 102,
        category: "test cat",
        quantity: 102,
      },
      {
        name: "product 102",
        description: "product 102 des",
        price: 102,
        category: "test cat",
        quantity: 102,
      },
    ]);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

afterEach(async function () {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

test("GET /api/products", async () => {
  const resp = await request(app).get("/api/products");
  expect(resp.statusCode).toEqual(200);
  expect(resp.body.length).toEqual(3);
});

test("POST /api/products & GET /api/products/:id", async () => {
  const resp = await request(app).post("/api/products").send({
    name: "product test",
    description: "product test",
    price: 111,
    category: "test cat test",
    quantity: 111,
  });
  expect(resp.statusCode).toEqual(201);
  const id = resp.body._id;

  const respGet = await request(app).get(`/api/products/${id}`);
  expect(respGet.statusCode).toEqual(200);
  expect(respGet.body.name).toEqual("product test");
});

test("PUT /api/products/:id", async () => {
  const respSave = await request(app).post("/api/products").send({
    name: "product test update",
    description: "product test",
    price: 111,
    category: "test cat test",
    quantity: 111,
  });

  const id = respSave.body._id;

  const resp = await request(app).put(`/api/products/${id}`).send({
    name: "update success",
    description: "des update success",
    price: 1181,
    category: "cat update success",
    quantity: 1181,
  });
  expect(resp.statusCode).toEqual(200);
  expect(resp.body.name).toEqual("update success");
});

test("DELETE /api/products/:id", async () => {
  const respSave = await request(app).post("/api/products").send({
    name: "product test delete ",
    description: "product test delete",
    price: 222,
    category: "test cat test delete",
    quantity: 333,
  });
  const id = respSave.body._id;

  const resp = await request(app).delete(`/api/products/${id}`);
  expect(resp.statusCode).toEqual(200);

  const respGet = await request(app).get(`/api/products/${id}`);
  expect(respGet.statusCode).not.toEqual(200);
});
