import Link from './Link';

function Sidebar(){
  const links = [
    {label: 'Dropdown', path: '/'},
    {label: 'Accordion', path: '/accordion'},
    {label: 'Buttons', path: '/buttons'},
    {label: 'Modals', path: '/modal'},
    {label: 'Table', path: '/table'},
  ];

  const renderedLinks = links.map((link) => {
    return <Link key={link.label} to={link.path}
     className="mb-4  "
     activeClassName="font-bold border-l-4 border-blue-500 pl-2"
     >{link.label}</Link>;
  })
  // overflow-y-scroll
  return(
    <div className="sticky top-0  flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;