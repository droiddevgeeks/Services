import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UrlShortener, UrlShortenerSchema } from "./model/url.schema";
import { UrlCdcListenerService } from "./url.cdc.service";

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
