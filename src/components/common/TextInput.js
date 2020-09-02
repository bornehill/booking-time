import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error, classInput, classLabel }) => {
    let wrapperClass = 'form-group m-2';
    classInput = `form-control ${classInput}`;
    if(error && error.length >0)
    {
        wrapperClass += '' + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label className={classLabel} htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className={classInput}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
            {error && <div className="text-xs text-red-700">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    classInput: PropTypes.string,
    classLabel: PropTypes.string
};

export default TextInput;
