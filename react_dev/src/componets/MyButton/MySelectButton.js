import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MySelectButton({options, defaultTitle, SetselectedSort, sortPosts}) {
  const buttonClick=(event)=>{
    event.preventDefault();
    //console.log(event.target.dataset.sort)
    SetselectedSort(event.target.dataset.sort)
    sortPosts()
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