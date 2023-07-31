import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from './Button';

function Home() {
  return (
    <ThemeContext.Provider value="crimson">
      {/* <Button/> */}
      <Button>
        Aloha!
        <p>
          Laborum culpa incididunt occaecat commodo aliqua quis magna fugiat nulla ea esse. Ex in id ut velit nostrud. Mollit id irure do culpa. Culpa velit non id eu exercitation dolor officia amet irure. Sint voluptate ut quis sit duis officia in ex aliquip laboris.
        </p>
      </Button>
    </ThemeContext.Provider>
  )
}

export default Home