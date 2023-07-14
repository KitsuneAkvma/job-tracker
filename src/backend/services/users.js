import colors from "colors";
import { pool } from "../database/config.js";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

// const saltRounds = 20;
// const hashPassword = (password) =>
//   bcrypt.genSalt(saltRounds).then((salt) => {
//     return bcrypt.hash(password, salt);
//   });

export const getCurrentUser = async (credentials) => {
  try {
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const signup = async (credentials) => {
  const hashedPassword = await bcrypt.hash(credentials.pass, 20);
  const accountData = {
    ...credentials,
    pass: hashedPassword,
  };
  console.log({ accountData });
  const values = Object.values(accountData);
  const verificationToken = nanoid(50);
  const { username, email } = credentials;

  try {
    const rows = await pool.query(
      `
      INSERT INTO Users (username, email, pass, firstName, lastName, token, verified , verificationToken)
      VALUES (?, ?, ?, ?, ?, "", FALSE, ?)
      `,
      [...values, verificationToken],
    );
    console.log(rows);
    return {
      status: 201,
      message: "Account successfully created.",
      data: { id: rows.insertedId, username, email },
    };
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const verifyAccount = async (credentials) => {
  try {
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const resendEmailVerify = async (credentials) => {
  try {
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const login = async (credentials) => {
  try {
    return {
      status: 201,
      message: "Logged in !",
      data: {},
    };
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const logout = async (credentials) => {
  try {
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const signout = async (credentials) => {
  try {
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const deleteAccount = async (credentials) => {
  try {
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
