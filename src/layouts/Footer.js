import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer">
      <span>&copy; 2023. Abdolit. All Rights Reserved.</span>
      <span>Created by: <Link to="/" target="_blank">Rasika Jayasinghe</Link></span>
    </div>
  )
}