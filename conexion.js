const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tienda_barby'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexion exitosa')
})

connection.query('SELECT * from productos', (err,rows) => {
    if(err) throw err
    console.log('los datos de la tabla son estos:')
    console.log(rows)
    console.log('la cantidad deresultados es:')
    console.log(rows.length)
})



const productos = 'SELECT * FROM productos';

connection.query(productos,function(error, lista){
  if(error){
    throw error;
  }else{

    console.log(lista[2]);
  }
});

connection.end();
