
import * as CryptoJS from 'crypto-js';

class EncryptionService {
  
  encrypt(text: string, key: string): string {
    const encryptedText = CryptoJS.AES.encrypt(text, key).toString();
    return encryptedText;
  }

  decrypt(encryptedText: string, key: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  }
}
export default new EncryptionService();
