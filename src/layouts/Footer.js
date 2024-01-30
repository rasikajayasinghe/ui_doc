import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer">
      <span>&copy; 2023. All Rights Reserved.</span>
      <span>Created by: <Link to="https://github.com/rasikajayasinghe" target="_blank">Rasika Jayasinghe</Link></span>
    </div>
  )
}