export function plantilla_animal(titulo, src2, alt, descripcion, texto) {
    return `<article>
    <h1>${titulo}</h1>
    <img src="${src2}" alt="${alt}">
    <h3>${descripcion}</h3>
    <p>${texto}</p>
    </article>`
};