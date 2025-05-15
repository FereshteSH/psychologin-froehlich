import {getContent} from '@/src/lib/getContent'
import { get } from 'http';


type Params= {lang:"de" | "tr"};

export default function About({params}:{params:Params}) {

  const about=getContent(params.lang,"about")
  return (
    <div className="pt-20">
      <h1>About Me</h1>
    </div>
  );
}   