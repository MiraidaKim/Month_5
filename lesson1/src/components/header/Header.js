import { Button, Button1123123 } from "../button/Button";
import Title from "../Title.js";
import "./header.css";

export default function Header() {
  return (
    <div>
      <Title title="Header" name="Mira" age={20} />
      <Button name="Save" color="green" />
      <Button name="Delete" color="red" />
      <Button name="Edit" color="blue" />
      <Button1123123 name="Send" />
      <button className="btn">Save</button>
    </div>
  );
}
