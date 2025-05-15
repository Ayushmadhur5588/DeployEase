const MaxLen: number = 5; 
 
export function generateId(): string {
    const chars = '0123456789ghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdef';
    let id = '';
    for (let i = 0; i < MaxLen; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  