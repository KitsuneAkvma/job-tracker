import { pool } from "../database/config.js";
import colors from "colors";

export const getAllJobs = async () => {
  try {
    const [rows] = await pool.query(`
    SELECT * FROM Jobs
    `);

    return { status: 200, message: "Successfully found jobs", data: rows };
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const getJob = async (id) => {
  try {
    const [rows] = await pool.query(
      `
    SELECT * FROM Jobs
    WHERE _ID = ?
    `,
      [id],
    );

    return { status: 302, message: "Successfully found job", data: rows };
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
export const addJob = async (jobData) => {
  const values = Object.values(jobData);
  console.log(values);
  try {
    const [rows] = await pool.query(
      `
  INSERT INTO Jobs (Company, JobTitle, JobLocation, ApplicationDate, ApplicationStatus, CoverLetter, Owner)
  VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [...values],
    );

    const { company, jobTitle, applicationDate } = jobData;
    return {
      status: 201,
      message: `Added ${jobTitle} job.`,
      data: { id: rows.insertId, company, jobTitle, applicationDate },
    };
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};

export const deleteJob = async (id) => {
  try {
    const rows = await pool.query(
      `
    DELETE FROM Jobs 
    WHERE _ID = ?`,
      [id],
    );
    console.log(rows);
    return { status: 204 };
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};

export const updateJob = async (id, credentials) => {
  const values = Object.values(credentials);
  try {
    const [rows] = await pool.query(
      `
    UPDATE Jobs
    SET Company = ?, JobTitle = ?, JobLocation = ?, ApplicationDate = ?, ApplicationStatus = ?, CoverLetter = ?, Owner = ?
    WHERE _ID = ?;
     `,
      [...values, id],
    );
    return { status: 202, message: "Successfully updated job", data: rows };
  } catch (error) {
    console.error(colors.bgRed(error));
  }
};
