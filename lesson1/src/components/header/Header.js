import Button123, {Button1123123} from '../button/Button';
import Title from '../Title';
import "./header.css";

export default function Header() {
    return (
        <div>
            <Title title="Header" name="Mira" age={20}/>  
            <Button name="Save" color="green" />  
            <Button name="Delete" color="red"/>  
            <Button name="Edit" color="blue"/>  
            <Button1123123 name="Send" />
            <button ClassName="btn">Save</button>
        </div>
    );
}