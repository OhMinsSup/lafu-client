export interface Storage {
    set(key: string, value: any): any;

    set(keyValueMap: { [index: string]: any }): any;

    getAsString(key: string): string | undefined;

    getAsNumber(key: string): number | undefined;

    getAsBoolean(key: string): boolean | undefined;

    getAsObject(key: string): object | undefined;

    getAsArray(key: string): string[] | undefined;

    get(key: string): string | undefined;

    del(key: string | string[]): any;

    size(): number;
    
    isEmpty(): boolean;
  }
  
  export abstract class AbstractStorage implements Storage {
    protected readonly prefix: string | undefined;
  
    protected constructor(prefix?: string) {
      this.prefix = prefix;
    }
  
    public getAsString(key: string): string | undefined {
      return this.get(key);
    }
  
    public getAsNumber(key: string): number | undefined {
      return Number(this.get(key)) || undefined;
    }
  
    public getAsBoolean(key: string): boolean | undefined {
      const value = this.get(key);
      switch (value) {
        case 'true':
          return true;
        case 'false':
          return false;
        default:
          return undefined;
      }
    }
  
    public getAsObject(key: string): object | undefined {
      const s = this.get(key);
      if (s) {
        try {
          const o = JSON.parse(s);
          if (o && typeof o === 'object') {
            return o;
          }
        } catch (e) {
          return undefined;
        }
      }
      return undefined;
    }
  
    public getAsArray(key: string): string[] | undefined {
      const o = this.getAsObject(key);
      if (o && Array.isArray(o)) {
        return o;
      } else {
        return undefined;
      }
    }
  
    public abstract del(key: string | string[]): any;
  
    public abstract get(key: string): string | undefined;
  
    public abstract set(key: string, value: any): any;
    public abstract set(keyValueMap: { [index: string]: any }): any;
  
    public abstract size(): number;
  
    public isEmpty(): boolean {
      return this.size() === 0;
    }
  
    protected concat(key: string): string {
      if (this.prefix) {
        return `${this.prefix}_${key}`;
      } else {
        return key;
      }
    }
  
    protected prepareValue(value: any): string {
      switch (typeof value) {
        case 'boolean':
        case 'number':
        case 'string':
          return value.toString();
        case 'object':
          return JSON.stringify(value);
        default:
          throw new Error('Invalid type of value');
      }
    }
  }
  
  class LocalStorage extends AbstractStorage {
    public constructor(prefix?: string) {
      super(prefix);
    }
  
    public del(key: string | string[]) {
      if (Array.isArray(key)) {
        key.forEach(k => localStorage.removeItem(this.concat(k)));
      } else {
        localStorage.removeItem(this.concat(key));
      }
    }
  
    public get(key: string): string | undefined {
      let value: string | undefined | null = localStorage.getItem(
        this.concat(key),
      );
      if (value === null) {
        value = undefined;
      }
      return value;
    }
  
    public set(key: string | { [index: string]: any }, value?: any) {
      if (typeof key === 'string' && value !== undefined) {
        localStorage.setItem(this.concat(key), this.prepareValue(value));
      } else if (typeof key === 'object') {
        for (const k of Object.keys(key)) {
          localStorage.setItem(this.concat(k), this.prepareValue(key[k]));
        }
      } else {
        throw new Error(
          'Either specify key, value or an object containing multiple key/value pairs',
        );
      }
    }
  
    public size(): number {
      let count = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)!;
        if (this.prefix) {
          if (key.indexOf(this.prefix) === 0) {
            count++;
          }
        } else {
          count++;
        }
      }
      return count;
    }
  }
  
  class StorageProvider {
    public static localStorage(prefix?: string): Storage {
      return new LocalStorage(prefix);
    }
  }
  
  export default StorageProvider;
  