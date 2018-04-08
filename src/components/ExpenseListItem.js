import React from "react";

export default ({ description, amount, createdAt }) => (
  <tr>
    <td><h3>{description}</h3></td>
    <td>{amount}</td>
    <td>{createdAt}</td>
  </tr>
);
