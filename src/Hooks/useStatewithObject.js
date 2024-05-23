import React, { useState } from 'react';

function UseStatewithObject() {
    const [name, setName] = useState({ FName: '', LName: '' });

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>
                <label style={{ marginBottom: '10px' }}>
                    First Name:
                    <input
                        type='text'
                        value={name.FName}
                        onChange={(e) => setName({ ...name, FName: e.target.value })}
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Last Name:
                    <input
                        type='text'
                        value={name.LName}
                        onChange={(e) => setName({ ...name, LName: e.target.value })}
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </label>
                <h1 style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
                    Your first name: {name.FName}
                </h1>
                <h1 style={{ fontSize: '18px', color: '#333' }}>
                    Your last name: {name.LName}
                </h1>
            </form>
        </div>
    );
}

export default UseStatewithObject;
