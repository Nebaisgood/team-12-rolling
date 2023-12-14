import { useEffect, useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header/Header';
import HeaderTop from './components/Header/HeaderTop';
import HeaderBottom from './components/Header/HeaderBottom';
import DropdownBox from './components/TextField/Dropdown';
import Card from './components/Card/Card';

function App() {
  const [deletePage, setDeletePage] = useState(false);
  const [add, setAdd] = useState(true);

  const isDelete = () => {
    setDeletePage((prev) => !prev);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <HeaderTop size="sm" />
      </Header>
      <Header>
        <HeaderBottom>ddd</HeaderBottom>
      </Header>
      <Card deletePage={deletePage}> </Card>
      <Card deletePage={!deletePage}> </Card>
      <Card deletePage={deletePage} add={add}></Card>
    </div>
  );
}

export default App;
