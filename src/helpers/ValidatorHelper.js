export class ValidatorHelper {
  static min(value, minSize) {
    if (value.length < minSize) {
      return `Min size ${minSize} letters`;
    }
  }

  static max(value, maxSize) {
    if (value.length > maxSize) {
      return `Max size ${maxSize} letters`;
    }
  }

  static mandatory(value) {
    if (!value) {
      return `This field is required`;
    }
  }

  static emailFormat(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return `The field should be a valid email`;
    }
  }
}
