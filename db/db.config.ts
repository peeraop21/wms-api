import { DataSource, DataSourceOptions } from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
    type: 'mssql',
    host: 'localhost',
    username: 'sa',
    password: 'Nior@557500',
    database: 'wms',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/db/migrations/*.js'],
    extra: {
        options: { trustServerCertificate: true },
    },
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource