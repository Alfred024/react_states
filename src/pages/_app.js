import '@/styles/globals.css'

import { UseState } from './UseState';
import { ClassState } from './ClassState';
import { UseReducer } from './UseReducer';

export default function App() {
  return (
    <div>
      <UseState/>
      <ClassState/>
      <UseReducer/>
    </div>
  );
}
