import React, { useState } from 'react';

import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'Favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
]
const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    },
];


const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a Color" selected={selected} onSelectedChange={setSelected} options={options} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            {/*<Dropdown selected={selected} onSelectedChange={setSelected} options={options} />*/}
            {/*<Translate />*/}
        </>
    )
};

export default App;