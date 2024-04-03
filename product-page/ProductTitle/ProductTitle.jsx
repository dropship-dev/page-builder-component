import { replaceAllPlaceholderText } from '~/src/craft/utils/';
import { useProductStore } from '../../store/product-page';
const ProductTitle = ({ title, align, color, isFullWidth, className }) => {
    const textPlaceholders = useProductStore((state) => state.textPlaceholders);
    const content = replaceAllPlaceholderText({
        phrases: textPlaceholders,
        originalStr: title ?? ''
    });
    const style = {
        textAlign: align,
        color
    };
    if (isFullWidth) {
        style.width = '100%';
    }
    return (<div className={`${className}`} style={style}>
      {content}
    </div>);
};
export { ProductTitle };
