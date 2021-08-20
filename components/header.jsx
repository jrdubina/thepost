const Header = ({ content, level }) => {
    switch(level) {
        case 1: return <h1>{content}</h1>;
        case 2: return <h2>{content}</h2>;
        default: break;
    }
};

export default Header;