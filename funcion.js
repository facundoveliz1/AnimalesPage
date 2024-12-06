export const artCmp = (titulo, src1, alt, descripcion) =>`
<article class="article" >
    <img class="img_art" src="${src1}" atl="${alt}">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
</article>
`;