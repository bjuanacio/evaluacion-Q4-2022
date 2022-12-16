import {
  atLeastNRequired,
  isValidEmail,
  isValidPassword,
  required,
} from "./validation-helper";
describe("ValidationHelper", () => {
  it("should validate email and return error message if needed", () => {
    let valid = isValidEmail("test.com");
    expect(valid).toBe("Ingrese un correo válido");

    valid = isValidEmail("test@test.com");
    expect(valid).toBe("");
  });
  it("should validate password and return error message if needed", () => {
    let valid = isValidPassword("123");
    expect(valid).toBe("La contraseña debe tener al menos 6 caracteres");

    valid = isValidPassword("123456");
    expect(valid).toBe("");
  });
  it("should validate empty field and return error message if needed", () => {
    let valid = required("");
    expect(valid).toBe("Este campo es requerido");

    valid = required("abcd");
    expect(valid).toBe("");
  });

  it("should validate if N options are chosen and return according messsage", () => {
    let valid = atLeastNRequired(2, "1");
    expect(valid).toBe("Es requerido seleccionar al menos 2");
    valid = atLeastNRequired(2, "1,2");
    expect(valid).toBe("");
    valid = atLeastNRequired(2, "1", "mensaje propio de error");
    expect(valid).toBe("mensaje propio de error");
  });
});
