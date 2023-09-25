import MyConfigService from 'src/config/config.service';
import EncryptionService from 'src/helpers/encryption.service';
import { DataSource } from 'typeorm';


const dbConfig = MyConfigService.getDatabaseConfig();
const dbUser = EncryptionService.decrypt(dbConfig.DBUser, dbConfig.SecretKey)
const dbPass = EncryptionService.decrypt(dbConfig.DBPassword, dbConfig.SecretKey)


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mssql',
        host: dbConfig.DBServerIP,
        port: Number(dbConfig.DBServerPort),
        username: dbUser,
        password: dbPass,
        database: dbConfig.DBname,
        migrations: ['dist/db/migrations/*.js'],
        extra: {
          options: { trustServerCertificate: true },
        },
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        // synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];