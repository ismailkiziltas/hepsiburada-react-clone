import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [nameInput, setNameInput] = useState('');

  const handleLogin = () => {
    if (nameInput.trim()) {
      onLogin(nameInput);
      setNameInput('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
        <input
          type="text"
          placeholder="Adınızı girin"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            İptal
          </button>
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-hepsi-orange text-white rounded-md"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;