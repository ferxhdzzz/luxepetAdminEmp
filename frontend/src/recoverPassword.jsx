import React, { useState } from 'react';



const PasswordChange = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            alert('Contraseña actualizada correctamente');
            setPassword('');
            setConfirmPassword('');
        } else {
            alert('Las contraseñas no coinciden');
        }
    };

    return (
        <div className="password-change-container">
            {/* Logo de Arriba*/}
            <div className="left-section">
                <div className="header">
                    <div className="back-button">
                        <span>&lt;</span>
                    </div>
                    <div className="logo">
                        {/*LOGO DE LUXEPET*/}
                    </div>
                </div>

                <div className="illustration-container">
                    {/*Imagen en grande*/}
                    <div className="placeholder-illustration"></div>
                </div>
            </div>

            {/* Formulario para cambiar*/}
            <div className="right-section">
                <h1 className="form-title">Cambiar contraseña</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirmar contraseña</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="update-button">
                        Actualizar Contraseña
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordChange;