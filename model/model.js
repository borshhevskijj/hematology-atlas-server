import fetch from "node-fetch";

export default class BloodCellModel {
  // getBloodCellDescriptionByName(name, callback) {
  //   const query = `SELECT * FROM BloodCells WHERE name = ?`;
  //   db.all(query, [name], callback);
  // }

  async getBloodCellsDescriptionByHemopoiesis(name) {
    const url = `https://api.tinybird.co/v0/pipes/getBloodCellsByHematopoiesis.json?token=p.eyJ1IjogIjA1ZDUxMGUwLTEyZWItNDJlNC1iMzE4LTNkZjRmM2U2NzM0NSIsICJpZCI6ICJiOTAyNDE4Yy1lOGExLTQ5ZjEtYjliMC1lZThkYjE5NjlhNmQiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.AAMLXdl2VG0LRg2puTQh5iQwTs34-g9fCAv3zTYqP9Y&name=${name}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`!response.ok`, response);
        throw new Error("Failed to fetch data from the API.");
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
      throw new Error("Failed to fetch data from the API.");
    }
  }

  async getImagesByHemopoiesis(name) {
    const url = `https://api.tinybird.co/v0/pipes/getImagesByHematopoiesis.json?token=p.eyJ1IjogIjA1ZDUxMGUwLTEyZWItNDJlNC1iMzE4LTNkZjRmM2U2NzM0NSIsICJpZCI6ICI1OTdiOWFiYS0yODVmLTQyYTgtOWYyMy1iZGFkZmEzZDEwNWUiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.__Veljn9MswTAnW7iZG2XqJI5MBJK8d6RIXOGwgh_cM&name=${name}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`!response.ok`, response);
        throw new Error("Failed to fetch data from the API.");
      }
      const result = await response.json();
      // if (result.data && result.data.length > 0) {
      console.log(result.data);
      return result.data;
      // } else {
      //   console.log("err");
      //   return {
      //     error: "images not found",
      //   };
      // }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch data from the API.");
    }
  }

  // getImagesByName(name, callback) {
  //   const query = `SELECT bci.*
  //   FROM BloodCellImages bci
  //   JOIN BloodCells bc ON bc.id = bci.bloodCell_id
  //   WHERE bc.name = ?`;
  //   db.all(query, [name], callback);
  // }

  // getAllBloodCellsNames(callback) {
  //   const query = `SELECT name FROM BloodCells`;
  //   db.all(query, callback);
  // }
}
