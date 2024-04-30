import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import BackAdmin from "./BackAdmin";

const UsersMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchUserMessages = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/contact/get_all_messages?page=1&limit=5`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserMessages();
  }, []);

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={{
        boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.2)",
        width: "90%",
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      <BackAdmin />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Sujet</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((message, index) => (
            <TableRow key={index}>
              <TableCell>{message.nom}</TableCell>
              <TableCell>{message.email}</TableCell>
              <TableCell>{message.sujet}</TableCell>
              <TableCell>{message.messages}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersMessages;
