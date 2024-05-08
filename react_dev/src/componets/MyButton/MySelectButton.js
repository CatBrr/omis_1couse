import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MySelectButton({options, defaultTitle, setFilter}) {
  const buttonClick=(event)=>{
    event.preventDefault();
    //console.log(event.target.dataset.sort)
    setFilter({...filter, selectedSort: event.target.dataset.sort})

  }
  return (
    <DropdownButton id="dropdown-basic-button" title={defaultTitle}>
        {
            options.map((option, index)=> <Dropdown.Item 
                key={index}
                onClick={buttonClick}
                data-sort={option.title}
                href={option.href}>{option.title}
            </Dropdown.Item>)
         }
    </DropdownButton>
  );
}

export default MySelectButton;