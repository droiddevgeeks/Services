import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UrlShortener } from './model/url.schema';

@Injectable()
export class UrlCdcListenerService implements OnModuleInit {
  constructor(
    @InjectModel(UrlShortener.name) private urlModel: Model<UrlShortener>,
  ) {}

  async onModuleInit() {
    const changeStream = this.urlModel.watch([
      { $match: { operationType: 'delete' } },
    ]);
    changeStream.on('change', (change) => {
      const expiredId = change.documentKey._id;
      console.log(`Short URL expired and deleted: ${expiredId}`);
    });
    changeStream.on('error', (err) => {
      console.error('Change stream error:', err);
      // Optionally, implement reconnection logic here
    });
  }
}
