import * as fs from 'fs';
import * as ini from 'ini';

class MyConfigService {
    private readonly config: Record<string, any>;
    constructor() {
        const configFile = fs.readFileSync('database.ini', 'utf-8');
        this.config = ini.parse(configFile);
    }

    getDatabaseConfig() {

        const header = this.config['Database']
        const SecretKey = header['SecretKey'];
        const DBServerIP = header['DBServerIP'];
        const DBServerPort =  header['DBServerPort'];
        const DBUser =  header['DBUser'];
        const DBPassword =  header['DBPassword'];
        const DBname =  header['DBname'];

        return { SecretKey, DBServerIP, DBServerPort, DBUser, DBPassword, DBname };
    }
}
export default new MyConfigService();