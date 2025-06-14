import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UrlCdcListenerService } from "./url.service";
import { UrlShortener, UrlShortenerSchema } from "./model/url.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UrlShortener.name, schema: UrlShortenerSchema },
    ]),
  ],
  controllers: [],
  providers: [UrlCdcListenerService],
})
export class UrlCdcModule {}
