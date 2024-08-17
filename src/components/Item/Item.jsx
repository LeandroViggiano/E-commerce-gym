const Item = ({name, category, price, img}) => {
    return(
        <article>
            <h4>categoria: {category}</h4>
            <h3>{name}</h3>
            <img src="" alt="" />
            <h4>{price}</h4>
            <a>ver detalle</a>
        </article>
    )
}