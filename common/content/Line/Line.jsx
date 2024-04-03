const Line = ({ className, margin, width, strokeWidth, strokeStyle, strokeColor, isFullWidth }) => {
    const style = {
        width: isFullWidth ? '100%' : `${width}px`,
        height: `${strokeWidth}px`,
        backgroundColor: strokeColor,
        marginTop: `${margin}px`,
        marginBottom: `${margin}px`
    };
    return (<div className={`mx-auto block max-w-full ${className}`} style={style}></div>);
};
export { Line };
