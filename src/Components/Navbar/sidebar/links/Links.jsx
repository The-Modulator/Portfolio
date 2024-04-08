const Links = () => {
    const items = [
        "Homepage",
        "Projects",
        "Contact",

    ]
    return (
        <div className="Links">
        {items.map((item) => (
            < a href={`#${item}`} key={items}> {item} </a>
        
    ))}
    </div>
    );
};

export default Links;