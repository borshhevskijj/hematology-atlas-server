import fetch from "node-fetch";
import { env } from "node:process";
import "dotenv/config";

export default class BloodCellModel {
  async getBloodCellDescriptionByName(name) {
    const url = `https://api.tinybird.co/v0/pipes/getBloodCellsByName.json?token=${env.getBloodCellDescriptionByNameToken}&name=${name}`;
    console.log(`env.getBloodCellDescriptionByNameToken- ${env.getBloodCellDescriptionByNameToken}`);
    console.log(`process.env.getBloodCellDescriptionByNameToken- ${process.env.getBloodCellDescriptionByNameToken}`);
    console.log(name, "name");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`!response.ok`, response);
        throw new Error("Failed to fetch data from the DB.");
      }
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        console.log(result.data);
        return result.data;
      } else {
        return {
          error: "cell not found",
        };
      }
    } catch (error) {
      console.log(`error`, error);
      throw new Error("Failed to fetch data from the DB.");
    }
  }

  async getBloodCellsDescriptionByHemopoiesis(name) {
    const url = `https://api.tinybird.co/v0/pipes/getBloodCellsByHematopoiesis.json?token=${env.getBloodCellsDescriptionByHemopoiesisToken}&name=${name}`;
    console.log(`env.getBloodCellsDescriptionByHemopoiesisToken- ${env.getBloodCellsDescriptionByHemopoiesisToken}`);
    console.log(
      `process.env.getBloodCellsDescriptionByHemopoiesisToken- ${process.env.getBloodCellsDescriptionByHemopoiesisToken}`
    );
    console.log(name, "name");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`!response.ok`, response);
        throw new Error("Failed to fetch data from the DB.");
      }
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        console.log(result.data);
        return result.data;
      } else {
        return {
          error: "cell not found",
        };
      }
    } catch (error) {
      console.log(`error`, error);
      throw new Error("Failed to fetch data from the DB.");
    }
  }

  async getImagesByHemopoiesis(name) {
    const url = `https://api.tinybird.co/v0/pipes/getImagesByHematopoiesis.json?token=${env.getImagesByHemopoiesisToken}&name=${name}`;
    console.log(`env.getImagesByHemopoiesisToken- ${env.getImagesByHemopoiesisToken}`);
    console.log(`process.env.getImagesByHemopoiesisToken- ${process.env.getImagesByHemopoiesisToken}`);
    console.log(name, "name");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`!response.ok`, response);
        throw new Error("Failed to fetch data from the DB.");
      }
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        console.log(result.data);
        return result.data;
      } else {
        console.log("err");
        return {
          error: "images not found",
        };
      }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch data from the DB.");
    }
  }

  async getImagesByName(name) {
    const url = `https://api.tinybird.co/v0/pipes/getImagesByName.json?token=${env.getImagesByNameToken}&name=${name}`;
    console.log(`env.getImagesByNameToken- ${env.getImagesByNameToken}`);
    console.log(`process.env.getImagesByNameToken- ${process.env.getImagesByNameToken}`);
    console.log(name, "name");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`!response.ok`, response);
        throw new Error("Failed to fetch data from the DB.");
      }
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        console.log(result.data);
        return result.data;
      } else {
        return {
          error: "cell not found",
        };
      }
    } catch (error) {
      console.log(`error`, error);
      throw new Error("Failed to fetch data from the DB.");
    }
  }

  async getAllBloodCellsNames() {
    const url = `https://api.tinybird.co/v0/pipes/getAllBloodCellsNames.json?token=${env.getAllBloodCellsNamesToken}`;
    console.log(`env.getBloodCellDescriptionByNameToken- ${env.getAllBloodCellsNamesToken}`);
    console.log(`process.env.getBloodCellDescriptionByNameToken- ${process.env.getAllBloodCellsNamesToken}`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`!response.ok`, response);
        throw new Error("Failed to fetch data from the DB.");
      }
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        return result.data;
      } else {
        return {
          error: "cell not found",
        };
      }
    } catch (error) {
      console.log(`error`, error);
      throw new Error("Failed to fetch data from the DB.");
    }
  }
}
