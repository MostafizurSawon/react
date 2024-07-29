import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({to, children, className, activeClassName}) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames('text-blue-500',
     className,
     currentPath === to &&  activeClassName
    );
  
  const handleClick = (event) =>{
    console.log(event);
    if ( event.metaKey || event.ctrlKey )
    {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a className={classes} href={to} onClick={handleClick}>{children}</a>
    </div>
  )
}

export default Link