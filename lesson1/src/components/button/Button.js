import React from "react";
import cls from "./button.module.scss";

export function Button({ name, color }) {
  return <button className={`${cls[color]} ${cls.btn}`}>{name}</button>;
}

export function Button1123123({ name, color }) {
  return <button className={`${cls[color]} ${cls.btn}`}>{name}</button>;
}
