import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Work Example 1",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit anet, consectetur adipisicing elit",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Portfolio Boilerplate",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit anet, consectetur adipisicing elit",
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/example2new.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example 3",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit anet, consectetur adipisicing elit",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': ` "Bengal cat” by roberto shabs is licensed under CC BY 2.0
                       https://www.flickr.com/photos/37287295@N00/2540855181`
        }
    }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
