export class ClassUtil {

  public static nameOffInstance(instance: any): string {
    return this.nameOffConstructor(Object.getPrototypeOf(instance).constructor);
  }

  public static nameOffConstructor(constructor: new (...args: any[]) => any): string {
    return constructor.name as string;
  }

  public static constructorIsInstanceOf(constructor: new (...args: any[]) => any, base: new (...args: any[]) => any) {
    return constructor === base || typeof constructor === 'function' && (constructor.prototype instanceof base);
  }

}
