import fetch from "node-fetch";
import "dotenv/config";

export default class BloodCellModel {
  async getBloodCellDescriptionByName(name) {
    const url = `https://api.tinybird.co/v0/pipes/getBloodCellsByName.json?token=${process.env.getBloodCellDescriptionByNameToken}&name=${name}`;
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
    const url = `https://api.tinybird.co/v0/pipes/getBloodCellsByHematopoiesis.json?token=${process.env.getBloodCellsDescriptionByHemopoiesisToken}&name=${name}`;
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
    const url = `https://api.tinybird.co/v0/pipes/getImagesByHematopoiesis.json?token=${process.env.getImagesByHemopoiesisToken}&name=${name}`;
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
    const url = `https://api.tinybird.co/v0/pipes/getImagesByName.json?token=${process.env.getImagesByNameToken}&name=${name}`;

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
    const url = `https://api.tinybird.co/v0/pipes/getAllBloodCellsNames.json?token=${process.env.getAllBloodCellsNamesToken}`;

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
