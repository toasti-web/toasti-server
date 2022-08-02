module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c30e67d9b3bcf535478efd2c3690f62'),
  },
});
