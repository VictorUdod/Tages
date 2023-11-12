export function getUniqueID() {
  const uniqueSeed = Date.now();
  const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);
  const uniqueId = getUniqueId();
  return uniqueId
}