/**
 * Autobind decorator (method decorator)
 * @param _ (target, not used here)
 * @param _2 (methodName, not used here)
 * @param descriptor
 */
export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjDescriptor;
}
