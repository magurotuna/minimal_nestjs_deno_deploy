import { NestFactory } from "@nestjs/core";
import { Controller, Get, Injectable, Module } from "@nestjs/common";
import "@nestjs/platform-express";

@Injectable()
class MyRepository {
  constructor() {}

  dummy(): Promise<string[]> {
    return new Promise((resolve) => resolve([]));
  }
}

@Controller()
class MyController {
  constructor(private myRepo: MyRepository) {}

  @Get("/")
  get(): Promise<string[]> {
    return this.myRepo.dummy();
  }
}

@Module({
  providers: [MyRepository],
  controllers: [MyController],
})
class AppModule {}

const app = await NestFactory.create(AppModule);
app.listen(5677);
