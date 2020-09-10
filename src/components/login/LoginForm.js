import React from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({ user, onLogin, onChange, loading, errors }) => {
    return (
        <form className="max-w-sm mx-auto border border-onyx-700 rounded m-10 p-4">
            <h1 className="text-center">BookingTime Login</h1>
            <TextInput
                name="email"
                label="Email"
                type="text"
                value={user.email}
                onChange={onChange}
                error={errors.email}
                classInput="w-full border border-onyx-700 rounded"
                classLabel="text-flame-700"/>

            <TextInput
                name="password"
                label="Password"
                type="password"
                value={user.password}
                onChange={onChange}
                error={errors.password}
                classInput="w-full border border-onyx-700 rounded"
                classLabel="text-flame-700"/>

            <div className="form-group m-2">
              <input
                  type="submit"
                  disabled={loading}
                  value={loading ? "Waiting..." : "Login"}
                  className="btn bg-flame-700 text-white"
                  onClick={onLogin}/>
            </div>
        </form>
    );
};

LoginForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onLogin: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default LoginForm;
