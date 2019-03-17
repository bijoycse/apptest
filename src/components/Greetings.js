import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Greetings extends Component {
    render() {
        return (
            <View>
                <Text>
                    Hello, Good Noon
                </Text>
            </View>
        );
    }
}

Greetings.propTypes = {

};

export default Greetings;