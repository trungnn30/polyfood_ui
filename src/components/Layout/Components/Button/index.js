import classNames from 'classnames/bind';
import styles from './Button.css';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ButtonComponent({ className, to, href, onClick, children, primary, primaryHover, primarySubcribe, tag }) {
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

    const classes = cx('wrapper', { [className]: className, primary, primaryHover, primarySubcribe, tag });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default ButtonComponent;
