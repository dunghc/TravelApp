import React from "react";
import PropTypes from 'prop-types';
import {StyleSheet, Image, TextInput as ReactTextInput, View} from "react-native";

class TextInput extends React.Component {
    render() {
        let styles = StyleSheet.create({
            inputContainer: {
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                alignSelf: 'stretch',
                paddingLeft: 16,
                paddingRight: 16,
                marginTop: 8,
                marginBottom: 8,
                borderBottomWidth: 1,
                borderBottomColor: '#D0D0D0',
            },
            inputIcon: {
                width: 16,
                height: 16,
                resizeMode: 'center'
            },
            input: {
                flex: 1,
                marginLeft: this.props.icon ? 8 : 0,
                fontSize: 10,
                height: 24,
                padding: 0
            }
        });
        return (
            <View style={styles.inputContainer}>
                {this.props.icon &&
                <Image
                    source={this.props.icon}
                    style={styles.inputIcon}/>
                }
                <ReactTextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'#D0D0D0'}
                    underlineColorAndroid="transparent"
                    value={this.props.value}
                    onChangeText={this.props.onChange}/>
            </View>
        )
    }
}

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.any,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default TextInput;
