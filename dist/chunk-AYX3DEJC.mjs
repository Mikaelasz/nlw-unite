// src/utils/generate-slug.ts
function generateSlug(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, "").toLowerCase().replace(/\s+/g, "-");
}

export {
  generateSlug
};
