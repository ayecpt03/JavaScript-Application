const http = require('http');
const port = process.env.PORT || 3000;

http.listen(port, () => console.log(`Server running on port ${port}`));

