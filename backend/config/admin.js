module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e127a5d258d57b31a5d12c279022556b'),
  },
});
