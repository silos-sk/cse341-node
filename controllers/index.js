displayName = (req, res) => {
    const data =
      'Ella Marce';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayName
  };