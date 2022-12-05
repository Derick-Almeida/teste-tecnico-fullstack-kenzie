import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  const PORT = process.env.PORT || 4000;

  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source initialized");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
