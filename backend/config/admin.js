module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b3b4636c44dac336295c02203dd17683'),
  },
});
