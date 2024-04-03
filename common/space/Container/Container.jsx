const Container = ({ children, placeHolderText, ...props }) => {
    return <div {...props}>{children}</div>;
};
export { Container };
