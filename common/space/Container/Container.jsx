const Container = ({ children, placeHolder, ...props }) => {
    return <div {...props}>{children}</div>;
};
export { Container };
