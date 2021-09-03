import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="info_frame">
      <div class="frame_head">
        <p>한 패턴으로 시공할 경우</p>
      </div>
      <div class="frame_body">
        <dl>
          <dt>천장 시공 면적</dt>
          <dd><span class="left">1,000,000,000,000,000,000 <b class="unit">Roll</b></span><span class="right">1,333m</span></dd>
        </dl>
        <dl>
          <dt>벽 시공</dt>
          <dd><span>74 <b className="unit">㎡</b></span><span>1,333m</span></dd>
        </dl>
        <dl>
          <dt>천장 제외한 벽지</dt>
          <dd><span>74 <b className="unit">㎡</b></span></dd>
        </dl>
        <dl>
          <dt>천장 시공 면적</dt>
          <dd><span>74 <b className="unit">Roll</b></span><span>930,303m</span></dd>
        </dl>
      </div>
    </div>
  );
}

export default App;
