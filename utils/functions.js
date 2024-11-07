exports.formatDate = (birthDate) => {
  const date = new Date(birthDate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

