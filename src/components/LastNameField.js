import React from 'react';

import TextField from './TextField';

const LastNameField = ({...rest}) => (
    <TextField name="lastName"
                label="Last name:"
                {...rest} />
);

export default LastNameField;
