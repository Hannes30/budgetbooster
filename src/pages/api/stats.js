import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hannes",
  database: "bb",
});
export default (req, res) => {
  connection.query("SELECT * FROM stats", (error, results, fields) => {
    if (error) throw error;
    connection.query(
      `INSERT INTO stats (id, money, moneyhistory) VALUES (${results.length}, ${req.query.money}, '${req.query.moneyhistory}');`,
      (error, results, fields) => {
        if (error) throw error;
      }
    );
    const moneyHistoryArray = results.map((result) => result.moneyhistory);
    const moneyArray = results.map((result) => result.money);
    const sum = moneyArray.reduce((acc, val) => acc + val, 0);
    res.send({
      money: sum / moneyArray.length,
      history: calculateAvarage(moneyHistoryArray).join(","),
    });
  });
};

function calculateAvarage(array) {
  console.log(array);
  const arrayOfArrays = array.map((str) => str.split(",").map(Number));
  const averages = [];
  for (let i = 0; i < arrayOfArrays[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arrayOfArrays.length; j++) {
      sum += arrayOfArrays[j][i];
    }
    averages.push(sum / arrayOfArrays.length);
  }
  return averages;
}
