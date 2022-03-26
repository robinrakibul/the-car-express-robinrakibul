import React from 'react';
import { Accordion } from 'react-bootstrap';
import './QA.css';
const QA = () => {
    return (
        <div className='m-5'>
            <h4>Answer to some questions:</h4>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. How React Works?</Accordion.Header>
                    <Accordion.Body>
                    React is a Javascript library for developing user interfaces efficiently. Facebook is currently maintaining it and it is used to create single page applications. React supports JSX which is Javascript XML, It is easier to write HTML in React because of JSX. We can create interfaces in parts of many components. React helps us to create components that we can use in the future.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. What are the differences between props and state?</Accordion.Header>
                    <Accordion.Body>
                    The keyword 'Props' stands for properties. It is an attribute that we pass from a parent component to a child component for getting a value. But, the 'State' is a set of variables that determines the condition of the component. We use props as a parameter to the function to access values passed from a component. But if any changes occur to the component, that is when we use the state.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. How useState Works?</Accordion.Header>
                    <Accordion.Body>
                    The useState is a react hook and it has a variable and a function to it. The useState hook from react works like magic, it helps us to define one or more state variables in components. If we create a component and use the useState hook, it will be tracking the state. It will also update the state when any changes occurs. We can access and use the state easily in a component. 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default QA;