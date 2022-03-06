import React from 'react';
import H2 from './atoms/H2';

function Header() {
  return <H2 text={'NotesApp'}/>;
}

export default React.memo(Header);
