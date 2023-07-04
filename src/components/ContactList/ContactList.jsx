import PropTypes from 'prop-types';
import { Li, Ul, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <Ul>
    {contacts.map(contact => (
      <Li key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <Button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </Button>
        }
      </Li>
    ))}
  </Ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
