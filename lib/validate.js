export default function connexion_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "E-mail requis";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "adresse e-mail non valide";
  }

  // validate for password
  if (!values.password) {
    errors.password = "Mot de passe requis ";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Doit être supérieur à 8 et inférieur à 20 caractères";
  } else if (values.password.includes("")) {
    errors.password = "Mot de passe invalide";
  }

  return errors;
}

export function inscriptionValidate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Nom d'utilisateur requis";
  } else if (values.username.includes(" ")) {
    errors.username = "Nom d'utilisateur invalide";
  }

  if (!values.email) {
    errors.email = "E-mail requis";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "adresse e-mail non valide";
  }

  // validate for password
  if (!values.password) {
    errors.password = "Mot de passe requis";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Doit être supérieur à 8 et inférieur à 20 caractères";
  } else if (values.password.includes(" ")) {
    errors.password = "Mot de passe invalide";
  }

  //validate confirm cpassword
  if (!values.cpassword) {
    errors.cpassword = "Mot de passe requis ";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Le mot de passe ne correspond pas";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "Confirmation du mot de passe invalide";
  }

  return errors;
}
