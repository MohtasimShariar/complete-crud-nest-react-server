import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
// import { EmployeesModule } from './employees/employees.module';
// import { CatsService } from './modules/cats/cats.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
