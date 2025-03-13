import React from 'react';
import AppContent from './component/AppContent';
import { Provider } from 'react-redux';
import { store } from './Store/Store';

function App() {
  return (
    <Provider store={store}> {/* Corrected 'store' prop name */}
      <AppContent />
    </Provider>
  );
}

export default App;
