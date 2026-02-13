import React from 'react';
import { EditorProvider } from './core/EditorContext';
import './index.css';

function App() {
  return (
    <EditorProvider>
      <div className="app-container">
        {/* The target for the BlockManager */}
        <div id="blocks"></div> 

        <div id="editor-row">
          {/* The target for the Main Canvas */}
          <div id="gjs"></div>
        </div>

        <div id="styles-container">
          <div className="panel-header">Styles</div>
          <div id="styles"></div>
          <div className="panel-header">Traits</div>
          <div id="traits"></div>
        </div>
      </div>
    </EditorProvider>
  );
}

export default App;