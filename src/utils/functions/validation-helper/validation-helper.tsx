export const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) {
    return "Ingrese un correo válido";
  }
  return "";
};

export const isValidPassword = (password: string) => {
  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres";
  }
  return "";
};

export const required = (value: string) => {
  if (value.length == 0) {
    return "Este campo es requerido";
  }
  return "";
};

export const atLeastNRequired = (min: number, value: string, msg?: string) => {
  if (value.split(",").length < min) {
    return msg ? msg : `Es requerido seleccionar al menos ${min}`;
  }
  return "";
};

export const isURL = (url: string) => {
  const re =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  if (!re.test(url)) {
    return "Ingrese una url válida";
  }
  return "";
};
