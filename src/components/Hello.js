/**
 * Conceptually, components are like JavaScript functions & they accept
 * arbitrary input's (called props)
 * This is the functional component (Greeting) written using
 * ES6's arrow function syntax that takes no props and
 * returns a React elements describing what should appear on the screen.
 * here "hello my world, i am functional stateless components"
 * Functional components generally are just used for display purposes - 
 * these components call functions from parent components to handle user interactions or state updates.
*/
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";

const Hello = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                <Text>Hello! {props.textFirstName}</Text>
                <Text>{props.textLastName}</Text>
            </View>
        </TouchableOpacity>
    )
};

Hello.propTypes = {
    textFirstName: PropTypes.string.isRequired,
    textLastName: PropTypes.string.isRequired,
};

Hello.defaultProps = { textFirstName: 'Balaram', textLastName: 'Gopal Das' }

export default Hello;
