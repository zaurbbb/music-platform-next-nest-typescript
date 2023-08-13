import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: "http://localhost:3000",
      credentials: true,
    });
    await app.listen(PORT, () => console.log(`server started on ${PORT} port`));
  } catch (error) {
    console.log(error);
  }
};
start();
