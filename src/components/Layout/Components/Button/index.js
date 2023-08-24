import classNames from 'classnames/bind';
import styles from './Button.css';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ButtonComponent({
    className,
    to,
    href,
    onClick,
    children,
    primary,
    primary2,
    primaryHover,
    primarySubcribe,
    tag,
    loginRegister,
    productAction,
}) {
    let Comp = 'button';

    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        primary2,
        primaryHover,
        primarySubcribe,
        tag,
        loginRegister,
        productAction,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default ButtonComponent;
