import { MongooseModuleOptions } from '@nestjs/mongoose';

const mongooseConfig: MongooseModuleOptions = {
  uri: 'mongodb://localhost:27017/yourdatabase',
};

export default mongooseConfig;
