import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";
import { UrlCdcModule } from './tinyurl-cdc/url.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI || "mongodb://localhost:27017/tinyurl"
    ),
    UrlCdcModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
