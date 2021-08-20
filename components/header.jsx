const Header = ({ content, level }) => {
    return (
        <>
            {
                level === 1 &&
                <h1>{content}</h1>
            }
            {
                level === 2 &&
                <h2>{content}</h2>
            }
        </>
    )
};

export default Header;